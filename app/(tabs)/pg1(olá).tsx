import { View, StyleSheet, Text, Touchable, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';


export default function App() {
    return (
     <View style={styles.container}>
         <Text style={styles.hello}>Olá, Chef! 👋</Text>

         <Text style={styles.texto}> 
                 Bem-vindo(a) ao [Nome do aplicativo]!
                 Faremos algumas perguntas rápidas para adaptar o aplicativo às suas necessidades e oferecer uma experiência melhor.
                 Toque em “Próximo” para responder e use a seta para voltar à pergunta anterior.
                 Vamos começar?
         </Text>
            
            <Link href={"#"} style={styles.link}>
                <TouchableOpacity>Proximo</TouchableOpacity>
            </Link>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        flex: 1,
        backgroundColor: "#86db8c",
        justifyContent: "center",
        flexDirection: 'column'
    },

    hello:{
        width: '70%',
        color: "#1C101B",
        fontSize: 18,
        fontWeight: "600",
        textAlign: 'justify',
        alignItems: "center",
        justifyContent: "center",
        flexDirection: 'row'
    },

    texto: {
        width: '70%',
        color: "#1C101B",
        fontSize: 18,
        fontWeight: "600",
        textAlign: 'justify',
        alignItems: "center",
        justifyContent: "center",
       
    },
    link: {
        color: "#1C101B",
        backgroundColor: '#95ff9f',
        paddingTop: 7,
        width: 150,
        height: 30,
        marginTop: 60,
        fontSize: 18,
        fontWeight: "600",
        textAlign: 'center',
        fontFamily: 'Apple Juice',
        borderRadius: 20,
        margin: 15,
    }
});




