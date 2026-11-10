import { View, StyleSheet, Text, Image, Pressable, FlatList, ScrollView, TextInput } from 'react-native';
import { useCallback, useEffect, useState } from 'react';
import { Link, useFocusEffect, useLocalSearchParams, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import Carregamento from '../../components/Carregamento';
import {
    receitasMaisProcuradas,
    receitasRecomendadas,
    receitasSobremesas,
    removerReceitasDuplicadas,
} from '../componentes/coisas';
import renderCategoria from '../componentes/cardCategorias';
import { lerIndicesSalvos, lerTextoSalvo } from '../componentes/introStorage';
import {
    opcoesAlergias,
    opcoesAlimentosEvitados,
    opcoesAlimentosPreferidos,
    opcoesRestricoesAlimentares,
    encontrarAlimentosPreferidos,
    receitaAtendeDificuldade,
    receitaAtendeTempo,
    receitaRespeitaRestricoes,
} from '../componentes/preferencias';

const itensIniciais = [
    '⭐ Todas',
    '🍳 Café da manhã',
    '🥖 Lanches',
    '👩‍🍳 Almoço',
    '👩‍🍳 Janta',
    '🍰 Sobremesas',
    '🥗 Saudáveis',
    '⚡ Rápidas',
    '🌱 Vegetarianas',
] as const;


export default function App() {
    const router = useRouter();
    const parametrosBusca = useLocalSearchParams<{
        restaurarPesquisa?: string;
        ingredientes?: string;
        textoIngredientes?: string;
        categoria?: string;
    }>();
    // Hooks precisam ficar dentro do componente para que o React acompanhe seu estado.
    const [carregando, setCarregando] = useState(true);
    const [nomeUsuario, setNomeUsuario] = useState('');
    const [alimentosPreferidos, setAlimentosPreferidos] = useState<string[]>([]);
    const [alimentosEvitados, setAlimentosEvitados] = useState<string[]>([]);
    const [alergias, setAlergias] = useState<string[]>([]);
    const [restricoesAlimentares, setRestricoesAlimentares] = useState<string[]>([]);
    const [temposPreferidos, setTemposPreferidos] = useState<number[]>([]);
    const [dificuldadesPreferidas, setDificuldadesPreferidas] = useState<number[]>([]);
    const [categoriaSelecionada, setCategoriaSelecionada] =
        useState<(typeof itensIniciais)[number]>(itensIniciais[0]);
    const [textoIngredientes, setTextoIngredientes] = useState('');
    const [ingredientesBusca, setIngredientesBusca] = useState<string[]>([]);

    useEffect(() => {
        if (parametrosBusca.restaurarPesquisa !== '1') {
            return;
        }

        const ingredientesRestaurados = (parametrosBusca.ingredientes ?? '')
            .split(',')
            .map((ingrediente) => ingrediente.trim())
            .filter((ingrediente) => ingrediente.length > 0);
        const categoriaRestaurada = itensIniciais.find(
            (categoria) => categoria === parametrosBusca.categoria,
        );

        setIngredientesBusca(ingredientesRestaurados);
        setTextoIngredientes(parametrosBusca.textoIngredientes ?? ingredientesRestaurados.join(', '));
        setCategoriaSelecionada(categoriaRestaurada ?? itensIniciais[0]);
    }, [
        parametrosBusca.restaurarPesquisa,
        parametrosBusca.ingredientes,
        parametrosBusca.textoIngredientes,
        parametrosBusca.categoria,
    ]);

    useEffect(() => {
        try {
            if (typeof window !== 'undefined') {
                const dadosUsuario: unknown = JSON.parse(
                    window.localStorage.getItem('voce') ?? '[]',
                );
                if (Array.isArray(dadosUsuario) && typeof dadosUsuario[0] === 'string') {
                    setNomeUsuario(dadosUsuario[0]);
                }
            }
        } catch (error) {
            console.error('Não foi possível carregar o nome do usuário.', error);
        } finally {
            setCarregando(false);
        }
    }, []);

    useFocusEffect(
        useCallback(() => {
            const indicesPreferidos = lerIndicesSalvos('Gostos', opcoesAlimentosPreferidos.length);
            const indicesEvitados = lerIndicesSalvos('Desgostos', opcoesAlimentosEvitados.length);
            const indicesAlergias = lerIndicesSalvos('Alergias', opcoesAlergias.length);
            const alergiasPersonalizadas = lerTextoSalvo('OutrosA')
                .split(/[,;\n]+/)
                .map((alergia) => alergia.trim())
                .filter(Boolean);
            const indicesRestricoes = lerIndicesSalvos(
                'Alimentacao',
                opcoesRestricoesAlimentares.length,
            );
            const indicesTempo = lerIndicesSalvos('Tempo', 6);
            const indicesDificuldade = lerIndicesSalvos('Tipo', 4);
            setAlimentosPreferidos(indicesPreferidos.map((index) => opcoesAlimentosPreferidos[index]));
            setAlimentosEvitados(indicesEvitados.map((index) => opcoesAlimentosEvitados[index]));
            setAlergias([
                ...indicesAlergias.map((index) => opcoesAlergias[index]),
                ...alergiasPersonalizadas,
            ]);
            setRestricoesAlimentares(
                indicesRestricoes
                    .filter((index) => index !== 0)
                    .map((index) => opcoesRestricoesAlimentares[index]),
            );
            setTemposPreferidos(indicesTempo);
            setDificuldadesPreferidas(indicesDificuldade);
        }, []),
    );

    function filtrarPorCategoria(categoria: (typeof itensIniciais)[number]) {
        setCategoriaSelecionada(categoria);
    }

    function buscarReceitas() {
        const ingredientes = textoIngredientes
            .split(/[,;\n]+/)
            .map((ingrediente) => ingrediente.trim())
            .filter((ingrediente) => ingrediente.length > 0);
        const ingredientesUnicos = ingredientes.filter(
            (ingrediente, index) =>
                ingredientes.findIndex(
                    (outro) => normalizar(outro) === normalizar(ingrediente),
                ) === index,
        );

        setIngredientesBusca(ingredientesUnicos);
    }

    const termosBusca = ingredientesBusca.map(normalizar);
    const correspondeAIngredientes = (receita: (typeof receitasRecomendadas)[number]) =>
        termosBusca.length === 0 ||
        receita.ingredientes.some((ingrediente) =>
            termosBusca.some((termo) =>
                normalizar(ingrediente.nome).includes(termo),
            ),
        );
    const correspondeACategoria = (receita: (typeof receitasRecomendadas)[number]) =>
        categoriaSelecionada === itensIniciais[0] ||
        receita.categorias.includes(categoriaSelecionada);
    const respeitaRestricoesUsuario = (receita: (typeof receitasRecomendadas)[number]) =>
        receitaRespeitaRestricoes(
            receita.ingredientes.map(({ nome }) => nome),
            alimentosEvitados,
            alergias,
            restricoesAlimentares,
            receita.condicoes,
        );
    const correspondeAosFiltros = (receita: (typeof receitasRecomendadas)[number]) =>
        correspondeACategoria(receita)
        && correspondeAIngredientes(receita)
        && respeitaRestricoesUsuario(receita);
    const receitasUnicas = removerReceitasDuplicadas([
        ...receitasRecomendadas,
        ...receitasSobremesas,
        ...receitasMaisProcuradas,
    ]);
    const idsRecomendadas = new Set(
        receitasUnicas.filter((receita) => receitasRecomendadas.includes(receita)).map((receita) => receita.id),
    );
    const idsSobremesas = new Set(
        receitasUnicas.filter((receita) => receitasSobremesas.includes(receita)).map((receita) => receita.id),
    );
    const idsMaisProcuradas = new Set(
        receitasUnicas.filter((receita) => receitasMaisProcuradas.includes(receita)).map((receita) => receita.id),
    );
    const recomendadasFiltradas = receitasUnicas
        .filter((receita) => idsRecomendadas.has(receita.id))
        .filter(correspondeAosFiltros)
        .filter((receita) =>
            alimentosPreferidos.length === 0
            || encontrarAlimentosPreferidos(
                receita.ingredientes.map(({ nome }) => nome),
                alimentosPreferidos,
            ).length > 0,
        )
        .filter((receita) => receitaAtendeTempo(receita.duracao, temposPreferidos))
        .filter((receita) =>
            receitaAtendeDificuldade(receita.dificuldade, dificuldadesPreferidas),
        )
        .sort((a, b) => {
            const correspondencias = (receita: (typeof receitasRecomendadas)[number]) =>
                receita.ingredientes.filter((ingrediente) =>
                    termosBusca.some((termo) =>
                        normalizar(ingrediente.nome).includes(termo),
                    ),
                ).length;

            return correspondencias(b) - correspondencias(a);
        });
    const sobremesasFiltradas = receitasUnicas
        .filter((receita) => idsSobremesas.has(receita.id))
        .filter(correspondeAosFiltros);
    const maisProcuradasFiltradas = receitasUnicas
        .filter((receita) => idsMaisProcuradas.has(receita.id))
        .filter(correspondeAosFiltros);
    const quantidadeReceitas =
        recomendadasFiltradas.length +
        sobremesasFiltradas.length +
        maisProcuradasFiltradas.length;     

    return(
        <>
        <View style={styles.telaInicial}>
        <ScrollView>
    <View style={styles.fundo}>
        <View style={styles.container}>
            <View style={{flexDirection: "row", alignItems: "center", padding: 10, gap:8, borderBottomColor: "#cacaca", borderBottomWidth: 1, justifyContent: "space-between",}}>
            <View style={{flexDirection: "row", alignItems: "center", gap: 12, }}>
            <Image 
                source={require("../imagens/2026_10_01_0mz_Kleki.png")} style={styles.image}></Image>
            <Text style={{color: "#168A3A", fontSize: 24, fontWeight: "bold", marginTop: 10}}>Tempero de casa</Text>
            </View>
            <Link href="/login"><Image style={styles.image2} source={require("../imagens/seta.png")} /></Link>
            </View>
                    <View style={{flexDirection: "row", padding: 10, gap: 20, width: "95%", margin: "auto"}}>
                    <Text style={styles.textoApresentacao}><Text style={styles.titulo}>Pronto, {nomeUsuario || 'nome do usuário'}! 🥦</Text> Agora já sei um pouquinho mais sobre seus gostos. Separei algumas receitas que combinam com você</Text>
                </View>
                   <ScrollView horizontal>
                <View style={{flexDirection: "row", gap: 10, marginLeft: 8, padding: 8,}}>
                        {itensIniciais.map((item) => (
                            
                        <Pressable
                        key={item}
                        style={styles.linha}
                        onPress={() => filtrarPorCategoria(item)}
    >

                <View style={[styles.checkbox, categoriaSelecionada === item && styles.marcado]}>
                                        <Text style={[styles.item, categoriaSelecionada === item && styles.concluido]}>{item}</Text>
                </View>

                </Pressable>

                ))}

                </View>
                </ScrollView>
               <View style={styles.cont}>
                    <Text style={styles.titulo1}>O que tenho em casa</Text>
                    <Text style={styles.subtexto}>Digite o que você tem na geladeira e encontre receitas.</Text>
                    <View style={styles.linhaBusca}>
                    <TextInput
                        style={styles.input}
                        value={textoIngredientes}
                        onChangeText={setTextoIngredientes}
                        onSubmitEditing={buscarReceitas}
                        placeholder="Ex: quinoa, tomate, limão"
                        accessibilityLabel="Ingredientes que você tem em casa"
                        returnKeyType="search"
                    />
                    <Pressable style={styles.button} onPress={buscarReceitas}>
                        <Text style={styles.textoBotao}>Buscar</Text>
                    </Pressable>
                    </View>
                    {ingredientesBusca.length > 0 && (
                        <View style={styles.resultadoBusca}>
                            <Text>
                                {quantidadeReceitas > 0
                                    ? `${quantidadeReceitas} ${quantidadeReceitas === 1 ? 'receita encontrada' : 'receitas encontradas'} com: ${ingredientesBusca.join(', ')}`
                                    : `Nenhuma receita encontrada com: ${ingredientesBusca.join(', ')}`}
                            </Text>
                            <Pressable
                                onPress={() => {
                                    setIngredientesBusca([]);
                                    setTextoIngredientes('');
                                }}
                            >
                                <Text style={styles.limparBusca}>Limpar busca</Text>
                            </Pressable>
                        </View>
                    )}
                </View>
                
            </View>
            <View style={styles.listaReceitas}>
                    {ingredientesBusca.length > 0 && quantidadeReceitas === 0 && (
                        <Text style={styles.semResultados}>
                            Tente outros ingredientes.
                        </Text>
                    )}
                    {recomendadasFiltradas.length > 0 && (
                        <>
                            <Text style={styles.titulo3}>
                                {ingredientesBusca.length > 0 ? '☆ Receitas encontradas' : '☆ Receitas para você'}
                            </Text>
                            <FlatList
                                data={[{ id: 'recomendadas', filmes: recomendadasFiltradas }]}
                                keyExtractor={(item) => item.id}
                                renderItem={({ item }) => renderCategoria({
                                    item,
                                    alimentosPreferidos,
                                    alimentosEvitados,
                                    alergias,
                                    restricoesAlimentares,
                                    returnState: {
                                        ingredientes: ingredientesBusca.join(','),
                                        textoIngredientes,
                                        categoria: categoriaSelecionada,
                                    },
                                })}
                            />
                        </>
                    )}
                    {recomendadasFiltradas.length === 0 && ingredientesBusca.length === 0 && (
                        <Text style={styles.semResultados}>
                            Não encontramos receitas que atendam às suas preferências e restrições. Ajuste os filtros no seu perfil e tente novamente.
                        </Text>
                    )}
                    {sobremesasFiltradas.length > 0 && (
                        <>
                            <Text style={styles.titulo3}>🍰 Sobremesas</Text>
                            <FlatList
                                data={[{ id: 'sobremesas', filmes: sobremesasFiltradas }]}
                                keyExtractor={(item) => item.id}
                                renderItem={({ item }) => renderCategoria({
                                    item,
                                    alimentosPreferidos,
                                    alimentosEvitados,
                                    alergias,
                                    restricoesAlimentares,
                                    returnState: {
                                        ingredientes: ingredientesBusca.join(','),
                                        textoIngredientes,
                                        categoria: categoriaSelecionada,
                                    },
                                })}
                            />
                        </>
                    )}
                    {maisProcuradasFiltradas.length > 0 && (
                        <>
                            <Text style={styles.titulo3}>🔥 Mais procuradas</Text>
                            <FlatList
                                data={[{ id: 'mais-procuradas', filmes: maisProcuradasFiltradas }]}
                                keyExtractor={(item) => item.id}
                                renderItem={({ item }) => renderCategoria({
                                    item,
                                    alimentosPreferidos,
                                    alimentosEvitados,
                                    alergias,
                                    restricoesAlimentares,
                                    returnState: {
                                        ingredientes: ingredientesBusca.join(','),
                                        textoIngredientes,
                                        categoria: categoriaSelecionada,
                                    },
                                })}
                            />
                        </>
                    )}
                </View>                          
        </View>
        </ScrollView>
        <Pressable
            accessibilityRole="button"
            accessibilityLabel="Abrir chat de ajuda com receitas"
            onPress={() => router.push('/layout/chat')}
            style={styles.botaoChat}
        >
            <Ionicons name="chatbubble-ellipses" size={27} color="#ffffff" />
        </Pressable>
        </View>
        <Carregamento visivel={carregando} mensagem="Carregando seus dados..." />
        </>
    )
}

function normalizar(texto: string) {
    return texto
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-zA-Z0-9]/g, '')
        .toLocaleLowerCase('pt-BR');
}



