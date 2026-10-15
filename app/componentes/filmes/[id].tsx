import { View, StyleSheet, FlatList, Text, Touchable, TouchableOpacity, Image, ImageBackground, ScrollView } from 'react-native';
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
      <ScrollView>
      <View style={styles.container}>
      <Image
        source={{ uri: item.Imagem }}
        style={styles.imagem}>
      </Image>
      <View style={styles.informacoes}>
        <Text style={styles.titulo}>{item.titulo}</Text>
        <Text style={styles.descricao}>{item.descrição}</Text>
        <View style={{flexDirection: "row",}}>
        <Text style={styles.duracao}>{item.duracao}</Text>
        <Text style={styles.duracao}>{item.dificuldade}</Text>
        <Text style={styles.avaliacao}>👥 2 Porções</Text>
        </View>
        <View style={styles.reco}>
          <Image source={require("../../imagens/repowise-icon.png")} style={styles.image2}>
          </Image>
          <Text style={styles.texto1}>Por que recomendamos esta receita?</Text>
          <Text style={styles.texto2}>Você prefere receitas de até 30 minutos, gosta de receitas fácil, combina com seu tipo de alimentação</Text>
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
      </ScrollView>
    </View>
    
  );
}

const styles = StyleSheet.create({

  fundo: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  container: {
    marginTop: 15,
    backgroundColor: "#ffffff",
    width: 440,
    borderRadius: 20,
    margin: "auto",
  },

  image2: {
    width: 30,
    height: 30,
  },

  imagem: {
    width: "100%",
    height: 320,
    borderTopEndRadius: 20,
    borderTopLeftRadius: 20,
  },

  reco: {
    margin: "auto",
    width: "85%",
    backgroundColor: "#b1e7a036",
    padding: 15,
    borderWidth: 2,
    borderColor: "#00a316",
    borderRadius: 20,
    flexDirection: "row"
  },

  texto1: {
    fontWeight: "bold",
    fontSize: 15,
    color: "#00a316",
    marginBottom: 3
  },

  titulo: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "left",
    marginTop: 12,
    color: "#080808",
    margin: "auto",
    marginBottom: 6,
    width: "90%"
  },

  descricao: {
    width: "90%",
    fontSize: 16,
    textAlign: "left",
    color: "#666666",
    marginBottom: 10,
    borderRadius: 10,
    marginTop: 5,
    margin: "auto"
  },

  informacoes: {
    width: 400,
    height: 320,
    backgroundColor: "#ffffff",
    padding: 10,
    borderRadius: 20,
    marginTop: -30,
    margin: "auto",
    boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.23)",
  },

  duracao: {
    fontSize: 15,
    textAlign: "center",
    color: "#080808",
    width: 110,
    padding: 3,
    borderRadius: 10,
    paddingVertical: 9,
  },

  avaliacao: {
    paddingVertical: 9,
    fontSize: 15,
    textAlign: "center",
    color: "#080808",
    width: 110,
    padding: 3,
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