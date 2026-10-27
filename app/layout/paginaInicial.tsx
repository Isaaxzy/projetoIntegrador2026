import { View, StyleSheet, Text, ImageBackground, Image, Pressable, FlatList, ScrollView,} from 'react-native';
import { useState } from 'react';
import DadosDosFilmes from '../componentes/coisas';
import renderCategoria from '../componentes/cardCategorias';

const itensIniciais = ['⭐ Todas', '🍳 Café da manhã', '👩‍🍳 Almoço', '👩‍🍳 Janta'] as const;
const categoriasOriginal = DadosDosFilmes();


export default function App() {
    // Hooks precisam ficar dentro do componente para que o React acompanhe seu estado.
    const [categoriaSelecionada, setCategoriaSelecionada] =
        useState<(typeof itensIniciais)[number]>(itensIniciais[0]);
    const [categoriasLista, setCategoriasLista] = useState(categoriasOriginal);
    const [adicionarEmHover, setAdicionarEmHover] = useState(false);

    function filtrarPorCategoria(categoria: (typeof itensIniciais)[number]) {
        setCategoriaSelecionada(categoria);

        // "Todas" restaura a lista original; as outras opções filtram cada grupo de receitas.
        if (categoria === itensIniciais[0]) {
            setCategoriasLista(categoriasOriginal);
            return;
        }

        const listaAtualizada = categoriasOriginal
            .map((grupo) => ({
                ...grupo,
                filmes: grupo.filmes.filter((receita) =>
                    receita.categorias.includes(categoria),
                ),
            }))
            .filter((grupo) => grupo.filmes.length > 0);

        setCategoriasLista(listaAtualizada);
    }
    return(
        <ScrollView>
    <View style={styles.fundo}>
        <View style={styles.container}>
            <View style={{flexDirection: "row", alignItems: "center", padding: 10, gap:8, borderBottomColor: "#cacaca", borderBottomWidth: 1}}>
            <Image 
                source={require("../imagens/2026_10_01_0mz_Kleki.png")} style={styles.image}></Image>
            <Text style={{}}>Tempero de casa</Text>
            </View>
                    <View style={{flexDirection: "row", padding: 10, gap: 20,}}>
                    <Image 
                    source={require("../imagens/2026_10_01_0mz_Kleki.png")} style={styles.image1}></Image>
                    <Text style={styles.subtexto}><Text style={styles.titulo}>Pronto, Isa! 🥦</Text> Agora já sei um pouquinho mais sobre seus gostos. separei algumas receitas que combinam com você</Text>
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
                    <View style={{flexDirection: "row", margin: "auto", marginTop: 10,}}>
                    <input style={styles.input} type="text" placeholder='Ex: Frango, arroz, batata' />
                    <Pressable
                        onHoverIn={() => setAdicionarEmHover(true)}
                        onHoverOut={() => setAdicionarEmHover(false)}
                        style={({ pressed }) => [
                            styles.button,
                            adicionarEmHover && styles.buttonHover,
                            pressed && styles.buttonPressed,
                        ]}
                        accessibilityRole="button"
                    >
                        <Text style={styles.buttonText}>Adicionar</Text>
                    </Pressable>
                    </View>
                </View>
                
            </View>
            <View style={{width: 500, margin: "auto",}}>
                    <Text style={styles.titulo3}>☆ Receitas para você</Text>
                             <View style={styles.backcolor}>
                                <FlatList
                                data={categoriasLista}
                                keyExtractor={i => i.id}
                                renderItem={renderCategoria }
                                />
                        </View>
                </View>                          
        </View>
        </ScrollView>
    )
}



const styles = StyleSheet.create({

fundo: {
    backgroundColor: "#ececec",

},

container: {
    width: 500,
    marginTop: 10,
    backgroundColor: "#ffffff",
    boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.2)",
    margin: "auto",
    borderRadius: 10,
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
    height: 40,
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
    border: "none",
    boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.2)",
    marginBottom: 15,
},

button: {
    backgroundColor: "#209e3c",
    minWidth: 100,
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginLeft: 10,
},

buttonHover: {
    backgroundColor: "#168a32",
},

buttonPressed: {
    backgroundColor: "#0f6f27",
    opacity: 0.9,
},

buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
},

input: {
    borderRadius: 10,
    boxShadow: "0px 1px 6px rgba(0, 0, 0, 0.38) inset",
    border: "none",
    padding: 10,
    height: 25,
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