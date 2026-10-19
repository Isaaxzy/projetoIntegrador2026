import { Link } from 'expo-router';
import { useState } from 'react';
import { View, StyleSheet, Text, ImageBackground, Image, TouchableOpacity, TextInput, Pressable, ScrollView } from 'react-native';

const itensIniciais = ['🌱 Iniciante', '🍳 Intermediário', '👩‍🍳 Avançado'];

const itensIniciais2 = ['🍽️ Sem restrições', '🥕 Vegetariano', '🌱 Vegano', '🥗 Flexitariano', '🥑 Low crab', '✨ outra'];

export default function App() {

    const [itensMarcados, setItensMarcados] = useState<boolean[]>(
            itensIniciais.map(() => false),
        );
     
        function alternarItem(index: number, index1: number) {
            // Cria um novo array e inverte somente o item que foi pressionado.                        
            setItensMarcados((marcados) =>
                marcados.map((marcado, itemIndex) =>
                    itemIndex === index ? !marcado : marcado
                )
            );
            
            setItensMarcados2((marcados1) =>
                marcados1.map((marcado1, itemIndex1) =>
                itemIndex1 === index1 ? !marcado1 : marcado1
                )
            );

            const [itensMarcados2, setItensMarcados2] = useState<boolean[]>(
            itensIniciais2.map(() => false),
        );
     
        function alternarItem(index1: number) {
            // Cria um novo array e inverte somente o item que foi pressionado.                        
          
            
          }
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

            <ScrollView style={styles.scroll}>
                <View style={styles.loginContainer}>
                    <Text style={styles.sobv}>Sobre você</Text>

                    <Text style={styles.label}>Nome</Text>
                    <input style={styles.input} type='text' max={30} placeholder="Seu nome" />
                    
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                      <Text style={styles.label}>Idade</Text>
                    </View>
                    <input style={styles.input} secureTextEntry type='number' min={14} max={75} placeholder="14+" />
                    <Text style={styles.label}>Para quantas pessoas você costuma cozinhar?</Text>
                    <input style={styles.input} type='number' min={1} max={10} placeholder="Número de pessoas" />
                    
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

                 <View style={styles.loginContainer}>
                    <View style={{ flexDirection: "row",flexWrap: "wrap", gap: 12, marginTop: 10, width: "100%",}}>
                        {itensIniciais2.map((item1, index1) => (
                     <Pressable
                     key={item1}
                     style={styles.linha}
                     onPress={() => alternarItem(index1)}
                 >
                            
                 <View style={[styles.checkbox, itensMarcados[index1] && styles.marcado]}>
                 {itensMarcados[index1]}<Text style={[styles.item, itensMarcados[index1] && styles.concluido]}>{item1}</Text>
                 </View>
                        </Pressable>
                        ))}
                    <View style={styles.botbox}>
                        <input style={styles.inpout} placeholder='Exemplo de outros...'type="text" />
                        <TouchableOpacity style={styles.ButtonRota}>+ Adicionar </TouchableOpacity>
                    </View>
                    </View>
                    </View>
             
              <View style={styles.ops}>
             
                     <View style={styles.foote}>
                         <TouchableOpacity style={styles.loginButtonP}>
                         <Image
                         style={styles.perf}
                         source={require("../imagens/house.png")}
                          /> 
                         <Text style={styles.textButtonP}>Inicio</Text></TouchableOpacity>
                         </View>
             
                         <View style={styles.foote}>
             
                         <TouchableOpacity style={styles.loginButtonP}>
                          <Image
                         style={styles.perf}
                         source={require("../imagens/agend.png")}
                          /> 
                         <Text style={styles.textButtonP}>Planejar</Text></TouchableOpacity>
                         </View>
             
                         <View style={styles.foote}>
                       <TouchableOpacity style={styles.loginButtonP}>
                         <Image
                         style={styles.perf}
                         source={require("../imagens/fav.png")}
                          />
                        <Text style={styles.textButtonP}>Favoritos</Text></TouchableOpacity>
             
                         </View>
             
                         <View style={styles.foote}>
                           <TouchableOpacity style={styles.loginButtonP}>
                          <Image
                         style={styles.perf}
                         source={require("../imagens/perf.png")}
                          />
                         <Text style={styles.textButtonP}>Perfil</Text></TouchableOpacity>
                             </View>
             
                          </View>
          </ScrollView>
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

    scroll:{
        padding: 10,
        margin: 'auto',
        width: '100%',
        borderRadius: 10,
    },

    loginContainer: {
    width: "95%",
    padding: 10,
    borderWidth: 3,
    marginBottom: 20,
    borderColor: 'transparent',
    boxShadow: "2px 5px 9px rgba(0, 0, 0, 0.2)",
    borderRadius: 10,
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

    Uptext:{
        fontSize: 24,
        fontWeight: "bold",
        fontFamily: 'Times New Roman',
    },

     UPbar:{
        width: '100%',
        height: '5%',
        borderBottomWidth: 2,
        borderColor: '#bebdbd',
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
    width: "25%",
    height: '55%',
    textAlign: "center",
    paddingVertical: 10,
    marginTop: 15,
    marginLeft: 5,
    borderRadius: 10,
    fontSize: 16,
    boxShadow: "0px 1px 6px rgba(0, 0, 0, 0.2)",
    },

    botbox:{
        flexDirection: 'row',
    },

    texto: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 5,
    width: "90%",
    marginTop: 20,
    justifyContent: "justify",
    },
    
    subtexto: {
    fontSize: 16,
    color: "gray",
    width: "86%",
    marginBottom: 10,
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

    input: {
    boxShadow: "0px 1px 6px rgba(0, 0, 0, 0.2) inset",
    borderRadius: 5,
    fontSize: 17,
    padding: 10,
    marginBottom: 10,
    height: 45,
    borderWidth: 0,
    },

    inpout:{
    width: '60%',
    boxShadow: "0px 1px 6px rgba(0, 0, 0, 0.2) inset",
    borderRadius: 5,
    fontSize: 17,
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    height: 30,
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

     loginButtonP: {
        width: '100%',
        height: '50%',
        alignItems: 'center',
        display: 'contents',
    },

      textButtonP:{
        color: '#313131',
        textAlign: "center",
        fontWeight: 'bold',
    },


     perf:{
        maxWidth: 50,
        maxHeight: 50,
        marginTop: -10, 
    },

     ops:{
        flexDirection: 'row',
        borderTopWidth: 2,
        borderColor: 'gray',
        width: '100%',
        height: '10%',
        alignItems: 'center',
        alignContent: 'center',
        marginVertical: 50,
    },

    foote:{
        width: '25%',
        height: '50%',
        alignItems: 'center',
        alignContent: 'center',
        flexDirection: 'column',
    },


    });