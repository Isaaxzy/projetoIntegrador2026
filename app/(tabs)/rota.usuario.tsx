import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function App() {
  // Estados para armazenar as quantidades
  const [adultos, setAdultos] = useState(0);
  const [criancas, setCriancas] = useState(0);

  return (
    <View style={styles.fundo}>
      <View style={styles.tudo}>
        <Text style={styles.text1}>Quantas pessoas vão comer?</Text>
        
        <View style={styles.container}>
          <View style={styles.containerIn}>
            <Text style={styles.titulo}>Adultos</Text>
            <View style={styles.textCont}>
              <Text style={styles.descricao}>Porções inteiras</Text>
              
              <View style={styles.stepper}>
                <TouchableOpacity onPress={() => setAdultos(adultos + 1)}>
                  <Text style={styles.btnText}>+</Text>
                </TouchableOpacity>
                
                <Text style={styles.countText}>{adultos}</Text>
                
                <TouchableOpacity onPress={() => setAdultos(Math.max(0, adultos - 1))}>
                  <Text style={styles.btnText}>-</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.containerIn}>
            <Text style={styles.titulo}>Crianças</Text>
            <View style={styles.textCont}>
              <Text style={styles.descricao}>Meias porções</Text>
              
              <View style={styles.stepper}>
                <TouchableOpacity onPress={() => setCriancas(criancas + 1)}>
                  <Text style={styles.btnText}>+</Text>
                </TouchableOpacity>
                
                <Text style={styles.countText}>{criancas}</Text>
                
                <TouchableOpacity onPress={() => setCriancas(Math.max(0, criancas - 1))}>
                  <Text style={styles.btnText}>-</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>

      <TouchableOpacity onPress={() => console.log({ adultos, criancas })}>
        <Text style={styles.text2}>Próximo</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({

  fundo: {
    flex: 1,
    backgroundColor: "#ececec",
    justifyContent: "space-between",
    paddingVertical: 40,
  },

  tudo: {
    alignItems: "center",
  },

  text1: {
    fontSize: 25,
    textAlign: "center",
    marginTop: 12,
    fontWeight: "bold",
  },

  container: {
    marginTop: 20,
  },

  containerIn: {
    backgroundColor: "#95e97cd0",
    padding: 16,
    borderRadius: 15,
    marginTop: 16,
    width: 340,
  },

  titulo: {
    fontSize: 20,
    fontWeight: "bold",
  },
  
  textCont: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  descricao: {
    fontSize: 14,
    color: "#333",
  },

  stepper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  btnText: {
    fontSize: 20,
    paddingHorizontal: 6,
  },

  countText: {
    fontSize: 18,
  },

  text2: {
    alignSelf: "center",
    textAlign: "center",
    backgroundColor: "#95e97cd0",
    width: "40%",
    padding: 12,
    borderRadius: 18,
    fontSize: 16,
    fontWeight: "bold",
  },
});