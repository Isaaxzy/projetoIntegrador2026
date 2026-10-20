import { View, StyleSheet, FlatList, Text, Touchable, TouchableOpacity, Image, ImageBackground, ScrollView, Pressable } from 'react-native';
import DadosDosFilmes from '../coisas';
import { Link, useLocalSearchParams } from 'expo-router';
import { useState } from 'react';

const itensIniciais = ['♡ Favoritar', '✓ Já fiz essa receita'];

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
     const [itensMarcados, setItensMarcados] = useState<boolean[]>(
                itensIniciais.map(() => false),
            );
         
            function alternarItem(index: number) {
                // Cria um novo array e inverte somente o item que foi pressionado.
                setItensMarcados((marcados) =>
                    marcados.map((marcado, itemIndex) =>
                        itemIndex === index ? !marcado : marcado,
                    ),
                );
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
          <View style={{}}>
          <Text style={styles.texto1}>Por que recomendamos esta receita?</Text>
          <Text style={styles.texto2}>Você prefere receitas de até 30 minutos, gosta de receitas fácil, combina com seu tipo de alimentação.</Text>
         </View>
        </View>
          <View style={{flexDirection: "row", gap: 15, padding: 8, margin: "auto"}}>
            {itensIniciais.map((item, index) => (
              <Pressable
              key={item}
              style={styles.linha}
              onPress={() => alternarItem(index)}
                                >                       
                    {/* A cor e o simbolo aparecem apenas quando a tarefa esta marcada. */}
                    <View style={[styles.checkbox, itensMarcados[index] && styles.marcado]}>
                        {itensMarcados[index]}<Text style={[styles.item, itensMarcados[index] && styles.concluido]}>{item}</Text>
                    </View>
                    {/* Tarefas concluidas ficam visualmente riscadas e mais discretas. */}
                                
                      </Pressable>
                                ))}
          
        </View>
      </View>
        <View style={styles.informacoes2}>
             <Text style={styles.titulo}>Ingredientes</Text>
             <View style={{ width: "90%", marginLeft: 18, justifyContent: "space-between", flexDirection: "row"}}>
              <Text style={styles.ingre}>Quinoa</Text>
              <Text style={styles.ingre}>1 xícara</Text>
          </View>
          <Text style={{marginLeft: 18, color: "#66666673"}}>───────────────────────────────────</Text>
             <View style={{ width: "90%", marginLeft: 18, justifyContent: "space-between", flexDirection: "row"}}>
              <Text style={styles.ingre}>Grão-de-bico</Text>
              <Text style={styles.ingre}>1 lata</Text>
          </View>
          <Text style={{marginLeft: 18, color: "#66666673"}}>───────────────────────────────────</Text>
             <View style={{ width: "90%", marginLeft: 18, justifyContent: "space-between", flexDirection: "row"}}>
              <Text style={styles.ingre}>Abacate</Text>
              <Text style={styles.ingre}>1 unidade</Text>
          </View>
          <Text style={{marginLeft: 18, color: "#66666673",}}>───────────────────────────────────</Text>
             <View style={{ width: "90%", marginLeft: 18, justifyContent: "space-between", flexDirection: "row"}}>
              <Text style={styles.ingre}>Tomate</Text>
              <Text style={styles.ingre}>1 unidade</Text>
          </View>
          <Text style={{marginLeft: 18, color: "#66666673"}}>───────────────────────────────────</Text>
             <View style={{ width: "90%", marginLeft: 18, justifyContent: "space-between", flexDirection: "row"}}>
              <Text style={styles.ingre}>Limão</Text>
              <Text style={styles.ingre}>1 unidade</Text>
          </View>
          <Text style={{marginLeft: 18, color: "#66666673"}}>───────────────────────────────────</Text>
             <View style={{ width: "90%", marginLeft: 18, justifyContent: "space-between", flexDirection: "row"}}>
              <Text style={styles.ingre}>Azeite</Text>
              <Text style={styles.ingre}>2 colheres</Text>
          </View>
        </View>
        <View style={styles.informacoes3}>
          <Text style={styles.titulo}>Modo de Preparo</Text>
            <View style={{ width: "90%", marginLeft: 18, flexDirection: "row", alignItems: "center"}}>
              <Text style={styles.ingre1}>1</Text>
              <Text>Cozinhe a quinoa em água com sal.</Text>
          </View>
          <View style={{ width: "90%", marginLeft: 18, flexDirection: "row", alignItems: "center"}}>
              <Text style={styles.ingre1}>2</Text>
              <Text>Misture o grão-de-bico e o tomate picado.</Text>
          </View>
          <View style={{ width: "90%", marginLeft: 18, flexDirection: "row", alignItems: "center"}}>
              <Text style={styles.ingre1}>3</Text>
              <Text>Finalize com abacate e molho de limão.</Text>
          </View>
        </View>
      </View>
      
      </ScrollView>
      <Link rel="stylesheet" href="../../(tabs)/paginaInicial" style={{position: "fixed", borderRadius: 20, boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.23)", padding: 12, paddingHorizontal: 15.2, backgroundColor: "#ffffff", margin: 17, marginTop: 30, cursor: "pointer"}}>
      <TouchableOpacity>
      <Text>←</Text>
     </TouchableOpacity>
     </Link>
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

  container2: {
    marginTop: 15,
    backgroundColor: "#ffffff",
    width: 440,
    borderRadius: 20,
    margin: "auto",
  },

  ingre: {
    color: "#666666",
    marginTop: 3
  },

  ingre1: {
    backgroundColor: "#039116",
    padding: 8,
    margin: 8,
    borderRadius: 20,
    color: "#ffffff",
    paddingHorizontal: 14

  },

  informacoes2: {
    width: 400,
    backgroundColor: "#ffffff",
    padding: 10,
    borderRadius: 20,
    marginTop: 22,
    margin: "auto",
    boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.23)",
  },

  informacoes3: {
    width: 400,
    backgroundColor: "#ffffff",
    padding: 10,
    borderRadius: 20,
    marginTop: 22,
    margin: "auto",
    boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.23)",
    marginBottom: 20
  },

  image2: {
    width: 25,
    height: 25,
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
    flexDirection: "row",
    gap: 7
  },

  texto1: {
    fontWeight: "bold",
    fontSize: 15,
    color: "#00a316",
    marginBottom: 3
  },

  texto2: {
    fontSize: 13,
    marginBottom: 3,
    textAlign: "justify",
    width: "40%"
  },

  titulo: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "left",
    marginTop: 10,
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
    paddingVertical: 18,
  },

  avaliacao: {
    paddingVertical: 18,
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

item: {
  fontSize: 15,
},

concluido: {
  color: '#ffffff',
},

marcado: {
  backgroundColor: "#078523",
  borderColor: "#078523",
  boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.8) inset",
},

checkbox: {
  padding: 12,
  paddingHorizontal: 25,
  boxShadow: "0px 1px 6px rgba(0, 0, 0, 0.07)",
  borderRadius: 25,
  textAlign: "center"
},

});    