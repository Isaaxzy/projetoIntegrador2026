import { Link } from 'expo-router';
import { useState } from 'react';
import { View, StyleSheet, Text, ImageBackground, Image, TouchableOpacity, TextInput, Pressable } from 'react-native';
import { etapa2 } from '../../login info'

const itensIniciais = [
  { id: 1, label: '🍽️ Sem restrições' },
  { id: 2, label: '🥕 Vegetariano' },
  { id: 3, label: '🌱 Vegano' },
  { id: 4, label: '🥗 Flexitariano' },
  { id: 5, label: '🥑 Low carb' },
  { id: 6, label: '✨ Outra' },
];


export default function App() {
  const totalSteps = 7;
  const currentStep = 2;

    const LIMITE_RESTRICOES = 3;
    const [restricoesSelecionadas, setRestricoesSelecionadas] = useState<number[]>([]);

    function alternarRestricao(id: number) {
      setRestricoesSelecionadas((selecionadas) => {
        if (selecionadas.includes(id)) {
          return selecionadas.filter((item) => item !== id);
        }

        if (id === 1) {
          return [1];
        }

        if (selecionadas.includes(1) || selecionadas.length >= LIMITE_RESTRICOES) {
          return selecionadas;
        }

        return [...selecionadas, id];
      });
    }

    return (
      <View style={styles.backgroundd}>
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

            <Text style={styles.texto}>Sua alimentação</Text>
            <Text style={styles.subtexto}>Como você costuma se alimentar? Você pode marcar mais de uma opção.</Text>
            <View style={styles.loginContainer}> 
                 <View style={{flexDirection: "row", flexWrap: "wrap", justifyContent: "center", gap: 12, marginTop: -50, width: "100%"}}>
                       {itensIniciais.map((item) => {
                 const selecionada = restricoesSelecionadas.includes(item.id);
                 const bloqueada =
                   item.id !== 1 && restricoesSelecionadas.includes(1);
               
                 return (
                   <TouchableOpacity
                     key={item.id}
                     disabled={bloqueada}
                     onPress={() => alternarRestricao(item.id)}
                     style={[
                       styles.checkbox,
                       selecionada && styles.marcado,
                       bloqueada && { opacity: 0.5 },
                     ]}
                   >
                     <Text style={[styles.item, selecionada && styles.concluido]}>
                       {item.label}
                     </Text>
                   </TouchableOpacity>
                 );
               })}
                   </View>
                   
            </View> 
             <View style={styles.footer}> 
             <Text><Link href={'./intro_etapa_1'} style={styles.ButtonLeft}>← Voltar</Link></Text>
                       <TouchableOpacity
                         style={styles.Button}
                         onPress={() =>
                           etapa2(
                             itensIniciais.flatMap((marcado, index) => marcado ? [index] : [])
                           )
                         }
                       >
                         Próximo →
                       </TouchableOpacity>
          </View>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({

backgroundd: {
    paddingVertical: 20,
    height: '100%',
    margin: 'auto',
},

container: {
  borderRadius: 25,
  flex: 1,
  width: 400,
  margin: 'auto',
  padding: 24,
  justifyContent: 'flex-start',
  backgroundImage: 'linear-gradient(to bottom, #fff, #f1f7f2)',
  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
},

footer: {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  width: "95%",
  borderTopColor: "gray",
  borderTopWidth: 1,
  paddingTop: 10,
  marginTop: "auto",
},
    

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
  width: "70%",
  marginHorizontal: "auto",
  marginTop: 60,
},
  
subtexto: {
  fontSize: 16,
  color: "gray",
  textAlign: "center",
  width: "86%",
  marginHorizontal: "auto",
  marginBottom: 'auto',
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
    width: "80%",
    marginHorizontal: 'auto',
  },

});