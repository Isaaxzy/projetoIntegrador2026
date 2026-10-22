import { useState } from 'react';
import { Alert, View, StyleSheet, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { register } from '../../create account';

export default function App() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleRegister = async () => {
      const result = await register(email, password, confirmPassword);
      Alert.alert(result.success ? 'Success' : 'Registration failed', result.message);

      if (result.success) {
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        router.replace('/intro_comecar');
      }
    };

    return (
      <View style={styles.fundo}>
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
                  <TextInput
                    style={styles.input}
                    value={email}
                    onChangeText={setEmail}
                    placeholder="✉︎ you@example.com"
                    keyboardType="email-address"
                    autoCapitalize="none"
                  />
                  <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center",  }}>
                  <Text style={styles.label}>Password: </Text>
                 </View>
                  <TextInput
                    style={styles.input}
                    value={password}
                    onChangeText={setPassword}
                    placeholder="🔒︎ Enter your password"
                    secureTextEntry
                  />
                  <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center",  }}>
                  <Text style={styles.label}>Confirm Password: </Text>
                 </View>
                  <TextInput
                    style={styles.input}
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    placeholder="🔒︎ Confirm your password"
                    secureTextEntry
                  />
                  <View>
                    <TouchableOpacity style={styles.loginButton} onPress={handleRegister}>
                      <Text style={styles.loginButtonText}>Create Account</Text>
                    </TouchableOpacity>
                  </View>
                </View>   
              </View>
              <View style={styles.signUpContainer}>
                <Text>Already have an account?</Text>
                <TouchableOpacity><Text style={{ color: "#078523", fontWeight: "bold" }}>Log in</Text></TouchableOpacity>
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

logobox: {
  backgroundColor: "#078523",
  width: 100,
  height: 100,
  margin: 'auto',
  marginTop: 20,
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
  width: 400,
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
  height: 40,
  borderWidth: 0
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
  color: "#078523",
  textDecorationLine: "none",
  paddingBottom: 5,
  marginTop: 5,
},

loginButton: {
  backgroundColor: "#078523",
  width: "100%",
  paddingVertical: 10,
  borderRadius: 5,
  fontSize: 16,
  marginTop: 5,
  boxShadow: "0px 1px 6px rgba(0, 0, 0, 0.2)",
},

loginButtonText: {
  color: "#fff",
  textAlign: "center",
  fontSize: 16,
},

signUpContainer: {
  marginTop: 5,
  alignItems: "center",
  flexDirection: "row",
  justifyContent: "center",
  gap: 8,
},

});




