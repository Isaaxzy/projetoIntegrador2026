const assert = require("node:assert/strict");
const { after, before, test } = require("node:test");
const { createServer } = require("./server");

let server;
let baseUrl;
let openAiRequest;

before(async () => {
    server = createServer({
        env: {
            OPENAI_API_KEY: "test-key",
            OPENAI_MODEL: "test-model",
            CHAT_ALLOWED_ORIGINS: "http://localhost:8081",
        },
        fetchImpl: async (url, options) => {
            openAiRequest = { url, options };
            return new Response(JSON.stringify({ output_text: "Use fogo baixo e mexa sempre." }), {
                status: 200,
                headers: { "Content-Type": "application/json" },
            });
        },
    });

    await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
    baseUrl = `http://127.0.0.1:${server.address().port}`;
});

after(async () => {
    await new Promise((resolve, reject) => {
        server.close((error) => (error ? reject(error) : resolve()));
    });
});

test("expõe endpoint de saúde", async () => {
    const response = await fetch(`${baseUrl}/health`);
    assert.equal(response.status, 200);
    assert.deepEqual(await response.json(), { status: "ok", configured: true });
});

test("valida o histórico antes de chamar a OpenAI", async () => {
    const response = await fetch(`${baseUrl}/api/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [{ role: "system", content: "instrução" }] }),
    });

    assert.equal(response.status, 400);
    assert.match((await response.json()).error, /papel válido/);
    assert.equal(openAiRequest, undefined);
});

test("envia o contexto culinário e retorna a resposta da OpenAI", async () => {
    const response = await fetch(`${baseUrl}/api/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            messages: [
                { role: "user", content: "Como faço um molho?" },
            ],
        }),
    });

    assert.equal(response.status, 200);
    assert.deepEqual(await response.json(), { reply: "Use fogo baixo e mexa sempre." });
    assert.equal(openAiRequest.url, "https://api.openai.com/v1/responses");
    assert.equal(openAiRequest.options.headers.Authorization, "Bearer test-key");
    const payload = JSON.parse(openAiRequest.options.body);
    assert.equal(payload.model, "test-model");
    assert.match(payload.instructions, /assistente de cozinha/);
});

test("bloqueia origens web não autorizadas", async () => {
    const response = await fetch(`${baseUrl}/api/chat`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Origin: "https://site-nao-autorizado.example",
        },
        body: JSON.stringify({ messages: [{ role: "user", content: "Oi" }] }),
    });

    assert.equal(response.status, 403);
});

test("explica quando a chave da OpenAI é recusada", async () => {
    const serverWithInvalidKey = createServer({
        env: {
            OPENAI_API_KEY: "invalid-test-key",
            CHAT_ALLOWED_ORIGINS: "http://localhost:8081",
        },
        fetchImpl: async () => new Response("{}", { status: 401 }),
    });
    await new Promise((resolve) => serverWithInvalidKey.listen(0, "127.0.0.1", resolve));

    try {
        const response = await fetch(`http://127.0.0.1:${serverWithInvalidKey.address().port}/api/chat`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ messages: [{ role: "user", content: "teste" }] }),
        });
        assert.equal(response.status, 502);
        assert.match((await response.json()).error, /chave da OpenAI foi recusada/);
    } finally {
        await new Promise((resolve, reject) => {
            serverWithInvalidKey.close((error) => (error ? reject(error) : resolve()));
        });
    }
});
