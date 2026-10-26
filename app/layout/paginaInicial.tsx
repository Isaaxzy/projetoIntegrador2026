import { View, StyleSheet, Text, Image, Pressable, FlatList, ScrollView, TextInput } from 'react-native';
import { useState } from 'react';
import {
    receitasMaisProcuradas,
    receitasRecomendadas,
    receitasSobremesas,
} from '../componentes/coisas';
import renderCategoria from '../componentes/cardCategorias';

const itensIniciais = ['⭐ Todas', '🍳 Café da manhã', '👩‍🍳 Almoço', '👩‍🍳 Janta'] as const;


export default function App() {
    // Hooks precisam ficar dentro do componente para que o React acompanhe seu estado.
    const [categoriaSelecionada, setCategoriaSelecionada] =
        useState<(typeof itensIniciais)[number]>(itensIniciais[0]);
    const [textoIngredientes, setTextoIngredientes] = useState('');
    const [ingredientesBusca, setIngredientesBusca] = useState<string[]>([]);

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
    const recomendadasFiltradas = receitasRecomendadas
        .filter(correspondeAosFiltros)
        .sort((a, b) => {
            const correspondencias = (receita: (typeof receitasRecomendadas)[number]) =>
                receita.ingredientes.filter((ingrediente) =>
                    termosBusca.some((termo) =>
                        normalizar(ingrediente.nome).includes(termo),
                    ),
                ).length;

            return correspondencias(b) - correspondencias(a);
        });
    const sobremesasFiltradas = receitasSobremesas.filter(correspondeAosFiltros);
    const maisProcuradasFiltradas = receitasMaisProcuradas.filter(correspondeAosFiltros);
    const quantidadeReceitas =
        recomendadasFiltradas.length +
        sobremesasFiltradas.length +
        maisProcuradasFiltradas.length;

    return(
        <ScrollView>
    <View style={styles.fundo}>
        <View style={styles.container}>
            <View style={{flexDirection: "row", alignItems: "center", padding: 10, gap:8, borderBottomColor: "#cacaca", borderBottomWidth: 1}}>
            <Image 
                source={require("../imagens/2026_10_01_0mz_Kleki.png")} style={styles.image}></Image>
            <Text style={{}}>Tempero de casa</Text>
            <Image source={require("../imagens/sair.png")} />
            </View>
                    <View style={{flexDirection: "row", padding: 10, gap: 20,}}>
                    <Image 
                    source={require("../imagens/2026_10_01_0mz_Kleki.png")} style={styles.image1}></Image>
                    <Text style={styles.textoApresentacao}><Text style={styles.titulo}>Pronto, Isa! 🥦</Text> Agora já sei um pouquinho mais sobre seus gostos. separei algumas receitas que combinam com você</Text>
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
                            Tente outros ingredientes ou confira as receitas disponíveis.
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
                                renderItem={renderCategoria}
                            />
                        </>
                    )}
                    {sobremesasFiltradas.length > 0 && (
                        <>
                            <Text style={styles.titulo3}>🍰 Sobremesas</Text>
                            <FlatList
                                data={[{ id: 'sobremesas', filmes: sobremesasFiltradas }]}
                                keyExtractor={(item) => item.id}
                                renderItem={renderCategoria}
                            />
                        </>
                    )}
                    {maisProcuradasFiltradas.length > 0 && (
                        <>
                            <Text style={styles.titulo3}>🔥 Mais procuradas</Text>
                            <FlatList
                                data={[{ id: 'mais-procuradas', filmes: maisProcuradasFiltradas }]}
                                keyExtractor={(item) => item.id}
                                renderItem={renderCategoria}
                            />
                        </>
                    )}
                </View>                          
        </View>
        </ScrollView>
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

fundo: {
    backgroundColor: "#ececec",

},

backcolor: {
    backgroundColor: "#ececec",
},

linha: {},

container: {
    width: "100%",
    maxWidth: 500,
    marginTop: 10,
    backgroundColor: "#ffffff",
    boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.2)",
    margin: "auto",
    borderRadius: 10,
},

listaReceitas: {
    width: "100%",
    maxWidth: 500,
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
    width: 30,
    height: 45,
},

image1: {
    width: 70,
    height: 100,

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
    backgroundColor: "#209e3c",
    padding: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
},

textoBotao: {
    color: "#fff",
    fontWeight: "bold",
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
    color: "#078523",
    fontWeight: "bold",
},

semResultados: {
    paddingHorizontal: 13,
    paddingBottom: 12,
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
  fontSize: 15,
},

concluido: {
  color: '#ffffff',
},

marcado: {
  backgroundColor: "#078523",
  borderColor: "#078523",
  boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.8) inset",
},

checkbox: {
  padding: 11,
  paddingHorizontal: 21,
  boxShadow: "0px 0px 3px rgba(0, 0, 0, 0.2)",
  borderRadius: 25,
},

})