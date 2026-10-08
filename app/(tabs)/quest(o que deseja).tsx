import { View, StyleSheet, Text, Touchable, TouchableOpacity, Image} from 'react-native';
import { Link } from 'expo-router';
  import { useState, useEffect } from 'react';


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
                <TouchableOpacity style={styles.bott}>Seguinte <Image
                     source={{uri:" https://us-prod.asyncgw.teams.microsoft.com/v1/c952c103-fb69-4904-a132-1da63e1698ee/objects/0-eus-d8-36d7bf7292c7469316870ecdc5d5320f/views/imgpsh_fullsize"}}
                     style={styles.seta}
                  />
                   </TouchableOpacity>
                  
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
        width: '90%',
        height: '90%',
        maxWidth: 400,
        maxHeight: 600,
        backgroundColor: '#1B2B',
        alignItems: 'center',
        flexDirection: 'column',
        borderRadius: 20
    },

    check:{
        width: '7%',
        maxWidth: '7%',
        height: 20,
        borderWidth: 3,
        marginTop: 4,
        borderRadius: 6,
        marginLeft: 10,
    },

    seta:{
        width: '100%',
        height: 100,
         
    
    },

    hello:{
        width: '90%',
        maxWidth: '100%',
        color: "#1C101B",
        fontSize: 30,
        fontWeight: "600",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30,
        marginBottom: 20,
    },
    text:{
        width: '90%',
        color: "#1C101B",
        fontSize: 18,
        fontWeight: "600",
        alignSelf: 'center'
    },

    op: {
        width: '90%',
        maxWidth: '90%',
        height: 50,
        backgroundColor: '#1B2',
        borderWidth: 3,
        textAlign: 'justify',
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 20,
        borderRadius: 20,
    },

    bott:{
        width: '100%',
    },

    link: {
        color: "#1C101B",
        backgroundColor: '#95ff9f',
        paddingTop: 6,
        width: '80%',
        height: 40,
        marginTop: 8,
        fontSize: 25,
        fontWeight: "600",
        textAlign: 'center',
        fontFamily: 'Apple Juice',
        flexDirection: 'row',
        borderRadius: 20,
        margin: 15,
    },



});




