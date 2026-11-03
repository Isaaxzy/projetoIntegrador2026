export type MensagemChat = {
    role: "user" | "assistant";
    content: string;
};

type RespostaChat = {
    reply?: unknown;
    error?: unknown;
};

const CHAT_API_URL = (process.env.EXPO_PUBLIC_CHAT_API_URL || "http://localhost:3001")
    .trim()
    .replace(/\/+$/, "");

export async function perguntarAoAssistente(messages: MensagemChat[]): Promise<string> {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 35_000);
    let response: Response;

    try {
        response = await fetch(`${CHAT_API_URL}/api/chat`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ messages }),
            signal: controller.signal,
        });
    } catch (error) {
        if (error instanceof Error && error.name === "AbortError") {
            throw new Error("A resposta demorou demais. Tente enviar sua pergunta novamente.");
        }
        throw new Error(
            `Não foi possível acessar o servidor do chat (${CHAT_API_URL}). Verifique se ele está ativo e se a URL está correta.`,
        );
    } finally {
        clearTimeout(timeout);
    }

    let data: RespostaChat;
    try {
        data = await response.json() as RespostaChat;
    } catch {
        throw new Error("O servidor do chat retornou uma resposta inválida.");
    }

    if (!response.ok) {
        const mensagemErro =
            typeof data.error === "string" ? data.error : "Não foi possível obter uma resposta do assistente.";
        throw new Error(mensagemErro);
    }

    if (typeof data.reply !== "string" || !data.reply.trim()) {
        throw new Error("O servidor do chat não retornou uma resposta.");
    }

    return data.reply.trim();
}
