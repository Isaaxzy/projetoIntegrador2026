import { Link } from 'expo-router';
import { View, StyleSheet, Text, ImageBackground, Image, TouchableOpacity } from 'react-native';

export default function App() {
    return (
      <View style={styles.fundo}>
        <View>
          <View style={styles.container}>
            <Image
              source={require('../imagens/2026_10_01_0mz_Kleki.png')}
              style={styles.logo}
              />
            <View>
              <Text style={styles.texto}>Olá, Eu sou seu companheiro de cozinha</Text>
              <Text style={styles.subtexto}>Antes de começarmos, quero conhecer um pouquinho dos seus gostos para encontrar receitas que realmente combinem com você.</Text>
            </View>
            <Text style={styles.ButtonRota}>Começar →</Text>
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

container: {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  borderRadius: 10,
  width: 400,
  padding: 20,
  backgroundColor: "#fff",
  margin: "auto",
  marginTop: 20,
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
  height: 24,
  border: "none",
},

label: {
  fontSize: 16,
  marginBottom: 5,
  flexDirection: "row",
  justifyContent: "space-between",
  fontWeight: 400,
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

});




