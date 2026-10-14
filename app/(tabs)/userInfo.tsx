import { Link } from 'expo-router';
import { useState } from 'react';
import { View, StyleSheet, Text, ImageBackground, Image, TouchableOpacity, TextInput, Pressable } from 'react-native';

const itensIniciais = ['🌱 Iniciante', '🍳 Intermediário', '👩‍🍳 Avançado'];


export default function App() {
    const totalSteps = 7;
    const currentStep = 1;

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
    return (
      <View style={styles.fundo}>
          <View style={styles.container}>

            <View style={styles.UPbar}>
                      <Image
                       style={styles.logo1}
                       source={require("../imagens/2026_10_01_0mz_Kleki.png")}
                        />
                    <Text style={styles.Uptext}>Tempero de casa</Text>
                   </View>

            <Text style={styles.texto}>[Nome do usuario!]</Text>
            <Text style={styles.subtexto}>Edite suas preferencias alimentares</Text>

                <View style={styles.loginContainer}>
                    <Text style={styles.sobv}>Sobre você</Text>

                    <Text style={styles.label}>Nome</Text>
                    <input style={styles.input} type='text' placeholder="Seu nome" />
                    
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                      <Text style={styles.label}>Idade</Text>
                    </View>
                    <input style={styles.input} secureTextEntry type='number' min={15} placeholder="Ex: 15" />
                    <Text style={styles.label}>Para quantas pessoas você costuma cozinhar?</Text>
                    <input style={styles.input} type='number' min={1} max={50} placeholder="Número de pessoas" />
                    
                    <Text style={styles.label}>Nivel de experiência na cozinha</Text>
                    <View style={{ flexDirection: "row",flexWrap: "wrap", gap: 12, marginTop: 10, width: "100%",}}>
                                          {itensIniciais.map((item, index) => (
                                            <Pressable
                                            key={item}
                                            style={styles.linha}
                                            onPress={() => alternarItem(index)}
                        >
                        
                        <View style={[styles.checkbox, itensMarcados[index] && styles.marcado]}>
                        {itensMarcados[index]}<Text style={[styles.item, itensMarcados[index] && styles.concluido]}>{item}</Text>
                        </View>
                    
                       
                        </Pressable>
                        ))}
                    </View>
             </View> 
             <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "95%", borderTopColor: "gray", borderTopWidth: 1, paddingTop: 10, marginTop: 10 }}> 
             <Text>← Voltar</Text>
            <Text style={styles.ButtonRota}>Próximo →</Text>
          </View>
        </View>
    </View> 
    );
}

const styles = StyleSheet.create({

    fundo: {
    flex: 1,
    backgroundColor: "rgb(248, 248, 248)"
    },

    logo: {
    width: 130,
    height: 187,
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

     UPbar:{
        width: '100%',
        height: '5%',
        borderBottomWidth: 2,
        borderColor: '#bebdbd',
        marginBottom: 40,
        marginTop: 10,
        paddingBottom: 15,
        gap: 15,
        flexDirection: 'row',
        alignItems: 'center',
    },

    logo1: {
        maxWidth: 40,
        height: 60,
        marginTop: -15,
        marginLeft: 10,
        alignSelf: 'center',
        position: 'relative',
        },

    ButtonRota: {
    backgroundColor: "#209e3c",
    color: "#fff",
    width: "45%",
    textAlign: "center",
    paddingVertical: 10,
    borderRadius: 20,
    fontSize: 16,
    marginTop: 10,
    boxShadow: "0px 1px 6px rgba(0, 0, 0, 0.2)",
    cursor: "pointer",
    },

    texto: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 5,
    width: "80%",
    marginTop: 20,
    justifyContent: "justify",
    },
    
    subtexto: {
    fontSize: 16,
    color: "gray",
    width: "86%",
    marginTop: 5,
    justifyContent: "justify",
    },

    sobv:{
      marginTop: 10,
      marginBottom: 10,
      fontSize: 25,
      fontWeight:'bold',
    },

    container: {
    flex: 2,
    justify: "center",
    alignItems: "center",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    borderRadius: 10,
    width: 400,
    padding: 20,
    backgroundColor: "#fff",
    margin: "auto",
    marginTop: 10,
    gap: 10,
    },

    loginContainer: {
    width: "95%",
    padding: 10,
    borderWidth: 3,
    borderColor: 'transparent',
    boxShadow: "1px 2px 7px rgba(0, 0, 0, 0.2)",
    borderRadius: 10,
    },

    input: {
    boxShadow: "0px 1px 6px rgba(0, 0, 0, 0.2) inset",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    height: 45,
    borderWidth: 0,
    },

    label: {
    fontSize: 16,
    marginBottom: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    fontWeight: "400",
    paddingBottom: 5,
    marginTop: 7,
    fontWeight:'bold',
    },

    });