const styles = StyleSheet.create({

telaInicial: {
    flex: 1,
},

botaoChat: {
    position: "absolute",
    right: 20,
    bottom: 20,
    width: 58,
    height: 58,
    borderRadius: 29,
    backgroundColor: "#168A3A",
    alignItems: "center",
    justifyContent: "center",
    elevation: 6,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
},

fundo: {
    flex: 1,
    backgroundColor: "#f4f8f4",

},

backcolor: {
    backgroundColor: "#ececec",
},

linha: {},

container: {
    width: "100%",
    maxWidth: 1120,
    alignSelf: "center",
    marginTop: 10,
    backgroundColor: "#ffffff",
    boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.14)",
    margin: "auto",
    borderRadius: 10,
},

listaReceitas: {
    width: "100%",
    maxWidth: 1120,
    alignSelf: "center",
},

info: {
    width: "70%",
    textAlign: "center",
    color: "#fff",
    backgroundColor: "#209e3bd0",
    padding: 5,
    margin: 5,
    marginLeft: 45,
    fontSize: 10,
    borderRadius: 20
},

imagef: {
    width: "100%",
    height: 120,
    borderRadius: 20

},

image: {
    maxWidth: 40,
    height: 60,
    marginTop: -6,
    marginLeft: 10,
    alignSelf: 'center',
    position: 'relative',
},

image1: {
    width: 70,
    height: 100,
},

image2: {
    width: 30,
    height: 30,
    marginTop: 10,
    cursor: "pointer"
},

titulo: {
    fontWeight: "bold",
    fontSize: 20,
},

titulo1: {
    fontWeight: "bold",
    fontSize: 20,
},

titulo2: {
    fontWeight: "bold",
    fontSize: 18,
},

titulo3: {
    fontWeight: "bold",
    fontSize: 24,
    padding: 13,
    paddingHorizontal: 2
},

subtexto: {
    fontSize: 16,
    lineHeight: 25,
    padding: 5,
    width: "100%"
},

textoApresentacao: {
    flex: 1,
    minWidth: 0,
    fontSize: 16,
    lineHeight: 25,
    padding: 5,
},

subtexto1: {
    marginTop: 5,
    
},

modulo: {
    backgroundColor: "#ffffff",
    width: "42%",
    margin: 'auto',
    borderRadius: 20,
    padding: 15
},

cont: {
    backgroundColor: "#d8ffc8",
    margin: "auto",
    width: "92%",
    marginTop: 20,
    padding: 15,
    borderWidth: 2,
    borderRadius: 20,
    borderColor: "transparent",
    boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.2)",
    marginBottom: 15,
},

button: {
    backgroundColor: "#168A3A",
    padding: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
},

textoBotao: {
    color: "#fff",
},

linhaBusca: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    gap: 15
},

resultadoBusca: {
    marginTop: 10,
    gap: 8,
},

limparBusca: {
    color: "#168A3A",
    fontWeight: "bold",
},

semResultados: {
    paddingHorizontal: 13,
    paddingVertical: 11,
    marginTop: 15,
    backgroundColor: "#03a51e",
    color: "white",
    borderRadius: 10,
    width: "38%",
    textAlign: "center",
    margin: "auto",
},

input: {
    borderRadius: 10,
    boxShadow: "0px 1px 6px rgba(0, 0, 0, 0.38) inset",
    padding: 10,
    height: 44,
    flex: 1,
    minWidth: 0,
    backgroundColor: "#fff",
},

item: {
  fontSize: 16,
},

concluido: {
  color: '#ffffff',
},

marcado: {
  backgroundColor: "#168A3A",
  borderColor: "#168A3A",
  boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.8) inset",
},

checkbox: {
  padding: 11,
  paddingHorizontal: 21,
  boxShadow: "0px 0px 3px rgba(0, 0, 0, 0.2)",
  borderRadius: 25,
},

})