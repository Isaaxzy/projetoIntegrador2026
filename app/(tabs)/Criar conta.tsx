import { View, StyleSheet, Text, ImageBackground, Image, TouchableOpacity,  } from 'react-native';
import { Link } from 'expo-router';
import {register} from '../../login info'

export default function App() {
    return (
      <ScrollView style={styles.fundo} contentContainerStyle={styles.pagina}>
        <View>
          <View style={styles.logobox}>
            <Image
            style={styles.logo}
            source={require("../imagens/add-user.png")}
            />
          </View>
          <View style={{ alignItems: "center", marginBottom: 20 }}>
            <Text style={styles.texto}>Create your account</Text>
            <Text style={styles.subtexto}>Sign up to get started</Text>
          </View>
              <View style={styles.container}>
                <TouchableOpacity style={styles.googleContainer}>
                  <Image
                  source={require("../imagens/720255.png")}
                  style={styles.google}
                  />
                  <Text>Continue with Google</Text>
                </TouchableOpacity>
                <View>
                  <Text style={styles.orText}>──────────── OR ────────────</Text>
                </View>
                <View style={styles.loginContainer}>
                  <Text style={styles.label}>Email:</Text>
                  <input style={styles.input} type="email" id='email' placeholder="✉︎ you@example.com" />
                  <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center",  }}>
                  <Text style={styles.label}>Password: </Text>
                 </View>
                  <input style={styles.input} type="password" id='password' placeholder="🔒︎ Enter your password" />
                  <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center",  }}>
                  <Text style={styles.label}>Confirm Password: </Text>
                 </View>
                  <input style={styles.input} type="password" id='confpassw' placeholder="🔒︎ Confirm your password" />

                  <TouchableOpacity onPress={() => register()}><Text style={styles.loginButton}>Create Account</Text></TouchableOpacity>

                </View>   
              </View>
              <View style={styles.signUpContainer}>
               
                <Text>Already have an account?</Text>
                <Link href="http://localhost:8081/"><TouchableOpacity><Text style={{ color: "#078523", fontWeight: "bold" }}>Log in</Text></TouchableOpacity></Link>
              </View>
        </View>
      </ScrollView>
 
    );
}

const styles = StyleSheet.create({

fundo: {
  flex: 1,
  backgroundColor: "#f4f8f4",
},

pagina: {
  flexGrow: 1,
  justifyContent: "center",
  paddingHorizontal: 16,
  paddingVertical: 24,
},

logobox: {
  backgroundColor: "#168A3A",
  width: 90,
  height: 90,
  margin: 'auto',
  marginTop: 12,
  marginBottom: 10,
  borderRadius: 25
},

logo: {
  width: 50,
  height: 50,
  margin: "auto",
  filter: 'invert(',
},

texto: {
  fontSize: 30,
  fontWeight: "bold",
  marginBottom: 5,
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
  width: "100%",
  maxWidth: 440,
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
  marginTop: 10,
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
  marginVertical: 10,
  color: "gray",
},

loginContainer: {
  width: "90%",
},

input: {
  boxShadow: "0px 1px 6px rgba(0, 0, 0, 0.2) inset",
  borderRadius: 5,
  padding: 10,
  marginBottom: 2,
  height: 33,
  borderWidth: 0,
  fontSize: 13.5,
},

label: {
  fontSize: 16,
  marginBottom: 5,
  flexDirection: "row",
  justifyContent: "space-between",
  fontWeight: 400,
  paddingBottom: 5,
  marginTop: 2,
},

forgotPassword: {
  fontSize: 14,
  color: "#168A3A",
  textDecorationLine: "none",
  paddingBottom: 5,
  marginTop: 5,
},

loginButton: {
  backgroundColor: "#168A3A",
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
