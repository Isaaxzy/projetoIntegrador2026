import { View, StyleSheet, Text, ImageBackground, Image, Pressable, Touchable, TouchableOpacity, FlatList,} from 'react-native';
import { useState } from 'react';

const itensIniciais = ['🌱 Iniciante', '🍳 Intermediário', '👩‍🍳 Avançado'];

export default function App() {
    const [itensMarcados, setItensMarcados] = useState<boolean[]>(
            itensIniciais.map(() => false),
        );
     
        function alternarItem(index: number) {
            // Cria um novo array e inverte somente o item que foi pressionado.
            setItensMarcados((marcados) =>
                marcados.map((marcado, itemIndex) =>
                    itemIndex === index ? !marcado : marcado,
                ),
            );
          }
    return(
    <View style={styles.fundo}>
        <View style={styles.container}>
            <View style={{flexDirection: "row", alignItems: "center", padding: 10, gap:8}}>
            <Image 
                source={require("../imagens/2026_10_01_0mz_Kleki.png")} style={styles.image}></Image>
            <Text>Broly</Text>
            </View>
                    <View style={{flexDirection: "row", padding: 10, gap: 20,}}>
                    <Image 
                    source={require("../imagens/2026_10_01_0mz_Kleki.png")} style={styles.image1}></Image>
                    <Text style={styles.subtexto}><Text style={styles.titulo}>Pronto, Isa! 🥦</Text> Agora já sei um pouquinho mais sobre seus gostos. separei algumas receitas que combinam com você</Text>
                </View>
                   
                <View style={{flexDirection: "row", gap: 10, marginLeft: 8, padding: 8,}}>
                        {itensIniciais.map((item, index) => (
                                                                <Pressable
                                                                key={item}
                                                                style={styles.linha}
                                                                onPress={() => alternarItem(index)}
                                            >                       
                                                                {/* A cor e o simbolo aparecem apenas quando a tarefa esta marcada. */}
                                            <View style={[styles.checkbox, itensMarcados[index] && styles.marcado]}>
                                                                    {itensMarcados[index]}<Text style={[styles.item, itensMarcados[index] && styles.concluido]}>{item}</Text>
                                            </View>
                                                                {/* Tarefas concluidas ficam visualmente riscadas e mais discretas. */}
                                           
                                            </Pressable>
                                            ))}

                </View>
               <View style={styles.cont}>
                    <Text style={styles.titulo1}>O que tenho em casa</Text>
                    <Text style={styles.subtexto}>Digite o que você tem na geladeira e encontre receitas.</Text>
                    <View style={{flexDirection: "row", margin: "auto", marginTop: 10,}}>
                    <input style={styles.input} type="text" placeholder='Ex: Frango, arroz, batata' />
                    <Text style={styles.button}>Adicionar</Text>                        
                    </View>
                </View>
                
            </View>
            <View style={{width: 500, margin: "auto"}}>
                    <Text style={styles.titulo3}>☆ Receitas para você</Text>
                        <View style={{flexDirection: "row",}}>
                            <View style={styles.modulo}>
                            <ImageBackground style={styles.imagef} source={require("../imagens/composicao-de-comida-brasileira-deliciosa-de-alto-angulo_23-2148739223.avif")}>
                                <Text style={styles.info}>☆ Combina com você</Text>

                            </ImageBackground>
                                <Text style={styles.titulo2}>Frango Cremoso com batatas</Text>
                                 <Text style={styles.subtexto1}>🕒 30 min <Text> 🌿 Facil</Text></Text>
                                 <Text style={styles.subtexto1}>Frango, batata, creme...</Text>
                            </View>
                            <View style={styles.modulo}>
                                 <ImageBackground style={styles.imagef} source={require("../imagens/composicao-de-comida-brasileira-deliciosa-de-alto-angulo_23-2148739223.avif")}>
                                <Text style={styles.info}>☆ Combina com você</Text>

                            </ImageBackground>
                                <Text style={styles.titulo2}>Frango Cremoso com batatas</Text>
                                <Text style={styles.subtexto1}>🕒 30 min <Text> 🌿 Facil</Text></Text>
                                <Text style={styles.subtexto1}>Arroz, Queijo, Tomate...</Text>
                            </View>
                        </View>
                </View>                          
        </View>

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
    fontSize: 22,
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
    width: "100%",
    flexDirection: "row",
    textAlign: "center",
    padding: 12,
    paddingHorizontal: 20,
    marginLeft: 10,
    borderRadius: 10,
    color: "#fff",
    margin: "auto"
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
  boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.2)",
  borderRadius: 25,
},

})