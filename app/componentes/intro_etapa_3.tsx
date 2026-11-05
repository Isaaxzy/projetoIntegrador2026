import { Link } from 'expo-router';
import { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, TextInput, Pressable } from 'react-native';
import { etapa3 } from '../../login info'
import { IntroScreen, introStyles } from '../../components/intro-screen';

const itensIniciais = ['🥛 Leite', '🥚 Ovo', '🥜 Amendoim', '🌰 Castanhas', '🫘 Soja', '🌾 Trigo', '🐟 Peixes', '🦐 Frutos do Mar'];


export default function App() {
    const totalSteps = 7;
    const currentStep = 3;

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
      <IntroScreen>
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

            <Text style={styles.texto}>Alergias e intolerâncias</Text>
            <Text style={styles.subtexto}>Existe algum alimento que você não pode consumir?</Text>
            <View style={styles.aviso}>
              <Text style={styles.icoav} accessibilityLabel="Atenção">⚠️</Text>
              <Text style={styles.teavs}>
                <Text style={styles.avisoTitulo}>Importante</Text>
                {'\n'}
                Confira sempre os ingredientes e rótulos dos produtos. As sugestões do aplicativo não substituem a orientação médica ou nutricional.
              </Text>
            </View>
            <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 15, marginTop: 5, justifyContent: "center" }}>
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
            <View style={styles.loginContainer}>
                <Text style={styles.pergunta}>Outros que você precisa evitar:</Text>
                <TextInput style={styles.input} id='outros' placeholder="Ex: Corantes, gluten..." />
            </View> 
             <View style={introStyles.footer}>
             <Text style={styles.link}><Link href={'/componentes/intro_etapa_2'}>← Voltar</Link></Text>
            <TouchableOpacity
                        style={styles.Button}
                        onPress={() =>
                          etapa3(
                            itensMarcados.flatMap((marcado, index) => marcado ? [index] : [])
                          )
                        }
                      >
                        Próximo →
                      </TouchableOpacity>
          </View>
        </IntroScreen>
    );
}

const styles = StyleSheet.create({

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
  backgroundColor: "#209e3c",
},
inactiveSegment: {
  backgroundColor: "#E2E8F0",
},
stepText: {
  fontSize: 14,
  color: "gray",
},

  link: {
    width: "45%",
    textAlign: "center",
    paddingVertical: 10,
    borderRadius: 20,
    fontSize: 18,
    marginTop: 8,
    cursor: "pointer",
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
    fontFamily: "Arial, sans-serif",
  },

texto: {
  fontSize: 35,
  fontWeight: "bold",
  textAlign: "center",
  width: "95%",
  marginHorizontal: "auto",
},
  
subtexto: {
  fontSize: 18,
  color: "gray",
  textAlign: "center",
  width: "86%",
  marginHorizontal: "auto",
  marginBottom: 12,
},

pergunta: {
  fontSize: 18,
  marginBottom: 5,
  flexDirection: "row",
  justifyContent: "space-between",
  fontWeight: "bold",
  paddingBottom: 5,
  marginTop: 7,
},

input: {
  boxShadow: "0px 1px 6px rgba(0, 0, 0, 0.2) inset",
  borderRadius: 5,
  padding: 10,
  marginBottom: 10,
  height: 60,
  fontSize: 18,
  borderWidth: 0,
},

marcado: {
  backgroundColor: "#078523",
  borderColor: "#078523",
  boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.8) inset",
},

checkbox: {
  paddingVertical: 11,
  paddingHorizontal: 6,
  boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.2)",
  borderRadius: 25,
},

item: {
  fontSize: 19,
  textAlign: "center",
},

concluido: {
  color: '#ffffff',
},

/*desta tela*/

loginContainer: {
  width: "80%",
  marginHorizontal: 'auto',
  marginTop: 40,
},

aviso:{
  width: '100%',
  minHeight: 120,
  backgroundColor: '#ffef96',
  padding: 16,
  marginHorizontal: 'auto',
  marginTop: 24,
  marginBottom: 24,
  borderRadius: 14,
  borderWidth: 2,
  borderColor: '#ffdc19',
  alignItems: 'flex-start',
  flexDirection: 'row',
  gap: 14,
  },

icoav:{
  width: 52,
  height: 52,
  lineHeight: 52,
  borderRadius: 26,
  fontSize: 40,
  textAlign: 'center',
  },

teavs:{
  flex: 1,
  fontSize: 18,
  lineHeight: 23,
  color: '#493b00',
  textAlign: 'left',
},

avisoTitulo: {
  fontSize: 20,
  fontWeight: 'bold',
},

});