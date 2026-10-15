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
  const filme: Filmeprops = {
    ...filmeEncontrado,
  }
  return (
    <View style={styles.fundo}>
        <View style={styles.capa}>
      <ImageBackground
        source={{ uri: filme.Imagem }}
        style={styles.imagem}>
        <Image style={styles.play}
        />
        <Image source={{ uri: filme.classificacao }} style={styles.classificacao}
        />
      </ImageBackground>
      </View>
      <View style={styles.informacoes}>
        <Text style={styles.titulo}>{filme.titulo}</Text>
        <Text style={styles.descricao}>{filme.descrição}</Text>
        <Text style={styles.duracao}>2h 15min</Text>
        <Text style={styles.duracao}>Gênero: Drama, História, Biografia</Text>
        <Text style={styles.duracao}>Diretor: Christopher Nolan</Text>
        <Text style={styles.avaliacao}>Avaliação: 8.5/10</Text>
        <Text></Text>
      </View>
      <View style={styles.botaoContainer}>
        <Link href="https://youtu.be/oHg5SJYRHA0?si=upSeTCosjOo_Q9u4">
          <TouchableOpacity>
            <Text style={styles.botao}>+ Adicionar à Lista</Text>
          </TouchableOpacity>
        </Link>
        <TouchableOpacity>
          <Text style={styles.botao}>▶ Assistir Trailer</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.botao}>★ Avaliar</Text>
        </TouchableOpacity>
        <Link href="../../(tabs)index">
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
    backgroundColor: "#d11313",
  },

  capa: {
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 15,
  },

  imagem: {
    width: 250,
    height: 400,
    borderRadius: 10,
  },

  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "left",
    marginTop: 12,
    color: "#fff",
    marginHorizontal: 20,
  },

  descricao: {
    fontSize: 16,
    textAlign: "left",
    marginHorizontal: 20,
    color: "#fff",
    backgroundColor: "#757575",
    padding: 10,
    borderRadius: 6,
    marginTop: 5,
  },

  informacoes: {
    backgroundColor: "#757575",
    padding: 10,
    borderRadius: 6,
    marginTop: 16,
    marginHorizontal: 20,
  },

  play: {
    width: 100,
    height: 100,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -50 }, { translateY: -50 }],
    cursor: "pointer",
  },

  duracao: {
    fontSize: 16,
    textAlign: "left",
    marginHorizontal: 20,
    color: "#fff",
    marginTop: 5,
    fontWeight: "bold",
  },

  avaliacao: {
    fontSize: 16,
    textAlign: "left",
    marginHorizontal: 20,
    color: "#fff",
    marginTop: 5,
    fontWeight: "bold",
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
    width: "100%",
    flexDirection: "row",
    gap: 15,
    justifyContent:'space-between'
  },

  botao2: {
    width: "50%",
    marginHorizontal: 20,
    marginTop: 15,
    backgroundColor: "#e0e0e0",
    color: "#1d1d1d",
    padding: 10,
    borderRadius: 20,
    textAlign: "center",
    fontWeight: "bold",
  },

});    