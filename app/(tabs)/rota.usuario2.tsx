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
            {/* Barra de Progresso + Etapa */}
            <View style={styles.progressSection}>
              <View style={styles.barContainer}>
                {Array.from({ length: totalSteps }).map((_, index) => {
                  const stepNumber = index + 1;
                  const isActive = stepNumber <= currentStep;
                  return (
                    <View
                      key={index}
                      style={[
                        styles.segment,
                        isActive ? styles.activeSegment : styles.inactiveSegment,
                      ]}
                    />
                  );
                })}
              </View>
              <Text style={styles.stepText}>Etapa {currentStep} de {totalSteps}</Text>
            </View> 

            <Text style={styles.texto}>Sobre você</Text>
              <Text style={styles.subtexto}>Vamos começar com o básico.</Text>
                <View style={styles.loginContainer}>
                    <Text style={styles.label}>Nome</Text>
                    <TextInput style={styles.input} placeholder="Seu nome" />
                    
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                      <Text style={styles.label}>Idade</Text>
                    </View>
                    <TextInput style={styles.input} secureTextEntry placeholder="Ex: 28" />
                    <Text style={styles.label}>Para quantas pessoas você costuma cozinhar?</Text>
                    <TextInput style={styles.input} placeholder="Número de pessoas" />
                    
                    <Text>Nivel de experiência na cozinha</Text>
                    <View style={{ flexDirection: "row",flexWrap: "wrap", gap: 12, marginTop: 10, width: "100%",}}>
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
  marginBottom: 10,
  textAlign: "center",
  width: "70%",
  margin: "auto",
  marginTop: 20,
  justifyContent: "justify",
},
  
subtexto: {
  fontSize: 16,
  color: "gray",
  textAlign: "center",
  width: "86%",
  margin: "auto",
  marginTop: 10,
  justifyContent: "justify",
},

option1: {
  backgroundColor: "#209e3c",
  color: "#fff",
  fontSize: 16,
  boxShadow: "0px 1px 6px rgba(0, 0, 0, 0.17)",
  padding: 10,
  paddingVertical: 15,
  width: "100%",
  textAlign: "center",
  borderRadius: 10,
  cursor: "pointer",
},

option: {
  fontSize: 16,
  color: "gray",
  boxShadow: "0px 1px 6px rgba(0, 0, 0, 0.17)",
  padding: 10,
  paddingVertical: 15,
  width: "100%",
  textAlign: "center",
  borderRadius: 10,
  cursor: "pointer",
},

optionContainer: {
  flexDirection: "row",
  width: "100%",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: 10,
  borderRadius: 15,
  alignSelf: "center",
  gap: 15,
},

container: {
  flex: 1,
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

google: {
  width: 20,
  height: 20,
  marginRight: 10,
},

googleContainer: {
  marginTop: 13,
  width: "90%",
  boxShadow: "0px 1px 6px rgba(0, 0, 0, 0.21)",
  borderRadius: 10,
  flexDirection: "row",
  alignItems: "center",
  backgroundColor: "#fff", 
  padding: 10, 
  elevation: 2,
  justifyContent: "center",
  paddingVertical: 14,
  cursor: "pointer",
},
  
orText: {
  marginVertical: 20,
  color: "gray",
},

loginContainer: {
  width: "90%",
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
},

forgotPassword: {
  fontSize: 14,
  color: "#078523",
  textDecorationLine: "none",
  paddingBottom: 5,
  marginTop: 5,
  cursor: "pointer",
},

loginButton: {
  backgroundColor: "#078523",
  color: "#fff",
  width: "100%",
  textAlign: "center",
  paddingVertical: 10,
  borderRadius: 5,
  fontSize: 16,
  marginTop: 10,
  boxShadow: "0px 1px 6px rgba(0, 0, 0, 0.2)",
  cursor: "pointer",
},

signUpContainer: {
  marginTop: 20,
  alignItems: "center",
  flexDirection: "row",
  justifyContent: "center",
  gap: 8,
},

/* Estilos adicionados para a barra de progresso */
progressSection: {
  width: "90%",
  gap: 8,
  marginBottom: 10,
},
barContainer: {
  flexDirection: "row",
  width: "100%",
  gap: 6,
},
segment: {
  flex: 1,
  height: 6,
  borderRadius: 3,
},
activeSegment: {
  backgroundColor: "#209e3c",
},
inactiveSegment: {
  backgroundColor: "#E2E8F0",
},
stepText: {
  fontSize: 14,
  color: "gray",
},

});