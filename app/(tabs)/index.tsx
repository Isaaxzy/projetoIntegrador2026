import { View, StyleSheet, Text, ImageBackground, Image,  } from 'react-native';

export default function App() {
    return (
      <View style={styles.fundo}>
        <View>
          <Image
          style={styles.logo}
          source={require("../imagens/Projeto integrador (1).png")}
          />
          <View style={{ alignItems: "center", marginBottom: 20 }}>
            <Text style={styles.texto}>Welcome back</Text>
            <Text style={styles.subtexto}>Log in to your account</Text>
          </View>
              <View style={styles.container}>
                <View style={styles.googleContainer}>
                  <Image
                  source={require("../imagens/720255.png")}
                  style={styles.google}
                  />
                  <Text>Continue with Google</Text>
                </View>
                <View>
                  <Text style={styles.orText}>──────────── OR ────────────</Text>
                </View>
                <View style={styles.loginContainer}>
                  <Text style={styles.label}>Email:</Text>
                  <input style={styles.input} type="email" placeholder="✉︎ you@example.com" />
                  <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center",  }}>
                  <Text style={styles.label}>Password: </Text>
                    <Text style={styles.forgotPassword}>Forgot password?</Text>
                 </View>
                  <input style={styles.input} type="password" placeholder="🔒︎ Enter your password" />
                  <View>
                    <Text style={styles.loginButton}>Log in</Text>
                  </View>
                </View>   
              </View>
              <View style={styles.signUpContainer}>
                <Text>Don´t have an account?</Text>
                <Text style={{ color: "#078523", fontWeight: "bold" }}>Create One</Text>
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
  width: 90,
  height: 90,
  margin: "auto",
  marginTop: 40,
  marginBottom: 20,
  borderRadius: 20,
},



texto: {
  fontSize: 30,
  fontWeight: "bold",
  marginBottom: 10,
},
  
subtexto: {
  fontSize: 15,
  color: "gray",
},

container: {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  borderRadius: 10,
  width: "87%",
  padding: 20,
  backgroundColor: "#fff",
  margin: "auto",
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
  height: 20,
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
},

signUpContainer: {
  marginTop: 20,
  alignItems: "center",
  flexDirection: "row",
  justifyContent: "center",
  gap: 8,
},

});




