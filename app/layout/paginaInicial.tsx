import { View, StyleSheet, Text, Image, Pressable, FlatList, ScrollView, TextInput } from 'react-native';
import { useEffect, useState } from 'react';
import { Link, useLocalSearchParams, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import Carregamento from '../../components/Carregamento';
import {
    receitasMaisProcuradas,
    receitasRecomendadas,
    receitasSobremesas,
    removerReceitasDuplicadas,
} from '../componentes/coisas';
import renderCategoria from '../componentes/cardCategorias';

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

const mapaCondicoesPorIndice = [
    'Sem restrições',
    'Vegetariano',
    'Vegano',
    'Mediterrânea',
    'Low sugar',
    'Flexitariano',
    'Low carb',
    'Pescetariano',
    'Ovolactovegetariano',
    'Low fat',
    'High protein',
] as const;

const mapaObjetivosPorIndice = [
    'Comer melhor',
    'Encontrar receitas práticas',
    'Economizar',
    'Variar minha alimentação',
    'Aprender a cozinhar',
    'Encontrar receitas para rotina',
    'Outro',
] as const;

const listaAlergias = ['Leite', 'Ovo', 'Amendoim', 'Castanhas', 'Soja', 'Trigo', 'Peixes', 'Frutos do Mar'];
const listaDesgostos = ['Cebola', 'Alho', 'Tomate', 'Peixe', 'Coentro', 'Pimentão', 'Brócolis', 'Cogumelo', 'Azeitona', 'Pimenta', 'Gengibre', 'Manjericão'];
const listaGostos = ['Frango', 'Carne', 'Batata', 'Queijo', 'Chocolate', 'Morango', 'Massas', 'Arroz', 'Ovo', 'Tomate', 'Cenoura', 'Abacate', 'Salmão', 'Limão', 'Milho', 'Feijão'];
const listaDificuldades = ['Muito fácil', 'Fácil', 'Intermediária', 'Elaborada'] as const;

function lerListaNumerica(chave: string): number[] {
    if (typeof window === 'undefined') return [];

    try {
        const valor = JSON.parse(window.localStorage.getItem(chave) ?? '[]');
        return Array.isArray(valor)
            ? valor.filter((item): item is number => Number.isInteger(item))
            : [];
    } catch {
        return [];
    }
}

function lerPerfilUsuario() {
    if (typeof window === 'undefined') {
        return {
            condicoes: [] as string[],
            ingredientesEvita: [] as string[],
            ingredientesFavoritos: [] as string[],
            categoriasPreferidas: [] as string[],
            dificuldadePreferida: null as string | null,
        };
    }

    const alimentacao = lerListaNumerica('Alimentacao');
    const alergias = lerListaNumerica('Alergias');
    const desgostos = lerListaNumerica('Desgostos');
    const gostos = lerListaNumerica('Gostos');
    const objetivos = lerListaNumerica('Objetivos');
    const tipo = lerListaNumerica('Tipo');

    const condicoes = alimentacao.flatMap((indice) => {
        const condicao = mapaCondicoesPorIndice[indice];
        return condicao && condicao !== 'Sem restrições' ? [condicao] : [];
    });

    const ingredientesEvita = alergias.flatMap((indice) => listaAlergias[indice] ? [listaAlergias[indice]] : []);
    const ingredientesFavoritos = gostos.flatMap((indice) => listaGostos[indice] ? [listaGostos[indice]] : []);
    const categoriasPreferidas = objetivos.flatMap((indice) => {
        const objetivo = mapaObjetivosPorIndice[indice];

        const mapaCategorias: Record<string, string[]> = {
            'Comer melhor': ['🥗 Saudáveis'],
            'Encontrar receitas práticas': ['⚡ Rápidas'],
            'Economizar': ['💰 Econômicas'],
            'Variar minha alimentação': ['⭐ Todas'],
            'Aprender a cozinhar': ['⭐ Todas'],
            'Encontrar receitas para rotina': ['⚡ Rápidas', '👩‍🍳 Almoço', '👩‍🍳 Janta'],
            Outro: [],
        };

        return objetivo ? mapaCategorias[objetivo] ?? [] : [];
    });

    const dificuldadePreferida = tipo.length > 0 ? listaDificuldades[tipo[0]] ?? null : null;

    return {
        condicoes,
        ingredientesEvita: [...ingredientesEvita, ...desgostos.flatMap((indice) => listaDesgostos[indice] ? [listaDesgostos[indice]] : [])],
        ingredientesFavoritos,
        categoriasPreferidas,
        dificuldadePreferida,
    };
}

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
    const [perfilUsuario, setPerfilUsuario] = useState(() => lerPerfilUsuario());
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

                setPerfilUsuario(lerPerfilUsuario());
            }
        } catch (error) {
            console.error('Não foi possível carregar o nome do usuário.', error);
        } finally {
            setCarregando(false);
        }
    }, []);

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
    const correspondeAosFiltros = (receita: (typeof receitasRecomendadas)[number]) =>
        correspondeACategoria(receita) && correspondeAIngredientes(receita);
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
    const receitasOrdenadasPorPerfil = receitasUnicas
        .filter(correspondeAosFiltros)
        .map((receita) => {
            let pontuacao = 0;
            const condicoesReceita = receita.condicoes.map((condicao) => normalizar(condicao));
            const condicoesUsuario = perfilUsuario.condicoes.map((condicao) => normalizar(condicao));
            pontuacao += condicoesUsuario.filter((condicao) => condicoesReceita.includes(condicao)).length * 90;

            const ingredientesReceita = receita.ingredientes.map((ingrediente) => normalizar(ingrediente.nome));
            const ingredientesFavoritos = perfilUsuario.ingredientesFavoritos.map((ingrediente) => normalizar(ingrediente));
            const ingredientesEvita = perfilUsuario.ingredientesEvita.map((ingrediente) => normalizar(ingrediente));

            pontuacao += ingredientesFavoritos.filter((ingrediente) =>
                ingredientesReceita.some((nomeReceita) => nomeReceita.includes(ingrediente)),
            ).length * 35;

            const temIngredienteEvitado = ingredientesEvita.some((ingrediente) =>
                ingredientesReceita.some((nomeReceita) => nomeReceita.includes(ingrediente)),
            );
            if (temIngredienteEvitado) {
                pontuacao = Number.NEGATIVE_INFINITY;
            }

            const categoriasPreferidas = perfilUsuario.categoriasPreferidas.map((categoria) => normalizar(categoria));
            pontuacao += receita.categorias.filter((categoria) =>
                categoriasPreferidas.includes(normalizar(categoria)),
            ).length * 25;

            if (perfilUsuario.dificuldadePreferida) {
                const dificuldadeReceita = normalizar(receita.dificuldade);
                const dificuldadeUsuario = normalizar(perfilUsuario.dificuldadePreferida);
                if (dificuldadeReceita.includes(dificuldadeUsuario)) {
                    pontuacao += 15;
                }
            }

            return { receita, pontuacao };
        })
        .filter(({ pontuacao }) => Number.isFinite(pontuacao))
        .sort((a, b) => b.pontuacao - a.pontuacao);

    const recomendadasFiltradas = receitasOrdenadasPorPerfil
        .filter(({ receita }) => idsRecomendadas.has(receita.id))
        .map(({ receita }) => receita)
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
                                    returnState: {
                                        ingredientes: ingredientesBusca.join(','),
                                        textoIngredientes,
                                        categoria: categoriaSelecionada,
                                    },
                                })}
                            />
                        </>
                    )}
                    {sobremesasFiltradas.length > 0 && (
                        <>
                            <Text style={styles.titulo3}>🍰 Sobremesas</Text>
                            <FlatList
                                data={[{ id: 'sobremesas', filmes: sobremesasFiltradas }]}
                                keyExtractor={(item) => item.id}
                                renderItem={({ item }) => renderCategoria({
                                    item,
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