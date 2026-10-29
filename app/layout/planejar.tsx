import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import {
    ActivityIndicator,
    Image,
    Modal,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";
import {
    receitasMaisProcuradas,
    receitasRecomendadas,
    receitasSobremesas,
    type Receita,
} from "../componentes/coisas";
import {
    carregarPlanoSemanal,
    criarPlanoVazio,
    diasDaSemana,
    salvarPlanoSemanal,
    type DiaDaSemana,
    type PlanoSemanal,
} from "../servicos/planejamento";

const receitasDisponiveis = [
    ...receitasRecomendadas,
    ...receitasSobremesas,
    ...receitasMaisProcuradas,
];

export default function Planejar() {
    const [plano, setPlano] = useState<PlanoSemanal>(criarPlanoVazio);
    const [diaSelecionado, setDiaSelecionado] = useState<DiaDaSemana | null>(null);
    const [receitaSelecionada, setReceitaSelecionada] = useState<Receita | null>(null);
    const [carregando, setCarregando] = useState(true);
    const [salvando, setSalvando] = useState(false);
    const [erro, setErro] = useState<string | null>(null);

    useEffect(() => {
        let ativo = true;

        async function carregar() {
            try {
                const planoSalvo = await carregarPlanoSemanal();
                if (ativo) {
                    setPlano(planoSalvo);
                }
            } catch {
                if (ativo) {
                    setErro("Não foi possível carregar seu planejamento salvo.");
                }
            } finally {
                if (ativo) {
                    setCarregando(false);
                }
            }
        }

        void carregar();
        return () => {
            ativo = false;
        };
    }, []);

    async function atualizarPlano(atualizado: PlanoSemanal) {
        setSalvando(true);
        setErro(null);

        try {
            await salvarPlanoSemanal(atualizado);
            setPlano(atualizado);
            setDiaSelecionado(null);
            setReceitaSelecionada(null);
        } catch {
            setErro("Não foi possível salvar. Verifique o armazenamento do dispositivo e tente novamente.");
        } finally {
            setSalvando(false);
        }
    }

    function adicionarReceita(dia: DiaDaSemana, receita: Receita) {
        const atualizado = {
            ...plano,
            [dia]: [...plano[dia], receita.id],
        };
        void atualizarPlano(atualizado);
    }

    function removerReceita(dia: DiaDaSemana, indice: number) {
        const atualizado = {
            ...plano,
            [dia]: plano[dia].filter((_, itemIndice) => itemIndice !== indice),
        };
        void atualizarPlano(atualizado);
    }

    const receitasPlanejadas = (dia: DiaDaSemana) =>
        plano[dia]
            .flatMap((id, indice) => {
                const receita = receitasDisponiveis.find((item) => item.id === id);
                return receita ? [{ receita, indice }] : [];
            });
    const diaModal = diasDaSemana.find((dia) => dia.id === diaSelecionado);
    const totalRefeicoes = diasDaSemana.reduce((total, dia) => total + plano[dia.id].length, 0);

    return (
        <ScrollView style={styles.tela} contentContainerStyle={styles.conteudo}>
            <View style={styles.container}>
                <View style={styles.marca}>
                    <Image
                        source={require("../imagens/2026_10_01_0mz_Kleki.png")}
                        style={styles.logo}
                    />
                    <Text style={styles.nomeMarca}>Tempero de casa</Text>
                </View>

                <View style={styles.cabecalho}>
                    <View style={styles.iconeCabecalho}>
                        <Ionicons name="calendar-outline" size={30} color="#168A3A" />
                    </View>
                    <View style={styles.textosCabecalho}>
                        <Text style={styles.titulo}>Planejador da semana</Text>
                        <Text style={styles.subtitulo}>
                            Escolha receitas e organize suas refeições para cada dia da semana.
                        </Text>
                    </View>
                </View>

                <View style={styles.tituloSecao}>
                    <Ionicons name="sparkles-outline" size={19} color="#168A3A" />
                    <Text style={styles.tituloSecaoTexto}>Receitas recomendadas</Text>
                    <Text style={styles.ajuda}>— escolha uma receita para adicionar a um dia</Text>
                </View>

                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View style={styles.listaReceitas}>
                        {receitasRecomendadas.map((receita) => (
                            <View key={receita.id} style={styles.cartaoReceita}>
                                <Image source={{ uri: receita.Imagem }} style={styles.imagemReceita} />
                                <Text style={styles.nomeReceita} numberOfLines={2}>
                                    {receita.titulo}
                                </Text>
                                <View style={styles.rodapeReceita}>
                                    <Ionicons name="time-outline" size={14} color="#60756a" />
                                    <Text style={styles.tempoReceita}>{receita.duracao.replace("⏳ ", "")}</Text>
                                    <Pressable
                                        accessibilityRole="button"
                                        accessibilityLabel={`Adicionar ${receita.titulo} a um dia`}
                                        style={styles.botaoAdicionarReceita}
                                        onPress={() => setReceitaSelecionada(receita)}
                                        disabled={salvando}
                                    >
                                        <Ionicons name="add" size={19} color="#fff" />
                                    </Pressable>
                                </View>
                            </View>
                        ))}
                    </View>
                </ScrollView>

                <View style={styles.resumo}>
                    <Text style={styles.tituloSemana}>Minha semana</Text>
                    <Text style={styles.contagem}>
                        {totalRefeicoes} {totalRefeicoes === 1 ? "refeição planejada" : "refeições planejadas"}
                    </Text>
                </View>

                {erro && (
                    <View style={styles.avisoErro}>
                        <Text style={styles.textoErro}>{erro}</Text>
                    </View>
                )}

                {carregando ? (
                    <ActivityIndicator size="large" color="#168A3A" style={styles.carregando} />
                ) : (
                    <View style={styles.gradeDias}>
                        {diasDaSemana.map((dia) => {
                            const receitasDoDia = receitasPlanejadas(dia.id);

                            return (
                                <View key={dia.id} style={styles.cartaoDia}>
                                    <View style={styles.cabecalhoDia}>
                                        <Text style={styles.nomeDia}>{dia.abreviacao}</Text>
                                        <Text style={styles.quantidadeDia}>{receitasDoDia.length}</Text>
                                    </View>

                                    {receitasDoDia.length === 0 ? (
                                        <Text style={styles.vazio}>Nenhuma refeição</Text>
                                    ) : (
                                        <View style={styles.refeicoes}>
                                            {receitasDoDia.map(({ receita, indice }) => (
                                                <View key={`${receita.id}-${indice}`} style={styles.itemRefeicao}>
                                                    <Text style={styles.nomeRefeicao} numberOfLines={2}>
                                                        {receita.titulo}
                                                    </Text>
                                                    <Pressable
                                                        accessibilityRole="button"
                                                        accessibilityLabel={`Remover ${receita.titulo} de ${dia.nome}`}
                                                        onPress={() => removerReceita(dia.id, indice)}
                                                        disabled={salvando}
                                                    >
                                                        <Ionicons name="close-circle-outline" size={20} color="#7b8b80" />
                                                    </Pressable>
                                                </View>
                                            ))}
                                        </View>
                                    )}

                                    <Pressable
                                        accessibilityRole="button"
                                        style={styles.botaoAdicionarDia}
                                        onPress={() => setDiaSelecionado(dia.id)}
                                    >
                                        <Ionicons name="add-circle-outline" size={18} color="#168A3A" />
                                        <Text style={styles.textoBotaoAdicionar}>Adicionar refeição</Text>
                                    </Pressable>
                                </View>
                            );
                        })}
                    </View>
                )}
            </View>

            <Modal
                visible={diaSelecionado !== null || receitaSelecionada !== null}
                transparent
                animationType="slide"
                onRequestClose={() => {
                    setDiaSelecionado(null);
                    setReceitaSelecionada(null);
                }}
            >
                <View style={styles.fundoModal}>
                    <View style={styles.conteudoModal}>
                        <View style={styles.cabecalhoModal}>
                            <View>
                                <Text style={styles.tituloModal}>
                                    {receitaSelecionada ? "Escolher um dia" : "Adicionar refeição"}
                                </Text>
                                <Text style={styles.subtituloModal}>
                                    {receitaSelecionada
                                        ? `Em qual dia você quer comer ${receitaSelecionada.titulo}?`
                                        : diaModal
                                          ? `Escolha uma receita para ${diaModal.nome}`
                                          : "Escolha uma receita"}
                                </Text>
                            </View>
                            <Pressable
                                accessibilityRole="button"
                                accessibilityLabel="Fechar seleção de receitas"
                                onPress={() => {
                                    setDiaSelecionado(null);
                                    setReceitaSelecionada(null);
                                }}
                            >
                                <Ionicons name="close" size={26} color="#35463b" />
                            </Pressable>
                        </View>

                        <ScrollView>
                            {receitaSelecionada
                                ? diasDaSemana.map((dia) => (
                                    <Pressable
                                        key={dia.id}
                                        style={styles.opcaoDia}
                                        onPress={() => adicionarReceita(dia.id, receitaSelecionada)}
                                        disabled={salvando}
                                    >
                                        <View style={styles.detalheOpcao}>
                                            <Text style={styles.nomeOpcao}>{dia.nome}</Text>
                                            <Text style={styles.tempoOpcao}>
                                                {plano[dia.id].length}{" "}
                                                {plano[dia.id].length === 1 ? "refeição planejada" : "refeições planejadas"}
                                            </Text>
                                        </View>
                                        <Ionicons name="add-circle" size={24} color="#168A3A" />
                                    </Pressable>
                                ))
                                : receitasDisponiveis.map((receita) => (
                                <Pressable
                                    key={receita.id}
                                    style={styles.opcaoReceita}
                                    onPress={() => diaSelecionado && adicionarReceita(diaSelecionado, receita)}
                                    disabled={salvando}
                                >
                                    <Image source={{ uri: receita.Imagem }} style={styles.imagemOpcao} />
                                    <View style={styles.detalheOpcao}>
                                        <Text style={styles.nomeOpcao}>{receita.titulo}</Text>
                                        <Text style={styles.tempoOpcao}>{receita.duracao.replace("⏳ ", "")}</Text>
                                    </View>
                                    <Ionicons name="add-circle" size={24} color="#168A3A" />
                                </Pressable>
                            ))}
                        </ScrollView>
                    </View>
                </View>
            </Modal>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    tela: {
        flex: 1,
        backgroundColor: "#f4f8f4",
    },
    conteudo: {
        padding: 16,
        paddingBottom: 32,
    },
    container: {
        width: "100%",
        maxWidth: 900,
        alignSelf: "center",
        backgroundColor: "#fff",
        borderRadius: 18,
        padding: 18,
        boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.08)",
    },
    marca: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        paddingBottom: 12,
        borderBottomWidth: 1,
        borderBottomColor: "#e1e9e2",
    },
    logo: {
        width: 32,
        height: 40,
        resizeMode: "contain",
    },
    nomeMarca: {
        color: "#168A3A",
        fontSize: 18,
        fontWeight: "700",
    },
    cabecalho: {
        flexDirection: "row",
        alignItems: "center",
        gap: 14,
        marginTop: 22,
        marginBottom: 24,
    },
    iconeCabecalho: {
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: "#eaf6ec",
        alignItems: "center",
        justifyContent: "center",
    },
    textosCabecalho: {
        flex: 1,
    },
    titulo: {
        color: "#152b20",
        fontSize: 23,
        fontWeight: "700",
    },
    subtitulo: {
        color: "#60756a",
        fontSize: 15,
        lineHeight: 22,
        marginTop: 4,
    },
    tituloSecao: {
        flexDirection: "row",
        alignItems: "center",
        gap: 7,
        marginBottom: 12,
        flexWrap: "wrap",
    },
    tituloSecaoTexto: {
        color: "#172d22",
        fontSize: 16,
        fontWeight: "700",
    },
    ajuda: {
        color: "#60756a",
        fontSize: 13,
    },
    listaReceitas: {
        flexDirection: "row",
        gap: 12,
        paddingBottom: 8,
    },
    cartaoReceita: {
        width: 160,
        minHeight: 194,
        padding: 7,
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#e1e9e2",
        borderRadius: 14,
    },
    imagemReceita: {
        width: "100%",
        height: 98,
        borderRadius: 9,
        backgroundColor: "#e8eee9",
    },
    nomeReceita: {
        color: "#172d22",
        fontSize: 14,
        fontWeight: "600",
        lineHeight: 19,
        marginTop: 8,
        minHeight: 38,
    },
    rodapeReceita: {
        flexDirection: "row",
        alignItems: "center",
        gap: 4,
        marginTop: 4,
    },
    tempoReceita: {
        color: "#60756a",
        fontSize: 12,
        flex: 1,
    },
    botaoAdicionarReceita: {
        width: 30,
        height: 30,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#168A3A",
        borderRadius: 15,
    },
    resumo: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 18,
        marginBottom: 12,
    },
    tituloSemana: {
        color: "#172d22",
        fontSize: 18,
        fontWeight: "700",
    },
    contagem: {
        color: "#60756a",
        fontSize: 13,
    },
    avisoErro: {
        backgroundColor: "#fff0ed",
        borderRadius: 8,
        marginBottom: 12,
        padding: 10,
    },
    textoErro: {
        color: "#a52b20",
        fontSize: 13,
    },
    carregando: {
        padding: 36,
    },
    gradeDias: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        gap: 12,
    },
    cartaoDia: {
        width: "48%",
        minHeight: 148,
        padding: 12,
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#dce8dd",
        borderRadius: 15,
    },
    cabecalhoDia: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    nomeDia: {
        color: "#263c2e",
        fontSize: 15,
        fontWeight: "600",
    },
    quantidadeDia: {
        color: "#168A3A",
        fontSize: 13,
    },
    vazio: {
        flex: 1,
        color: "#87968b",
        fontSize: 13,
        textAlign: "center",
        textAlignVertical: "center",
        paddingVertical: 24,
    },
    refeicoes: {
        gap: 7,
        marginTop: 10,
        marginBottom: 12,
    },
    itemRefeicao: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 6,
        padding: 8,
        backgroundColor: "#f0f7f1",
        borderRadius: 9,
    },
    nomeRefeicao: {
        flex: 1,
        color: "#263c2e",
        fontSize: 13,
    },
    botaoAdicionarDia: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 5,
        marginTop: "auto",
        paddingTop: 10,
    },
    textoBotaoAdicionar: {
        color: "#168A3A",
        fontSize: 12,
        fontWeight: "600",
    },
    fundoModal: {
        flex: 1,
        justifyContent: "flex-end",
        backgroundColor: "rgba(0, 0, 0, 0.4)",
    },
    conteudoModal: {
        maxHeight: "82%",
        backgroundColor: "#fff",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 18,
        paddingBottom: 28,
    },
    cabecalhoModal: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingBottom: 12,
    },
    tituloModal: {
        color: "#172d22",
        fontSize: 20,
        fontWeight: "700",
    },
    subtituloModal: {
        color: "#60756a",
        fontSize: 14,
        marginTop: 4,
    },
    opcaoReceita: {
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
        paddingVertical: 10,
        borderTopWidth: 1,
        borderTopColor: "#edf1ed",
    },
    opcaoDia: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 13,
        paddingHorizontal: 4,
        borderTopWidth: 1,
        borderTopColor: "#edf1ed",
    },
    imagemOpcao: {
        width: 56,
        height: 52,
        borderRadius: 8,
        backgroundColor: "#e8eee9",
    },
    detalheOpcao: {
        flex: 1,
    },
    nomeOpcao: {
        color: "#263c2e",
        fontSize: 14,
        fontWeight: "600",
    },
    tempoOpcao: {
        color: "#60756a",
        fontSize: 12,
        marginTop: 4,
    },
});