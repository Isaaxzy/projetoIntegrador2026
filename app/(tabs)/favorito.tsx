import { useState } from 'react';
import { Pressable, StyleSheet, Text, View, TouchableOpacity, Image, LogBox} from 'react-native';

 
 
export default function CheckBox() {
    const [ingredientesExpandido, setIngredientesExpandido] = useState(false);

    return (
        
<View style={styles.backgroundd}>
    <View style={styles.container}>

        <View style={styles.UPbar}>
           <Image
            style={styles.logo}
            source={require("../imagens/2026_10_01_0mz_Kleki.png")}
             />
         <Text style={styles.Uptext}>Tempero de casa</Text>
        </View>

        <View>
        <Text style={styles.titulo}> 🧡 Favoritos</Text>
        </View>
        
        <View style={styles.favs}>

        <View style={styles.boxFav}>
            <View style={styles.imgbox}>
                <Text style={styles.textinf}>Combina com você</Text>
            <Image
            style={styles.prato}
            source={require("../imagens/Projeto integrador (2).png")}
             />
            </View>

            <View style={styles.descbox}>
                <Text style={styles.upnome}>Frango cremoso com batatas</Text>

                <Text style={styles.updec}>🕐 30min  🍴 Fácil</Text>  

       <Pressable
            onPress={() => setIngredientesExpandido((expandido) => !expandido)}
            accessibilityRole="button"
            style={[
                ingredientesExpandido && styles.caixaIngredientesAtiva,
            ]}
            >
            <Text
                style={styles.upingred}
                numberOfLines={ingredientesExpandido ? undefined : 2}
                ellipsizeMode="tail"
            >
                Frango, batata, creme de leite, queijo, nose, nose e temperos.
            </Text>
        </Pressable>

             </View>
        </View>

        <View style={styles.boxFav}>
            <View style={styles.imgbox}>
                <Text style={styles.textinf}>Combina com você</Text>
            <Image
            style={styles.prato}
            source={require("../imagens/Projeto integrador (2).png")}
             />
            </View>
            <View style={styles.descbox}>
                <Text style={styles.upnome}>Frango cremoso com batatas</Text>

                <Text style={styles.updec}>🕐 30min  🍴 Fácil</Text>  

                <Text style={styles.upingred}>Frango, Batata, Creme...</Text>

             </View>
        </View>
        

        </View>

         <View style={styles.ops}>

       
        <View style={styles.foote}>
            <TouchableOpacity style={styles.loginButtonP}>
            <Image
            style={styles.perf}
            source={require("../imagens/house.png")}
             /> 
            <Text style={styles.textButtonP}>Inicio</Text></TouchableOpacity>
            </View>

            <View style={styles.foote}>

            <TouchableOpacity style={styles.loginButtonP}>
             <Image
            style={styles.perf}
            source={require("../imagens/agend.png")}
             /> 
            <Text style={styles.textButtonP}>Planejar</Text></TouchableOpacity>
            </View>

            <View style={styles.foote}>
          <TouchableOpacity style={styles.loginButtonP}>
            <Image
            style={styles.perf}
            source={require("../imagens/fav.png")}
             />
           <Text style={styles.textButtonP}>Favoritos</Text></TouchableOpacity>

            </View>

            <View style={styles.foote}>
              <TouchableOpacity style={styles.loginButtonP}>
             <Image
            style={styles.perf}
            source={require("../imagens/perf.png")}
             />
            <Text style={styles.textButtonP}>Perfil</Text></TouchableOpacity>
                </View>

             </View>
         </View>  
    </View> 
    );
}
 
// Estilos separados deixam a estrutura do componente mais legivel e reutilizavel.
const styles = StyleSheet.create({
    backgroundd: {
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
        gap: 15,
        flexDirection: 'row',
        alignItems: 'center',
    },

    favs:{
        flexDirection: 'row',
        gap: 12
    },

      Uptext:{
        fontSize: 22,
        fontFamily: 'Arial, serif',
        fontWeight: 'bold',
    },

    logo: {
        maxWidth: 40,
        height: 60,
        marginTop: -15,
        marginLeft: 10,
        alignSelf: 'center',
        position: 'relative',
        },

    prato:{
        width: '100%',
        height: '100%',
        borderRadius: 30,
        borderBottomEndRadius: 0,
        borderBottomStartRadius: 0,
    },

    perf:{
        maxWidth: 50,
        maxHeight: 50,
        marginTop: -15, 
    },

    textinf:{
        width: '75%',
        height: 30,
        alignSelf: 'center',
        textAlign: 'center',
        fontWeight: 'bold',
        paddingTop: 3,
        marginTop: 10,
        position: 'absolute',
        borderRadius: 10,
        zIndex: 10,
        color: 'rgba(7, 158, 7, 0.67)',
        backgroundColor: '#FFFF',
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

     upnome:{
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 5,
        marginTop: 6,
    },

    updec:{
        fontSize: 16,
     },

    descbox: {
        width: '90%',
        flex: 1,
        gap: 10,
        },

    caixaIngredientesAtiva: {
        width: '100%',
        height: 'auto',
        backgroundColor: '#fafafa',
        borderColor: '#29d82e',
        borderRadius: 15,
        boxShadow: "0px 1px 6px rgba(0, 0, 0, 0.2)",
        padding: 10,
        },

    caixaPressionada: {
        backgroundColor: '#f0f0f0',
        transform: [{ scale: 0.98 }],
        },

    upingred: {
        fontSize: 16,
        color: '#333',
        },

    titulo: {
        marginBottom: 20,
        fontSize: 24,
        marginTop: 20,
        fontWeight: 'bold',
    },

       ops:{
        flexDirection: 'row',
        borderTopWidth: 2,
        borderColor: 'gray',
        width: '100%',
        height: '14%',
        alignItems: 'center',
        alignContent: 'center',
        marginVertical: 165,
    },

     textButtonV:{
        color: '#313131',
        textAlign: "center",
        fontWeight: 'bold',
    },

     textButtonP:{
        color: '#313131',
        textAlign: "center",
        fontWeight: 'bold',
    },

    loginButtonP: {
        width: '100%',
        height: '50%',
        alignItems: 'center',
        display: 'contents',
    },

    foote:{
        width: '26%',
        height: '50%',
        alignItems: 'center',
        alignContent: 'center',
        flexDirection: 'column',
    },

});