import { Link } from 'expo-router';
import { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Pressable, ScrollView } from 'react-native';

const itensIniciais = ['Muito fácil', 'Fácil', 'Intermediária', 'Elaborada'];
const itensIniciais2 = ['Até 10 min', 'Até 20 min', 'Até 30 min', 'Até 1 hora', 'Mais de 1 hora'];

export default function App() {
    const totalSteps = 7;
    const currentStep = 7;

    const [itemMarcado, setItemMarcado] = useState<number | null>(null);

  const [tempoMarcados, setTempoMarcados] = useState<boolean[]>(
      itensIniciais2.map(() => false),
    )
   

        function alternarItem(index: number) {
          setItemMarcado((atual) => (atual === index ? null : index));
          }

      function alternarTempo(index: number) {
    setTempoMarcados((marcados) =>
    marcados.map((marcado, i) => (i === index ? !marcado : marcado)),
    );
    }

    return (
      <ScrollView style={styles.backgroundd} contentContainerStyle={styles.pageContent}>
          <View style={styles.container}>
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

            <View style={styles.loginContainer}>
            <Text style={styles.pergunta}>Tempo para cozinhar:</Text> 
            <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 12, marginBottom: 20 }}>
            {itensIniciais2.map((item, index) => (
                        <TouchableOpacity
                          key={item}
                          onPress={() => alternarTempo(index)}
                          style={[styles.checkbox, tempoMarcados[index] && styles.marcado,
                          ]}
                        >
                          <Text style={[styles.item, tempoMarcados[index] && styles.concluido]}>
                            {item}
                          </Text>
                        </TouchableOpacity>
                      ))}
            </View>

              <Text style={styles.pergunta}>Tipo de receita:</Text>
            <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 12, marginBottom: 20}}>
                  {itensIniciais.map((item, index) => (
                    <Pressable
                    key={item}
                    onPress={() => alternarItem(index)}
                >
                                    {/* A cor e o simbolo aparecem apenas quando a tarefa esta marcada. */}
                <View style={[styles.checkbox, itemMarcado === index && styles.marcado]}>
                  <Text style={[styles.item, itemMarcado === index && styles.concluido]}>{item}</Text>
                </View>
                                    {/* Tarefas concluidas ficam visualmente riscadas e mais discretas. */}
                
                </Pressable>
                ))}
            </View>
            </View>

             <View style={styles.footer}>
             <Text><Link href={'./intro_etapa_6'} style={styles.ButtonLeft}>← Voltar</Link></Text>
            <Link href={'../(tabs)/Criar conta'} style={styles.Button}><Text>Próximo →</Text></Link>
          </View>
        </View>
      </ScrollView>
    );
}

const styles = StyleSheet.create({

backgroundd: {
  flex: 1,
},

pageContent: {
  flexGrow: 1,
  alignItems: 'center',
  paddingHorizontal: 12,
  paddingVertical: 16,
},

container: {
        borderRadius: 25,
        flexGrow: 1,
        width: '100%',
        maxWidth: 560,
        alignSelf: 'center',
        padding: 20,
        justifyContent: 'center',
        backgroundImage: 'linear-gradient(to bottom, #fff, #f1f7f2)',
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
},
    
/* Estilos adicionados para a barra de progresso */
progressSection: {
  width: "100%",
  marginHorizontal: 'auto',
  gap: 8,
  marginBottom: 'auto',
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

ButtonLeft: {
  width: "55%",
  textAlign: "center",
  paddingVertical: 10,
  borderRadius: 20,
  fontSize: 16,
  marginTop: 10,
  cursor: "pointer",
},

footer: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  borderTopColor: 'gray',
  borderTopWidth: 1,
  paddingTop: 10,
  marginTop: 'auto',
},

Button: {
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
  textAlign: "center",
  width: "100%",
  marginHorizontal: "auto",
},
  
subtexto: {
  fontSize: 16,
  color: "gray",
  textAlign: "center",
  width: "100%",
  marginHorizontal: "auto",
  marginBottom: 16,
},

pergunta: {
  fontSize: 16,
  fontWeight: "bold",
  marginBottom: 10,
  flexDirection: "row",
  justifyContent: "space-between",
  paddingBottom: 5,
  marginTop: 3,
},

input: {
  boxShadow: "0px 1px 6px rgba(0, 0, 0, 0.2) inset",
  borderRadius: 5,
  padding: 10,
  marginBottom: 100,
  height: 25,
  borderWidth: 0,
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

item: {
  fontSize: 15,
},

concluido: {
  color: '#ffffff',
},

/*desta tela*/

loginContainer: {
  width: "100%",
  marginBottom: 16,
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