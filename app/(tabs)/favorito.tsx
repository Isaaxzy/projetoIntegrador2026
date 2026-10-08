import { useState } from 'react';
import { Pressable, StyleSheet, Text, View, TouchableOpacity, Image, LogBox} from 'react-native';
 
// As tarefas exibidas inicialmente na lista de afazeres.
 
export default function CheckBox() {

    return (
        
<View style={styles.backgroundd}>
    <View style={styles.container}>

        <View style={styles.UPbar}>
           <Image
            style={styles.logo}
            source={require("../imagens/2026_10_01_0mz_Kleki.png")}
             />
         <Text style={styles.Uptext}> Nome </Text>
        </View>

        <Text style={styles.titulo}> 🧡 Favoritos</Text>
        
        <View style={styles.favs}>

        <View style={styles.boxFav}>
            <View style={styles.imgbox}>
                <Text style={styles.textinf}>SSSSSSSSSSSSSS</Text>
            <Image
            style={styles.prato}
            source={require("../imagens/Projeto integrador (2).png")}
             />
            </View>

            <View style={styles.descbox}>
                <Text style={styles.upnome}>Frango cremoso com batatas</Text>

                <Text style={styles.updec}>🕐 30min  🍴 Fácil</Text>  

                <Text style={styles.upingred}>Frango, Batata, Creme...</Text>

                <Text style={styles.upmark}>Você marcou Batata como...</Text>
             </View>
        </View>

        <View style={styles.boxFav}>
            <View style={styles.imgbox}>
                <Text style={styles.textinf}>SSSSSSSSSSSSSS</Text>
            <Image
            style={styles.prato}
            source={require("../imagens/Projeto integrador (2).png")}
             />
            </View>
            <View style={styles.descbox}>
                <Text style={styles.upnome}>Frango cremoso com batatas</Text>

                <Text style={styles.updec}>🕐 30min  🍴 Fácil</Text>  

                <Text style={styles.upingred}>Frango, Batata, Creme...</Text>

                <Text style={styles.upmark}>Você marcou Batata como...</Text>
             </View>
        </View>
        

        </View>

         <View style={styles.ops}>

        <View style={styles.foote}>
            <Image
            style={styles.perf}
            source={require("../imagens/house.png")}
             /> 
             <TouchableOpacity><Text style={styles.textButtonP}>Inicio</Text></TouchableOpacity>
            </View>

            <View style={styles.foote}>

             <Image
            style={styles.perf}
            source={require("../imagens/agend.png")}
             /> 
             <TouchableOpacity><Text style={styles.textButtonP}>Planejar</Text></TouchableOpacity>
            </View>

            <View style={styles.foote}>

            <Image
            style={styles.perf}
            source={require("../imagens/fav.png")}
             />
             <TouchableOpacity><Text style={styles.textButtonP}>Favoritos</Text></TouchableOpacity>

            </View>

            <View style={styles.foote}>

             <Image
            style={styles.perf}
            source={require("../imagens/perf.png")}
             />
             <TouchableOpacity><Text style={styles.textButtonP}>Perfil</Text></TouchableOpacity>
                </View>

             </View>
         </View>  
    </View> 
    );
}
 
// Estilos separados deixam a estrutura do componente mais legivel e reutilizavel.
const styles = StyleSheet.create({
    backgroundd: {
        flex: 1,
        padding: 20,
        width: '100%',
        height: '100%',
        margin: 'auto',
    },

    container: {
        borderRadius: 25,
        flex: 1,
        width: '80%',
        height: 400,
        margin: 'auto',
        padding: 24,
        backgroundImage: 'linear-gradient(to bottom, #fff, #f1f7f2)',
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    },

    UPbar:{
        width: '100%',
        height: '5%',
        borderBottomWidth: 2,
        borderColor: '#bebdbd',
        marginBottom: 40,
        marginTop: 10,
        paddingBottom: 15,
        flexDirection: 'row',
        alignItems: 'center',
    },

    favs:{
        flexDirection: 'row',
        gap: 12
    },

    logo: {
        maxWidth: 130,
        height: 187,
        
        position: 'absolute',
        },

    prato:{
        width: '100%',
        height: '100%',
        borderRadius: 30,
        borderBottomEndRadius: 0,
        borderBottomStartRadius: 0,
    },

    perf:{
        maxWidth: '10%',
        height: 35,
        marginTop: 10,
    },

    textinf:{
        position: 'absolute',
        backgroundColor: '#FFFF',
    },

    Uptext:{
        fontSize: 20,
        marginLeft: 50,
    },

    boxFav:{
        width: '50%',
        height: 350,
        borderRadius: 30,
        alignItems: 'center',
        boxShadow: "0px 1px 6px rgba(0, 0, 0, 0.2)",
        backgroundImage: 'linear-gradient(to bottom, #fff, #f1f7f2)',
    },

    imgbox:{
        width: '100%',
        height: '50%',
        marginBottom: 10,
        borderRadius: 30,
        position: 'relative',
    },

    descbox:{
        width: '90%',
        height: 0,
        alignContent: 'center',
        gap: 10
    },

     upnome:{
        fontWeight: 'bold',
        fontSize: 17,
        marginBottom: 4,
    },

    updec:{
        
     },

     upingred:{

    },

    upmark:{
        fontSize: 13,
        color: '#078523'
    },

    titulo: {
        marginBottom: 20,
        fontSize: 24,
        marginTop: 20,
        fontWeight: 'bold',
    },

       ops:{
        flexDirection: 'row',
        gap: 2,
        borderTopWidth: 2,
        borderColor: 'gray',
        width: '100%',
        height: 100,
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginVertical: 150,
    },

     textButtonV:{
        color: '#313131',
        textAlign: "center",
        fontWeight: 'bold',
    },

     textButtonP:{
        color: '#806969',
        textAlign: "center",
        fontWeight: 'bold',
    },

    loginButtonP: {
        alignItems: 'center',
        flexDirection: 'column',
    },

    foote:{
        width: 100,
        height: 'auto',
        flexDirection: 'column',
        
    },

});