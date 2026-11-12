const fs = require("node:fs");
const http = require("node:http");
const path = require("node:path");

loadEnvFile(path.join(__dirname, ".env"));

const SYSTEM_INSTRUCTIONS = [
    "Você é um assistente de cozinha do aplicativo Tempero de Casa.",
    "Responda sempre em português do Brasil, de forma amigável, clara e prática.",
    "Ajude com receitas, ingredientes, substituições e etapas de preparo.",
    "Ao orientar preparos, organize instruções em passos quando isso ajudar.",
    "Leve alergias e restrições alimentares a sério e sugira que a pessoa confira os rótulos.",
    "Não dê diagnósticos nem substitua orientação profissional de saúde.",
    "Se a pergunta não for relacionada a cozinha ou alimentação, explique gentilmente seu foco.",
].join(" ");

const MAX_BODY_BYTES = 12 * 1024 * 1024;
const MAX_MESSAGES = 12;
const MAX_MESSAGE_LENGTH = 2000;
const MAX_IMAGE_DATA_URL_LENGTH = 10 * 1024 * 1024;
const MAX_REQUESTS_PER_MINUTE = 15;
const RATE_LIMIT_WINDOW_MS = 60 * 1000;

function loadEnvFile(filePath) {
    if (!fs.existsSync(filePath)) return;

    const lines = fs.readFileSync(filePath, "utf8").split(/\r?\n/);
    for (const line of lines) {
        const match = line.match(/^\s*([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*?)\s*$/);
        if (!match || Object.hasOwn(process.env, match[1])) continue;

        const value = match[2].replace(/^(['"])(.*)\1$/, "$2");
        process.env[match[1]] = value;
    }
}

function sendJson(response, status, body) {
    response.writeHead(status, {
        "Content-Type": "application/json; charset=utf-8",
        "Cache-Control": "no-store",
        "X-Content-Type-Options": "nosniff",
    });
    response.end(JSON.stringify(body));
}

function readJsonBody(request) {
    return new Promise((resolve, reject) => {
        const chunks = [];
        let totalBytes = 0;
        let tooLarge = false;

        request.on("data", (chunk) => {
            totalBytes += chunk.length;
            if (totalBytes > MAX_BODY_BYTES) {
                tooLarge = true;
                chunks.length = 0;
                return;
            }
            if (!tooLarge) chunks.push(chunk);
        });

        request.on("end", () => {
            if (tooLarge) {
                reject(Object.assign(new Error("Corpo da requisição muito grande."), { status: 413 }));
                return;
            }

            try {
                resolve(JSON.parse(Buffer.concat(chunks).toString("utf8")));
            } catch {
                reject(Object.assign(new Error("Envie um JSON válido."), { status: 400 }));
            }
        });

        request.on("error", reject);
    });
}

function validateMessages(value) {
    if (!Array.isArray(value) || value.length === 0 || value.length > MAX_MESSAGES) {
        return "Envie de 1 a 12 mensagens na conversa.";
    }

    for (const message of value) {
        if (
            !message ||
            !["user", "assistant"].includes(message.role) ||
            !isValidMessageContent(message.content)
        ) {
            return "Cada mensagem deve ter um papel válido e texto de até 2.000 caracteres ou uma imagem compatível.";
        }
    }

    if (value[value.length - 1].role !== "user") {
        return "A última mensagem da conversa deve ser do usuário.";
    }

    return null;
}

function isValidMessageContent(content) {
    if (typeof content === "string") {
        return Boolean(content.trim()) && content.length <= MAX_MESSAGE_LENGTH;
    }

    if (!Array.isArray(content) || content.length === 0 || content.length > 2) {
        return false;
    }

    let hasContent = false;
    let hasImage = false;
    for (const part of content) {
        if (part?.type === "input_text") {
            if (
                typeof part.text !== "string" ||
                !part.text.trim() ||
                part.text.length > MAX_MESSAGE_LENGTH
            ) {
                return false;
            }
            hasContent = true;
        } else if (part?.type === "input_image") {
            if (
                hasImage ||
                typeof part.image_url !== "string" ||
                part.image_url.length > MAX_IMAGE_DATA_URL_LENGTH ||
                !/^data:image\/(?:jpeg|png|webp|gif);base64,[A-Za-z0-9+/]+={0,2}$/.test(part.image_url) ||
                (part.detail !== undefined && part.detail !== "auto")
            ) {
                return false;
            }
            hasImage = true;
            hasContent = true;
        } else {
            return false;
        }
    }

    return hasContent;
}

function extractOutputText(data) {
    if (typeof data.output_text === "string" && data.output_text.trim()) {
        return data.output_text.trim();
    }

    const text = (data.output || [])
        .flatMap((item) => item.content || [])
        .filter((item) => item.type === "output_text" && typeof item.text === "string")
        .map((item) => item.text)
        .join("")
        .trim();

    return text || null;
}

function createServer({ env = process.env, fetchImpl = fetch } = {}) {
    const requestsByIp = new Map();
    const allowedOrigins = (env.CHAT_ALLOWED_ORIGINS ||
        "http://localhost:8081,http://127.0.0.1:8081,http://localhost:19006,http://127.0.0.1:19006")
        .split(",")
        .map((origin) => origin.trim())
        .filter(Boolean);

    return http.createServer(async (request, response) => {
        const origin = request.headers.origin;
        if (origin && !allowedOrigins.includes(origin)) {
            sendJson(response, 403, { error: "Origem não autorizada." });
            return;
        }

        if (origin) {
            response.setHeader("Access-Control-Allow-Origin", origin);
            response.setHeader("Vary", "Origin");
            response.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
            response.setHeader("Access-Control-Allow-Headers", "Content-Type");
        }

        if (request.method === "OPTIONS") {
            response.writeHead(204);
            response.end();
            return;
        }

        const pathname = new URL(request.url, "http://localhost").pathname;
        if (request.method === "GET" && pathname === "/health") {
            sendJson(response, 200, { status: "ok", configured: Boolean(env.OPENAI_API_KEY) });
            return;
        }

        if (request.method !== "POST" || pathname !== "/api/chat") {
            sendJson(response, 404, { error: "Rota não encontrada." });
            return;
        }

        const now = Date.now();
        const clientIp = request.socket.remoteAddress || "unknown";
        const recentRequests = (requestsByIp.get(clientIp) || [])
            .filter((timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS);
        if (recentRequests.length >= MAX_REQUESTS_PER_MINUTE) {
            sendJson(response, 429, { error: "Muitas mensagens. Aguarde um minuto e tente novamente." });
            return;
        }
        recentRequests.push(now);
        requestsByIp.set(clientIp, recentRequests);
        if (requestsByIp.size > 2000) {
            for (const [ip, timestamps] of requestsByIp) {
                if (!timestamps.some((timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS)) {
                    requestsByIp.delete(ip);
                }
            }
        }

        if (!env.OPENAI_API_KEY) {
            sendJson(response, 503, { error: "O serviço de IA ainda não foi configurado no servidor." });
            return;
        }

        if (!request.headers["content-type"]?.includes("application/json")) {
            sendJson(response, 415, { error: "O conteúdo deve ser enviado como application/json." });
            return;
        }

        const contentLength = Number(request.headers["content-length"] || 0);
        if (contentLength > MAX_BODY_BYTES) {
            sendJson(response, 413, { error: "A conversa enviada é muito grande." });
            return;
        }

        let body;
        try {
            body = await readJsonBody(request);
        } catch (error) {
            sendJson(response, error.status || 400, { error: error.message || "Não foi possível ler a requisição." });
            return;
        }

        const validationError = validateMessages(body?.messages);
        if (validationError) {
            sendJson(response, 400, { error: validationError });
            return;
        }

        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 30_000);

        try {
            const upstream = await fetchImpl("https://api.openai.com/v1/responses", {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${env.OPENAI_API_KEY}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    model: env.OPENAI_MODEL || "gpt-4.1-mini",
                    instructions: SYSTEM_INSTRUCTIONS,
                    input: body.messages.map(({ role, content }) => ({
                        role,
                        content: typeof content === "string"
                            ? content.trim()
                            : content.map((part) => part.type === "input_text"
                                ? { ...part, text: part.text.trim() }
                                : part),
                    })),
                    max_output_tokens: 600,
                }),
                signal: controller.signal,
            });

            if (!upstream.ok) {
                console.error(`OpenAI respondeu com HTTP ${upstream.status}.`);
                const status = upstream.status === 429 ? 503 : 502;
                let errorMessage = "Não foi possível obter uma resposta da IA.";
                if (upstream.status === 401) {
                    errorMessage = "A chave da OpenAI foi recusada. Confira a chave configurada no backend.";
                } else if (upstream.status === 403) {
                    errorMessage = "O projeto da OpenAI não tem acesso ao modelo configurado.";
                } else if (upstream.status === 404) {
                    errorMessage = "O modelo configurado não foi encontrado. Confira OPENAI_MODEL no backend.";
                } else if (upstream.status === 429) {
                    errorMessage = "O serviço de IA está ocupado ou sem saldo disponível. Confira sua conta OpenAI e tente novamente.";
                }
                sendJson(response, status, {
                    error: errorMessage,
                });
                return;
            }

            const data = await upstream.json();
            const reply = extractOutputText(data);
            if (!reply) {
                console.error("OpenAI retornou uma resposta sem texto.");
                sendJson(response, 502, { error: "A IA não retornou uma resposta em texto." });
                return;
            }

            sendJson(response, 200, { reply });
        } catch (error) {
            if (error.name === "AbortError") {
                sendJson(response, 504, { error: "A resposta demorou demais. Tente novamente." });
                return;
            }

            console.error("Falha ao conectar com a OpenAI:", error.message);
            sendJson(response, 502, { error: "Não foi possível conectar ao serviço de IA." });
        } finally {
            clearTimeout(timeout);
        }
    });
}

if (require.main === module) {
    const port = Number(process.env.PORT || 3001);
    const host = process.env.HOST || "0.0.0.0";
    createServer().listen(port, host, () => {
        console.log(`API de chat disponível em http://${host}:${port}`);
        if (!process.env.OPENAI_API_KEY) {
            console.warn("OPENAI_API_KEY não configurada. Preencha backend-ia/.env e reinicie o servidor.");
        }
    });
}

module.exports = { createServer };
