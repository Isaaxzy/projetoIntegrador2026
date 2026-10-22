import { useState } from 'react';
import { usePathname } from 'expo-router';
import { FlatList, Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import type { ReceitaFavorita } from '../servicos/favoritos';

const receitasExemplo: ReceitaFavorita[] = [
    {
        id: 'exemplo-frango',
        nome: 'Frango cremoso com batatas',
        tempo: '30 min',
        dificuldade: 'Fácil',
        ingredientes: 'Frango, batata, creme de leite, queijo e temperos.',
    },
    {
        id: 'exemplo-panqueca',
        nome: 'Panqueca de legumes',
        tempo: '25 min',
        dificuldade: 'Fácil',
        ingredientes: 'Abobrinha, cenoura, farinha, ovos e leite.',
    },
    {
        id: 'exemplo-macarrao',
        nome: 'Macarrão ao molho caseiro',
        tempo: '35 min',
        dificuldade: 'Médio',
        ingredientes: 'Macarrão, tomate, cebola, alho e manjericão.',
    },
    {
        id: 'exemplo-bolo',
        nome: 'Bolo de chocolate',
        tempo: '50 min',
        dificuldade: 'Médio',
        ingredientes: 'Farinha, chocolate, ovos, leite e açúcar.',
    },
];

export default function App() {
    const caminho = usePathname();
    const favoritosAtivo = caminho.endsWith('/favorito');
    const [ingredientesExpandidosId, setIngredientesExpandidosId] = useState<string | null>(null);

    const renderizarFavorito = ({ item }: { item: ReceitaFavorita }) => {
        const expandido = ingredientesExpandidosId === item.id;

        return (
    <View style={styles.coluna}>
    <View style={styles.boxFav}>
    <View style={styles.imgbox}>
        <Text style={styles.textinf}>Combina com você</Text>
        <Image
            style={styles.prato}
            source={item.imagemUrl ? { uri: item.imagemUrl } : require("../imagens/Projeto integrador (2).png")}
        />
    </View>
    <View style={styles.descbox}>
        <Text style={styles.upnome}>{item.nome}</Text>
        <Text style={styles.updec}>🕐 {item.tempo}  🍴 {item.dificuldade}</Text>
        <Pressable
            onPress={() => setIngredientesExpandidosId(expandido ? null : item.id)}
            accessibilityRole="button"
        >
            <Text
                style={styles.upingred}
                numberOfLines={expandido ? undefined : 2}
                ellipsizeMode="tail"
            >
                {item.ingredientes}
            </Text>
        </Pressable>
    </View>
    </View>
    </View>
        );
    };

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

                <Text style={styles.titulo}>🧡 Favoritos</Text>

                <Text style={styles.avisoExemplos}>
                    Prévia da grade — estes cartões são apenas exemplos.
                </Text>

                <FlatList
                    style={styles.lista}
                    contentContainerStyle={styles.favs}
                    data={receitasExemplo}
                    renderItem={renderizarFavorito}
                    keyExtractor={(item) => item.id}
                    numColumns={2}
                    columnWrapperStyle={styles.linha}
                    showsVerticalScrollIndicator={false}
                />

                <View style={styles.ops}>
                    <View style={styles.foote}>
                        <TouchableOpacity style={styles.loginButtonP}>
                            <Image style={styles.perf} source={require("../imagens/house.png")} />
                            <Text style={styles.textButtonP}>Inicio</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.foote}>
                        <TouchableOpacity style={styles.loginButtonP}>
                            <Image style={styles.perf} source={require("../imagens/agend.png")} />
                            <Text style={styles.textButtonP}>Planejar</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.foote}>
                        <TouchableOpacity style={styles.loginButtonP}>
                            <Image
                                style={[styles.perf, favoritosAtivo && styles.iconeAtivo]}
                                source={require("../imagens/fav.png")}
                            />
                            <Text style={styles.textButtonP}>Favoritos</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.foote}>
                        <TouchableOpacity style={styles.loginButtonP}>
                            <Image
                                style={styles.perf}
                                source={require("../imagens/perf.png")}
                            />
                            <Text style={styles.textButtonP}>Perfil</Text>
                        </TouchableOpacity>
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
    },

    container: {
        borderRadius: 25,
        flex: 1,
        width: '100%',
        maxWidth: 900,
        alignSelf: 'center',
        padding: 24,
        backgroundImage: 'linear-gradient(to bottom, #fff, #f1f7f2)',
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    },

    UPbar:{
        width: '100%',
        height: 60,
        borderBottomWidth: 2,
        borderColor: '#bebdbd',
        marginBottom: 12,
        gap: 15,
        flexDirection: 'row',
        alignItems: 'center',
    },

    iconeAtivo: {
        tintColor: '#168A3A',
        },

    favs:{
        flexGrow: 1,
        paddingBottom: 12,
    },

    lista: {
        flex: 1,
    },

    linha: {
        justifyContent: 'space-between',
    },

      Uptext:{
        fontSize: 22,
        fontFamily: 'Arial, serif',
        fontWeight: 'bold',
    },

    logo: {
        width: 40,
        maxWidth: 40,
        height: 60,
        marginLeft: 10,
        alignSelf: 'center',
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
    },

    textinf:{
        position: 'absolute',
        top: 10,
        left: '12.5%',
        width: '75%',
        zIndex: 1,
        borderRadius: 10,
        paddingVertical: 5,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'rgba(7, 158, 7, 0.85)',
        backgroundColor: '#fff',
    },

    coluna: {
        width: '48%',
        marginBottom: 12,
    },

    boxFav:{
        width: '100%',
        minHeight: 300,
        borderRadius: 30,
        alignItems: 'center',
        boxShadow: "0px 1px 6px rgba(0, 0, 0, 0.2)",
        backgroundImage: 'linear-gradient(to bottom, #fff, #f1f7f2)',
    },

    imgbox:{
        width: '100%',
        height: 140,
        borderRadius: 30,
        position: 'relative',
    },

     upnome:{
        fontWeight: 'bold',
        fontSize: 17,
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
        paddingBottom: 12,
    },

    upingred: {
        fontSize: 14,
        color: '#333',
    },

    titulo: {
        marginBottom: 12,
        fontSize: 24,
        fontWeight: 'bold',
    },

    avisoExemplos: {
        marginBottom: 8,
        color: '#666',
        fontSize: 12,
    },

       ops:{
        flexDirection: 'row',
        borderTopWidth: 2,
        borderColor: 'gray',
        width: '100%',
        height: 72,
        alignItems: 'center',
        alignContent: 'center',
        marginTop: 8,
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
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    foote:{
        width: '25%',
        height: '100%',
        alignItems: 'center',
        alignContent: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
    },

});