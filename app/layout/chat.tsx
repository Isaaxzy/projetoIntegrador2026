import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useRef, useState } from "react";
import {
    ActivityIndicator,
    KeyboardAvoidingView,
    Platform,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { perguntarAoAssistente } from "../servicos/chat";

type Mensagem = {
    id: number;
    texto: string;
    autor: "usuario" | "assistente";
};

const sugestoes = [
    "Como posso substituir um ingrediente?",
    "Me ajude com o preparo de uma receita",
    "O que posso fazer com o que tenho em casa?",
];

export default function Chat() {
    const router = useRouter();
    const scrollRef = useRef<ScrollView>(null);
    const [texto, setTexto] = useState("");
    const [mensagens, setMensagens] = useState<Mensagem[]>([]);
    const [enviando, setEnviando] = useState(false);
    const [erro, setErro] = useState<string | null>(null);

    async function enviarMensagem(mensagem = texto) {
        const conteudo = mensagem.trim();
        if (!conteudo || enviando) return;

        setTexto("");
        setErro(null);
        setEnviando(true);

        try {
            const historico = [
                ...mensagens.map((item) => ({
                    role: item.autor === "usuario" ? "user" as const : "assistant" as const,
                    content: item.texto,
                })),
            ].slice(-11);
            historico.push(
                { role: "user" as const, content: conteudo },
            );
            const resposta = await perguntarAoAssistente(historico);
            const id = Date.now();
            setMensagens((atuais) => [
                ...atuais,
                { id, texto: conteudo, autor: "usuario" },
                { id: id + 1, texto: resposta, autor: "assistente" },
            ]);
        } catch (error) {
            setTexto(conteudo);
            setErro(error instanceof Error ? error.message : "Não foi possível enviar sua mensagem.");
        } finally {
            setEnviando(false);
        }
    }

    return (
        <SafeAreaView style={styles.areaSegura} edges={["top", "bottom"]}>
            <KeyboardAvoidingView
                style={styles.container}
                behavior={Platform.OS === "ios" ? "padding" : undefined}
                keyboardVerticalOffset={Platform.OS === "ios" ? 8 : 0}
            >
                <View style={styles.cabecalho}>
                    <Pressable
                        accessibilityRole="button"
                        accessibilityLabel="Voltar para a página inicial"
                        onPress={() => router.back()}
                        style={styles.botaoVoltar}
                    >
                        <Ionicons name="arrow-back" size={23} color="#168A3A" />
                    </Pressable>
                    <View style={styles.infoCabecalho}>
                        <View style={styles.iconeCabecalho}>
                            <Ionicons name="restaurant-outline" size={22} color="#168A3A" />
                        </View>
                        <View>
                            <Text style={styles.titulo}>Ajuda na cozinha</Text>
                            <Text style={styles.subtitulo}>Tire dúvidas sobre receitas</Text>
                        </View>
                    </View>
                </View>

                <ScrollView
                    ref={scrollRef}
                    style={styles.conversa}
                    contentContainerStyle={styles.conteudoConversa}
                    keyboardShouldPersistTaps="handled"
                    onContentSizeChange={() => scrollRef.current?.scrollToEnd({ animated: true })}
                >
                    {mensagens.length === 0 ? (
                        <View style={styles.boasVindas}>
                            <View style={styles.iconeBoasVindas}>
                                <Ionicons name="chatbubbles-outline" size={34} color="#168A3A" />
                            </View>
                            <Text style={styles.tituloBoasVindas}>O que vamos cozinhar?</Text>
                            <Text style={styles.textoBoasVindas}>
                                Pergunte sobre ingredientes, substituições ou etapas de preparo.
                            </Text>
                            <Text style={styles.rotuloSugestoes}>Sugestões para começar</Text>
                            {sugestoes.map((sugestao) => (
                                <Pressable
                                    key={sugestao}
                                    disabled={enviando}
                                    onPress={() => void enviarMensagem(sugestao)}
                                    style={styles.sugestao}
                                >
                                    <Text style={styles.textoSugestao}>{sugestao}</Text>
                                    <Ionicons name="arrow-up-circle-outline" size={20} color="#168A3A" />
                                </Pressable>
                            ))}
                        </View>
                    ) : (
                        mensagens.map((mensagem) => (
                            <View
                                key={mensagem.id}
                                style={[
                                    styles.bolha,
                                    mensagem.autor === "usuario" ? styles.bolhaUsuario : styles.bolhaAssistente,
                                ]}
                            >
                                <Text style={mensagem.autor === "usuario" ? styles.textoUsuario : styles.textoAssistente}>
                                    {mensagem.texto}
                                </Text>
                            </View>
                        ))
                    )}
                    {enviando && (
                        <View style={[styles.bolha, styles.bolhaAssistente, styles.bolhaCarregando]}>
                            <ActivityIndicator size="small" color="#168A3A" />
                            <Text style={styles.textoAssistente}>Preparando uma resposta...</Text>
                        </View>
                    )}
                </ScrollView>

                {erro && (
                    <View accessibilityRole="alert" style={styles.avisoErro}>
                        <Ionicons name="alert-circle-outline" size={18} color="#a8332c" />
                        <Text style={styles.textoErro}>{erro}</Text>
                    </View>
                )}
                <View style={styles.compositor}>
                    <TextInput
                        value={texto}
                        onChangeText={setTexto}
                        onSubmitEditing={() => void enviarMensagem()}
                        editable={!enviando}
                        placeholder="Escreva sua dúvida..."
                        placeholderTextColor="#858585"
                        accessibilityLabel="Digite sua dúvida sobre receitas"
                        maxLength={2000}
                        returnKeyType="send"
                        multiline
                        style={styles.campoTexto}
                    />
                    <Pressable
                        accessibilityRole="button"
                        accessibilityLabel="Enviar mensagem"
                        disabled={!texto.trim() || enviando}
                        onPress={() => void enviarMensagem()}
                        style={[styles.botaoEnviar, (!texto.trim() || enviando) && styles.botaoEnviarDesativado]}
                    >
                        {enviando
                            ? <ActivityIndicator size="small" color="#ffffff" />
                            : <Ionicons name="arrow-up" size={23} color="#ffffff" />}
                    </Pressable>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    areaSegura: {
        flex: 1,
        backgroundColor: "#f4f8f4",
    },
    container: {
        flex: 1,
        backgroundColor: "#f4f8f4",
    },
    cabecalho: {
        minHeight: 76,
        paddingHorizontal: 16,
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
        backgroundColor: "#ffffff",
        borderBottomWidth: 1,
        borderBottomColor: "#e5ece5",
    },
    botaoVoltar: {
        width: 42,
        height: 42,
        alignItems: "center",
        justifyContent: "center",
    },
    infoCabecalho: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    },
    iconeCabecalho: {
        width: 42,
        height: 42,
        borderRadius: 21,
        backgroundColor: "#e9f5eb",
        alignItems: "center",
        justifyContent: "center",
    },
    titulo: {
        color: "#173d24",
        fontSize: 17,
        fontWeight: "700",
    },
    subtitulo: {
        color: "#6d776f",
        fontSize: 13,
        marginTop: 2,
    },
    conversa: {
        flex: 1,
    },
    conteudoConversa: {
        flexGrow: 1,
        padding: 18,
        justifyContent: "flex-end",
    },
    boasVindas: {
        justifyContent: "center",
        flexGrow: 1,
        paddingBottom: 20,
    },
    iconeBoasVindas: {
        alignSelf: "center",
        width: 66,
        height: 66,
        borderRadius: 33,
        backgroundColor: "#e4f2e6",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 15,
    },
    tituloBoasVindas: {
        fontSize: 22,
        fontWeight: "700",
        color: "#173d24",
        textAlign: "center",
    },
    textoBoasVindas: {
        fontSize: 15,
        color: "#66736a",
        lineHeight: 22,
        textAlign: "center",
        marginTop: 8,
        marginBottom: 26,
    },
    rotuloSugestoes: {
        color: "#59645c",
        fontSize: 13,
        fontWeight: "600",
        marginBottom: 10,
    },
    sugestao: {
        minHeight: 50,
        borderWidth: 1,
        borderColor: "#dce8dd",
        borderRadius: 14,
        backgroundColor: "#ffffff",
        paddingHorizontal: 14,
        marginBottom: 9,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 10,
    },
    textoSugestao: {
        flex: 1,
        color: "#31543a",
        fontSize: 14,
    },
    bolha: {
        maxWidth: "86%",
        borderRadius: 18,
        paddingHorizontal: 15,
        paddingVertical: 11,
        marginBottom: 12,
    },
    bolhaUsuario: {
        alignSelf: "flex-end",
        backgroundColor: "#168A3A",
        borderBottomRightRadius: 5,
    },
    bolhaAssistente: {
        alignSelf: "flex-start",
        backgroundColor: "#ffffff",
        borderBottomLeftRadius: 5,
        borderWidth: 1,
        borderColor: "#e4eae4",
    },
    textoUsuario: {
        color: "#ffffff",
        fontSize: 15,
        lineHeight: 21,
    },
    textoAssistente: {
        color: "#354139",
        fontSize: 15,
        lineHeight: 21,
    },
    bolhaCarregando: {
        flexDirection: "row",
        alignItems: "center",
        gap: 9,
    },
    avisoErro: {
        flexDirection: "row",
        alignItems: "flex-start",
        gap: 8,
        paddingHorizontal: 14,
        paddingVertical: 10,
        backgroundColor: "#fff0ee",
    },
    textoErro: {
        flex: 1,
        color: "#8f2d27",
        fontSize: 13,
        lineHeight: 19,
    },
    compositor: {
        flexDirection: "row",
        alignItems: "flex-end",
        gap: 10,
        paddingHorizontal: 14,
        paddingTop: 11,
        paddingBottom: 10,
        backgroundColor: "#ffffff",
        borderTopWidth: 1,
        borderTopColor: "#e5ece5",
    },
    campoTexto: {
        flex: 1,
        minHeight: 46,
        maxHeight: 120,
        paddingHorizontal: 15,
        paddingTop: 12,
        paddingBottom: 10,
        borderRadius: 22,
        backgroundColor: "#f1f5f1",
        color: "#26352a",
        fontSize: 15,
    },
    botaoEnviar: {
        width: 44,
        height: 44,
        borderRadius: 22,
        backgroundColor: "#168A3A",
        alignItems: "center",
        justifyContent: "center",
    },
    botaoEnviarDesativado: {
        backgroundColor: "#a9c8af",
    },
});
