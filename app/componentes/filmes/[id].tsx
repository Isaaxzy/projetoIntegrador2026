import { View, StyleSheet, FlatList, Text, Touchable, TouchableOpacity, Image, ImageBackground } from 'react-native';
import DadosDosFilmes from '../coisas';
import { Link, useLocalSearchParams } from 'expo-router';

export default function Filme() {
  const { id } = useLocalSearchParams();

  const categorias = DadosDosFilmes();
  const filmeEncontrado = categorias
    .flatMap(categoria => categoria.filmes)
    .find(f => f.id === id);
  console.log("Filme encontrado:", filmeEncontrado);
  const item: Filmeprops = {
    ...filmeEncontrado,
  }
  return (
    <View style={styles.fundo}>
        <View style={styles.capa}>
      <Image
        source={{ uri: item.Imagem }}
        style={styles.imagem}>
      </Image>
      </View>
      <View style={styles.informacoes}>
        <Text style={styles.titulo}>{item.titulo}</Text>
        <Text style={styles.descricao}>{item.descrição}</Text>
        <View style={{flexDirection: "row", justifyContent: "space-between", width: "90%", margin: "auto", }}>
        <Text style={styles.duracao}>{item.duracao}</Text>
        <Text style={styles.duracao}>{item.dificuldade}</Text>
        <Text style={styles.avaliacao}>Avaliação: 8.5/10</Text>
        </View>
      </View>
      <View style={styles.botaoContainer}>
        <Link href="https://youtu.be/oHg5SJYRHA0?si=upSeTCosjOo_Q9u4">
          <TouchableOpacity>
            <Text style={styles.botao2}>🏠︎</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  fundo: {
    flex: 1,
    backgroundColor: "#ececec",
  },

  capa: {
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 15,
    backgroundColor: "rgb(6, 172, 1)",
    padding: 10,
    margin: "auto",
    width: 470,
    boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.27)",
  },

  imagem: {
    width: 450,
    height: 320,
    borderRadius: 10,
  },

  titulo: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "left",
    marginTop: 12,
    color: "#fff",
    margin: "auto",
    marginBottom: 6,
    width: "90%"
  },

  descricao: {
    width: "90%",
    fontSize: 16,
    textAlign: "left",
    color: "#fff",
    backgroundColor: "#05810b",
    padding: 10,
    borderRadius: 10,
    marginTop: 5,
    margin: "auto"
  },

  informacoes: {
    width: 470,
    height: 320,
    backgroundColor: "#31ac00",
    padding: 10,
    borderRadius: 6,
    marginTop: 5,
    margin: "auto",
    boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.23)",
  },

  duracao: {
    fontSize: 16,
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
    width: 110,
    padding: 8,
    borderRadius: 10,
    backgroundColor: "#05810b",
  },

  avaliacao: {
    paddingVertical: 9.5,
    fontSize: 16,
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
    backgroundColor: "#05810b",
    width: 150,
    padding: 9,
    borderRadius: 10,
  },

  classificacao: {
    width: 40,
    height: 40,
    marginHorizontal: 10,
    marginTop: 10,
  },

  botao: {
    width: "100%",
    marginHorizontal: 20,
    marginTop: 15,
    backgroundColor: "#e0e0e0",
    color: "#1d1d1d",
    padding: 10,
    borderRadius: 6,
    textAlign: "center",
    fontWeight: "bold",
  },

  botaoContainer: {
    margin: "auto",
  },

  botao2: {
    width: 80,
    backgroundColor: "#00a316",
    padding: 12,
    borderRadius: 20,
    textAlign: "center",
    fontWeight: "bold",
    color: "#f7f7f7"
  },

});    