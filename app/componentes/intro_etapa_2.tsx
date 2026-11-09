import { Link } from 'expo-router';
import { useEffect, useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Pressable } from 'react-native';
import { etapa2 } from '../../login info'
import { IntroScreen, introStyles } from '../../components/intro-screen';
import { lerIndicesSalvos } from './introStorage';

const itensIniciais = [{ id: 1, label: '🍽️ Sem restrições' }, { id: 2, label: '🥕 Vegetariano' }, { id: 3, label: '🌱 Vegano' }, { id: 4, label: '🫒 Mediterrânea' }, { id: 5, label: '🍬 Low sugar' }, { id: 6, label: '🥗 Flexitariano' }, { id: 7, label: '🥑 Low crab' }, { id: 8, label: '🐟 Pescetariano' }, { id: 9, label: '🥚 Ovolactovegetariano' }, { id: 10, label: '🧈 Low fat' }, { id: 11, label: '💪 High protein' }];


export default function App() {
  const totalSteps = 7;
  const currentStep = 2;

  const LIMITE_RESTRICOES = 8;
  const [restricoesSelecionadas, setRestricoesSelecionadas] = useState<number[]>([]);

  useEffect(() => {
    const indices = lerIndicesSalvos('Alimentacao', itensIniciais.length);
    setRestricoesSelecionadas(
      indices.includes(0) ? [1] : indices.slice(0, LIMITE_RESTRICOES).map((indice) => indice + 1),
    );
  }, []);

  const alternarRestricao = (id: number) => {
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
  };

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

        <Text style={styles.texto}>Sua alimentação</Text>
        <Text style={styles.subtexto}>Como você costuma se alimentar? Você pode marcer mais de uma opção.</Text>
        <View style={styles.loginContainer}>

             <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 12, marginTop: 10, width: "100%"}}>
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
        <View style={introStyles.footer}>
          <Text style={styles.link}>
            <Link href={'/componentes/intro_etapa_1'}>← Voltar</Link>
          </Text>
          <TouchableOpacity
                      style={styles.Button}
                      onPress={() =>
                        etapa2(
                          restricoesSelecionadas.map((id) => id - 1)
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
  fontSize: 18,
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
  width: "85%",
  marginHorizontal: "auto",
  marginTop: 20,
},
  
subtexto: {
  fontSize: 18,
  color: "gray",
  textAlign: "center",
  width: "86%",
  marginHorizontal: "auto",
  marginBottom: 30,
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
  paddingVertical: 11,
 paddingHorizontal: 5,
  marginBottom: 10,
  alignItems: 'center',
  boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.2)',
  borderRadius: 25,
  },

  item: {
  fontSize: 18,
  textAlign: "center",
  },


  concluido: {
    color: '#ffffff',
  },

  /*desta tela*/

loginContainer: {
  width: "100%",
  marginHorizontal: 0,
  marginVertical: 20,
},

});