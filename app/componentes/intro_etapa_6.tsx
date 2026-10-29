import { Link } from 'expo-router';
import { useState } from 'react';
import { View, StyleSheet, Text, ImageBackground, Image, TouchableOpacity, TextInput, Pressable } from 'react-native';
import { etapa6 } from '../../login info'

const itensIniciais = ['💫 Comer melhor', '⚡ Encontrar receitas práticas', '💰 Economizar', '🌈 Variar minha alimentação', '🎓 Aprender a cozinhar', '📅 Encontrar receitas para minha rotina', '✨ Outro'];


export default function App() {
    const totalSteps = 7;
    const currentStep = 6;

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
      <ScrollView style={styles.backgroundd} contentContainerStyle={styles.backgroundContent} keyboardShouldPersistTaps="handled">
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

            <Text style={styles.texto}>Seu objetivo</Text>
            <Text style={styles.subtexto}>O que você procura no aplicativo?</Text>
          <View style={styles.loginContainer}> 
            <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 12, marginBottom: 30}}>
                  {itensIniciais.map((item, index) => (
                    <Pressable
                    key={item}
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
             <Text><Link href={'/componentes/intro_etapa_5'}>← Voltar</Link></Text>
            <TouchableOpacity
                                    style={styles.Button}
                                    onPress={() =>
                                      etapa6(
                                        itensMarcados.flatMap((marcado, index) => marcado ? [index] : [])
                                      )
                                    }
                                  >
                                    Próximo →
                                  </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
}

const styles = StyleSheet.create({

backgroundd: {
        flex: 1,
        backgroundColor: "#f4f8f4",
},

backgroundContent: {
        flexGrow: 1,
        justifyContent: "center",
        paddingVertical: 20,
        paddingHorizontal: 16,
},

container: {
        borderRadius: 25,
        width: "100%",
        maxWidth: 560,
        minHeight: 440,
        alignSelf: "center",
        padding: 24,
        justifyContent: 'flex-start',
        backgroundColor: "#fff",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
},
    
/* Estilos adicionados para a barra de progresso */
progressSection: {
  width: "90%",
  marginHorizontal: 'auto',
  gap: 8,
  marginBottom: 24,
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
  backgroundColor: "#168A3A",
},
inactiveSegment: {
  backgroundColor: "#E2E8F0",
},
stepText: {
  fontSize: 14,
  color: "gray",
},

ButtonLeft: {
  width: "55%",
  textAlign: "center",
  paddingVertical: 10,
  borderRadius: 20,
  fontSize: 16,
  marginTop: 10,
  cursor: "pointer",
},

Button: {
  backgroundColor: "#168A3A",
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
  textAlign: "center",
  width: "70%",
  marginHorizontal: "auto",
},
  
subtexto: {
  fontSize: 16,
  color: "gray",
  textAlign: "center",
  width: "86%",
  marginHorizontal: "auto",
  marginBottom: 24,
},

pergunta: {
  fontSize: 16,
  marginBottom: 5,
  flexDirection: "row",
  justifyContent: "space-between",
  fontWeight: "400",
  paddingBottom: 5,
  marginTop: 7,
},

input: {
  boxShadow: "0px 1px 6px rgba(0, 0, 0, 0.2) inset",
  borderRadius: 5,
  padding: 10,
  marginBottom: 10,
  height: 45,
  borderWidth: 0,
},

marcado: {
  backgroundColor: "#168A3A",
  borderColor: "#168A3A",
  boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.8) inset",
},

checkbox: {
  padding: 11,
  boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.2)",
  borderRadius: 25,
},

item: {
  fontSize: 15,
},

concluido: {
  color: '#ffffff',
},

/*desta tela*/

loginContainer: {
  width: "80%",
  marginBottom: 40,
  marginHorizontal: 'auto',
},
aviso:{
  width: "100%",
  minHeight: 90,
  backgroundColor: '#ffef96',
  padding: 20,
  marginHorizontal: 'auto',
  marginBottom: 12,
  borderRadius: 10,
  borderWidth: 4,
  borderColor: '#ffdc19',
  alignItems: 'center',
  flexDirection: 'row',
  },

icoav:{
  margin: 'auto',
  fontSize: 20,
  },
teavs:{
  width: '90%',
  fontSize: 11,
  textAlign: 'justify',
},

});