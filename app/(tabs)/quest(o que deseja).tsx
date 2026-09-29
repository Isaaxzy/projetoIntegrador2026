import { View, StyleSheet, Text, Touchable, TouchableOpacity} from 'react-native';
import { Link } from 'expo-router';


export default function App() {
    return (
     <View style={styles.container}>
        <View style={styles.box}>

       
         <Text style={styles.hello}>O que você planeja?</Text>

        <View style={styles.op}>
            <Text style={styles.text}> 
                    <TouchableOpacity style={styles.check}></TouchableOpacity>  Gastar menos em comida
            </Text>
        </View> 

        <View style={styles.op}>
            <Text style={styles.text}> 
                    <TouchableOpacity style={styles.check}></TouchableOpacity>  Planejar refeições
            </Text>
        </View> 

       <View style={styles.op}>
            <Text style={styles.text}> 
                    <TouchableOpacity style={styles.check}></TouchableOpacity>  Cozinhar o que já tenho
            </Text>
        </View> 

        <View style={styles.op}>
            <Text style={styles.text}> 
                    <TouchableOpacity style={styles.check}></TouchableOpacity>  Receitas para minha dieta
            </Text>
        </View> 

        <View style={styles.op}>
            <Text style={styles.text}> 
                    <TouchableOpacity style={styles.check}></TouchableOpacity>  Jantares rápidos
            </Text>
        </View> 

           <View style={styles.op}>
            <Text style={styles.text}> 
                    <TouchableOpacity style={styles.check}></TouchableOpacity>  Pedir menos delivery
            </Text>
        </View> 
            
            <Link href={"#"} style={styles.link}>
                <TouchableOpacity>Seguinte --></TouchableOpacity>
            </Link>
        </View>
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

    box:{
        width: '80%',
        height: '80%',
       /* maxWidth: '40%', */
        backgroundColor: '#1B2B',
        alignItems: 'center',
        flexDirection: 'column',
        borderRadius: 20
    },

    check:{
        width: '9%',
        maxWidth: '6%',
        height: 20,
        borderWidth: 3,
        marginTop: 4,
        borderRadius: 6,
        marginLeft: 20,
    },

    hello:{
        width: '70%',
        color: "#1C101B",
        fontSize: 30,
        fontWeight: "600",
        textAlign: 'justify',
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30,
        marginBottom: 40,
    },
    text:{
        width: '90%',
       
        color: "#1C101B",
        fontSize: 18,
        fontWeight: "600",
        alignSelf: 'center'
    },

    op: {
        width: '80%',
        maxWidth: '90%',
        height: 50,
        backgroundColor: '#1B2',
        textAlign: 'justify',
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 30,
        borderRadius: 20,
    },
    link: {
        color: "#1C101B",
        backgroundColor: '#95ff9f',
        paddingTop: 6,
        width: 350,
        height: 40,
        marginTop: 8,
        fontSize: 25,
        fontWeight: "600",
        textAlign: 'center',
        fontFamily: 'Apple Juice',
        borderRadius: 20,
        margin: 15,
    }
});




