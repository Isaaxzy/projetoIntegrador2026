import { Link } from 'expo-router';
import { useState } from 'react';
import { View, StyleSheet, Text, ImageBackground, Image, TouchableOpacity, TextInput, Pressable } from 'react-native';

const itensIniciais = ['🌱 Iniciante', '🍳 Intermediário', '👩‍🍳 Avançado'];


export default function App() {
  const totalSteps = 7;
  const currentStep = 1;

  const [itensMarcados, setItensMarcados] = useState<number | null>(null);
  const [numeroPessoas, setNumeroPessoas] = useState('');
  const [idade, setIdade] = useState('');

  function alternarExperiencia(index: number) {
    setItensMarcados((atual) => (atual === index ? null : index));
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

        <Text style={styles.texto}>Sobre você</Text>
        <Text style={styles.subtexto}>Vamos começar com o básico.</Text>
        <View style={styles.loginContainer}>
          <Text style={styles.pergunta}>Nome</Text>
          <TextInput style={styles.input} placeholder="Seu nome" />

          <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", }}>
            <Text style={styles.pergunta}>Idade</Text>
          </View>
          <TextInput
            style={styles.input}
            placeholder="14+"
            keyboardType="number-pad"
            maxLength={2}
            value={idade}
            onChangeText={(texto) => {
              const somenteDigitos = texto.replace(/\D/g, '');
              if (somenteDigitos === '') {
                setIdade('');
                return;
              }
              setIdade(String(Math.min(Number(somenteDigitos), 75)));
            }}
            onBlur={() => {
              if (idade !== '') {
                setIdade(String(Math.max(Number(idade), 14)));
              }
            }}
          />
          <Text style={styles.pergunta}>Para quantas pessoas você costuma cozinhar?</Text>
          <TextInput
            style={styles.input}
            placeholder="Número de pessoas"
            keyboardType="number-pad"
            value={numeroPessoas}
            onChangeText={(texto) => {
              const somenteDigitos = texto.replace(/\D/g, '');
              if (somenteDigitos === '') {
                setNumeroPessoas('');
                return;
              }
              setNumeroPessoas(String(Math.min(Number(somenteDigitos), 15)));
            }}
          />

          <Text style={styles.pergunta}>Nivel de experiência na cozinha</Text>
          <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 12, marginTop: 10, width: "100%", }}>
            {itensIniciais.map((item, index) => (
              <TouchableOpacity
                key={item}
                onPress={() => alternarExperiencia(index)}
                style={[styles.checkbox, itensMarcados === index && styles.marcado,
                ]}
              >
                <Text style={[styles.item, itensMarcados === index && styles.concluido]}>
                  {item}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        <View style={styles.botoes}>
          <Text><Link href={'./intro_comecar'} style={styles.ButtonLeft}>← Voltar</Link></Text>
          <Link href={'./intro_etapa_2'} style={styles.Button}><Text>Próximo →</Text></Link>
        </View>
      </View>
    </View>
  );
}
//flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "95%", borderTopColor: "gray", borderTopWidth: 1, paddingTop: 10, marginTop: 50}
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
    justifyContent: 'center',
    backgroundImage: 'linear-gradient(to bottom, #fff, #f1f7f2)',
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  },

  progressSection: {
    width: "90%",
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

  botoes: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "95%",
    borderTopColor: "gray",
    borderTopWidth: 1,
    paddingTop: 10,
    marginTop: 50
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
    marginBottom: 10,
    textAlign: "center",
    width: "70%",
    margin: "auto",
    marginTop: 20,
    justifyContent: "center",
  },

  subtexto: {
    fontSize: 16,
    color: "gray",
    textAlign: "center",
    width: "86%",
    margin: "auto",
    marginTop: 10,
    justifyContent: "center",
  },

  pergunta: {
    fontSize: 16,
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

  loginContainer: {
    width: "80%",
    marginHorizontal: 'auto',
  },

});