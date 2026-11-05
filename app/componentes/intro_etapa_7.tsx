import { Link } from 'expo-router';
import { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Pressable } from 'react-native';
import { etapa7 } from '../../login info'
import { IntroScreen, introStyles } from '../../components/intro-screen';

const itensIniciais = ['Muito fácil', 'Fácil', 'Intermediária', 'Elaborada'];

const itensIniciais2 = ['Até 15 min', 'Até 30 min', 'Até 45min', 'Até 1 hora', 'Até 1:30 horas', '2 horas ou mais'];

export default function App() {
    const totalSteps = 7;
    const currentStep = 7;

    const [itensMarcados, setItensMarcados] = useState<boolean[]>(
            itensIniciais.map(() => false),
        );

        const [itensMarcados2, setTempoMarcados] = useState<boolean[]>(
      itensIniciais2.map(() => false),
    )
     
        function alternarItem(index: number) {
            // Cria um novo array e inverte somente o item que foi pressionado.
            setItensMarcados((marcados) =>
                marcados.map((marcado, itemIndex) =>
                    itemIndex === index ? !marcado : marcado,
                ),
            );
          }

        function alternarTempo(index: number) {
            // Cria um novo array e inverte somente o item que foi pressionado.
            setTempoMarcados((marcados) =>
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

            <Text style={styles.texto}>Sua rotina</Text>
            <Text style={styles.subtexto}>Quanto tempo você tem e que tipo de receita prefere?</Text>
            <Text style={styles.pergunta}>Tempo para cozinhar:</Text> 
                   <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 12, marginBottom: 50, marginTop: 15}}>
                  {itensIniciais2.map((item, index) => (
                    <Pressable
                    key={item}
                    onPress={() => alternarTempo(index)}
                >
                                    {/* A cor e o simbolo aparecem apenas quando a tarefa esta marcada. */}
                <View style={[styles.checkbox, itensMarcados2[index] && styles.marcado]}>
                        {itensMarcados2[index]}<Text style={[styles.item, itensMarcados2[index] && styles.concluido]}>{item}</Text>
                </View>
                                    {/* Tarefas concluidas ficam visualmente riscadas e mais discretas. */}
                
                </Pressable>
                ))}
              </View> 
              <Text style={styles.pergunta}>Tipo de receita:</Text>
            <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 12, marginBottom: 50, marginTop: 15}}>
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
             <View style={introStyles.footer}>
             <Text style={styles.link}><Link href={'/componentes/intro_etapa_6'}>← Voltar</Link></Text>
            <TouchableOpacity
            style={styles.Button}
            onPress={() =>
              etapa7(
                itensMarcados.flatMap((marcado, index) => marcado ? [index] : []),
                itensMarcados2.flatMap((marcado, index) => marcado ? [index] : [])
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
  width: "70%",
  marginHorizontal: "auto",
},
  
subtexto: {
  fontSize: 18,
  color: "gray",
  textAlign: "center",
  width: "86%",
  marginHorizontal: "auto",
  marginBottom: 24,
},

pergunta: {
  fontSize: 18,
  marginBottom: 5,
  flexDirection: "row",
  justifyContent: "space-between",
  fontWeight: "bold",
  paddingBottom: 5,
  marginTop: 20,
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
  backgroundColor: "#078523",
  borderColor: "#078523",
  boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.8) inset",
},

checkbox: {
  paddingVertical: 11,
  paddingHorizontal: 7,
  boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.2)",
  borderRadius: 25,
},

item: {
  fontSize: 20,
  textAlign: "center",
},

concluido: {
  color: '#ffffff',
},

/*desta tela*/

loginContainer: {
  width: "80%",
  marginHorizontal: 'auto',
},
aviso:{
  width: '80%',
  height: 90,
  backgroundColor: '#ffef96',
  padding: 20,
  marginHorizontal: 'auto',
  marginBottom: 'auto',
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