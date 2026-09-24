import { View, StyleSheet, Text, ImageBackground, Image,  } from 'react-native';

export default function App() {
    return (
      <View style={styles.fundo}>
        <ImageBackground
        source={require("../imagens/Projetodesintegrador.png")}
        style={styles.imageback}
        />
        <View>
          <Image
            source={require("../imagens/Projeto desintegrador (1).png")}
            style={styles.logo}
          />
          <View style={styles.enter}>
            <Text style={styles.button}>Entrar</Text>
            <Text style={styles.button}>Cadastre-se</Text>
            <Text style={styles.button}>Convidado</Text>
          </View>
        </View>
      </View>
 
    );
}

const styles = StyleSheet.create({

fundo: {
  backgroundColor: "rgb(31, 185, 0)"
},

enter: {
  margin: "auto"
},

button: {
  width: 250,
  backgroundColor: "rgba(223, 223, 223, 0.67)",
  padding: 15,
  textAlign: "center",
  marginTop: 30,
  borderRadius: 20 
},

imageback: {
  width: "100%",
},

logo: {
  marginTop: 20,
  margin: "auto",
  width: "40%",
  height: "90%",
  borderRadius: 20,
},



       
});




