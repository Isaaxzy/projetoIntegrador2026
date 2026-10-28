import { useCallback, useState } from 'react';
import { Link, useFocusEffect } from 'expo-router';
import { FlatList, Image, Pressable, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { listarFavoritos, type ReceitaFavorita } from '../servicos/favoritos';

export default function App() {
    const { width } = useWindowDimensions();
    const [favoritos, setFavoritos] = useState<ReceitaFavorita[]>([]);
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState<string | null>(null);
    const numColumns = width < 500 ? 1 : width < 900 ? 2 : width < 1200 ? 3 : 4;
    const horizontalPadding = width < 560 ? 12 : width < 900 ? 24 : width < 1200 ? 36 : 48;
    const cardWidth = `${(100 - (numColumns - 1) * 0) / numColumns}%` as `${number}%`;
    const imageHeight = numColumns === 1 ? 180 : numColumns === 2 ? 155 : 140;

    const carregarFavoritos = useCallback(async () => {
        setCarregando(true);
        setErro(null);

        try {
            setFavoritos(await listarFavoritos());
        } catch (error) {
            console.error('Não foi possível carregar os favoritos.', error);
            setErro('Não foi possível carregar seus favoritos. Tente novamente.');
        } finally {
            setCarregando(false);
        }
    }, []);

    useFocusEffect(
        useCallback(() => {
            void carregarFavoritos();
        }, [carregarFavoritos]),
    );

    const renderizarFavorito = ({ item }: { item: ReceitaFavorita }) => {
        return (
            <View style={[styles.coluna, { width: cardWidth }]}>
                <Link href={`/componentes/filmes/${item.id}?origem=favorito`} asChild>
                    <Pressable style={styles.boxFav} accessibilityRole="button">
                        <View style={[styles.imgbox, { height: imageHeight }]}>
                            <Text style={styles.textinf}>☆ Combina com você</Text>
                            <Image
                                style={styles.prato}
                                source={item.imagemUrl ? { uri: item.imagemUrl } : require("../imagens/Projeto integrador (2).png")}
                            />
                        </View>
                        <View style={styles.descbox}>
                            <Text style={styles.upnome}>{item.nome}</Text>
                            <Text style={styles.updec}>🕐 {item.tempo}  🍴 {item.dificuldade}</Text>
                            <Text
                                style={styles.upingred}
                                numberOfLines={2}
                                ellipsizeMode="tail"
                            >
                                {item.ingredientes}
                            </Text>
                        </View>
                    </Pressable>
                </Link>
            </View>
        );
    };

    return (
        <View style={[styles.backgroundd, { padding: horizontalPadding }]}>
            <View style={[styles.container, { padding: horizontalPadding }]}>
                <View style={styles.UPbar}>
                    <Image
                        style={styles.logo}
                        source={require("../imagens/2026_10_01_0mz_Kleki.png")}
                    />
                    <Text style={styles.Uptext}>Tempero de casa</Text>
                </View>

                <Text style={styles.titulo}>🧡 Favoritos</Text>

                {erro !== null && <Text style={styles.erro}>{erro}</Text>}

                <FlatList
                    key={`favoritos-${numColumns}`}
                    style={styles.lista}
                    contentContainerStyle={styles.favs}
                    data={favoritos}
                    renderItem={renderizarFavorito}
                    keyExtractor={(item) => item.id}
                    numColumns={numColumns}
                    columnWrapperStyle={numColumns > 1 ? styles.linha : undefined}
                    showsVerticalScrollIndicator={false}
                    ListEmptyComponent={carregando || erro !== null ? null : (
                        <View style={styles.estadoVazio}>
                            <Image
                                style={styles.imagemVazia}
                                source={require("../imagens/2026_10_01_0mz_Kleki.png")}
                                resizeMode="contain"
                            />
                            <Text style={styles.vazio}>
                                Você ainda não adicionou nenhuma receita aos favoritos.
                            </Text>
                        </View>
                    )}
                />
            </View>
        </View>
    );
}
 
// Estilos separados deixam a estrutura do componente mais legivel e reutilizavel.
const styles = StyleSheet.create({
    backgroundd: {
        flex: 1,
        backgroundColor: "#f4f8f4",
    },

     container: {
        borderRadius: 18,
        flex: 1,
        width: '100%',
        maxWidth: 1200,
        alignSelf: 'center',
        backgroundColor: "#fff",
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
        borderRadius: 16,
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
        marginBottom: 12,
    },

    boxFav:{
        width: '100%',
        minHeight: 300,
        borderRadius: 30,
        alignItems: 'center',
        boxShadow: "0px 1px 6px rgba(0, 0, 0, 0.2)",
        backgroundColor: "#fff",
    },

    imgbox:{
        width: '100%',
        height: 140,
        borderRadius: 16,
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

    erro: {
        marginBottom: 12,
        color: '#b00020',
        fontSize: 14,
    },

    vazio: {
        textAlign: 'center',
        color: '#666',
        fontSize: 16,
    },

    estadoVazio: {
        alignItems: 'center',
        marginTop: 32,
        paddingHorizontal: 16,
    },

    imagemVazia: {
        width: 180,
        height: 180,
        marginBottom: 16,
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