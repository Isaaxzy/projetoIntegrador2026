import { View, StyleSheet, Text, TouchableOpacity, Image, ScrollView, Pressable, Alert } from 'react-native';
import DadosDosFilmes, { type Receita } from '../coisas';
import { Link, useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { adicionarFavorito, listarFavoritos, removerFavorito } from '../../servicos/favoritos';

const itensIniciais = ['Favoritar', '✓ Já fiz essa receita'];

export default function Filme() {
  const { id, origem } = useLocalSearchParams<{ id: string; origem?: string }>();
  const destinoVoltar = origem === 'favorito'
    ? '../../layout/favorito'
    : '../../layout/paginaInicial';
    
  const categorias = DadosDosFilmes();
  const item: Receita | undefined = categorias
    .flatMap(categoria => categoria.filmes)
    .find(f => f.id === id);
  const [itensMarcados, setItensMarcados] = useState<boolean[]>(
    itensIniciais.map(() => false),
  );
  const [favorito, setFavorito] = useState(false);
  const [salvandoFavorito, setSalvandoFavorito] = useState(false);

  useEffect(() => {
    let ativo = true;

    async function verificarFavorito() {
      try {
        const favoritos = await listarFavoritos();
        if (ativo) {
          setFavorito(favoritos.some(receita => receita.id === item?.id));
        }
      } catch (error) {
        console.error('Não foi possível verificar os favoritos.', error);
        Alert.alert('Erro', 'Não foi possível carregar o estado dos favoritos.');
      }
    }

    void verificarFavorito();
    return () => {
      ativo = false;
    };
  }, [item?.id]);

  function alternarItem(index: number) {
    setItensMarcados((marcados) =>
      marcados.map((marcado, itemIndex) =>
        itemIndex === index ? !marcado : marcado,
      ),
    );
  }

  async function alternarFavorito() {
    if (!item || salvandoFavorito) {
      return;
    }

    setSalvandoFavorito(true);
    try {
      if (favorito) {
        await removerFavorito(item.id);
        setFavorito(false);
      } else {
        await adicionarFavorito({
          id: item.id,
          nome: item.titulo,
          tempo: item.duracao,
          dificuldade: item.dificuldade,
          ingredientes: item.ingredientes
            .map(ingrediente => `${ingrediente.nome} (${ingrediente.unidade})`)
            .join(', '),
          imagemUrl: item.Imagem,
        });
        setFavorito(true);
      }
    } catch (error) {
      console.error('Não foi possível atualizar os favoritos.', error);
      Alert.alert('Erro', 'Não foi possível atualizar seus favoritos. Tente novamente.');
    } finally {
      setSalvandoFavorito(false);
    }
  }

  if (!item) {
    return <Text>Receita não encontrada.</Text>;
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
            {itensIniciais.map((texto, index) => (
              <Pressable
              key={texto}
              style={styles.linha}
              onPress={() => index === 0 ? void alternarFavorito() : alternarItem(index)}
              disabled={index === 0 && salvandoFavorito}
              accessibilityRole="button"
              accessibilityState={{ selected: index === 0 ? favorito : itensMarcados[index] }}
              >
                <View style={[
                  styles.checkbox,
                  (index === 0 ? favorito : itensMarcados[index]) && styles.marcado,
                ]}>
                  <Text style={[
                    styles.item,
                    (index === 0 ? favorito : itensMarcados[index]) && styles.concluido,
                  ]}>
                    {index === 0
                      ? (favorito ? '♥ Favoritado' : '♡ Favoritar')
                      : itensMarcados[index] ? '✓ Já fiz' : texto}
                  </Text>
                </View>
              </Pressable>
            ))}
          
        </View>
      </View>
        <View style={styles.informacoes2}>
             <Text style={styles.titulo}>Ingredientes</Text>
             {item.ingredientes.map((ingrediente, index) => (
               <View key={ingrediente.nome}>
                 <View style={{ width: "90%", marginLeft: 18, justifyContent: "space-between", flexDirection: "row"}}>
                   <Text style={styles.ingre}>{ingrediente.nome}</Text>
                   <Text style={styles.ingre}>{ingrediente.unidade}</Text>
                 </View>
                 {index < item.ingredientes.length - 1 && <View style={styles.divider} />}
               </View>
             ))}
        </View>
        <View style={styles.informacoes3}>
          <Text style={styles.titulo}>Modo de Preparo</Text>
          {item.modoDePreparo.map((passo, index) => (
            <View key={`${index}-${passo}`} style={{ width: "90%", marginLeft: 18, flexDirection: "row", alignItems: "center"}}>
              <Text style={styles.ingre1}>{index + 1}</Text>
              <Text>{passo}</Text>
            </View>
          ))}
        </View>
      </View>
      
      </ScrollView>
      <Link href={destinoVoltar} style={styles.botaoVoltar}>
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
    backgroundColor: "#f4f8f4",
  },
  container: {
    marginTop: 15,
    backgroundColor: "#ffffff",
    width: "100%",
    maxWidth: 720,
    borderRadius: 18,
    alignSelf: "center",
    paddingHorizontal: 12,
    paddingBottom: 20,
  },

  container2: {
    marginTop: 15,
    backgroundColor: "#ffffff",
    width: "100%",
    maxWidth: 720,
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
    width: "100%",
    backgroundColor: "#ffffff",
    padding: 10,
    borderRadius: 20,
    marginTop: 22,
    margin: "auto",
    boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.23)",
  },

  informacoes3: {
    width: "100%",
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
    borderTopEndRadius: 18,
    borderTopLeftRadius: 18,
  },

  reco: {
    margin: "auto",
    width: "100%",
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
    flex: 1,
  },

  titulo: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "left",
    marginTop: 10,
    color: "#080808",
    margin: "auto",
    marginBottom: 6,
    width: "100%"
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
    width: "100%",
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
    flex: 1,
    minWidth: 96,
    padding: 3,
    borderRadius: 10,
    paddingVertical: 18,
  },

  avaliacao: {
    paddingVertical: 18,
    fontSize: 15,
    textAlign: "center",
    color: "#080808",
    flex: 1,
    minWidth: 96,
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
  backgroundColor: "#168A3A",
  borderColor: "#168A3A",
  boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.8) inset",
},

checkbox: {
  padding: 12,
  paddingHorizontal: 16,
  boxShadow: "0px 1px 6px rgba(0, 0, 0, 0.07)",
  borderRadius: 25,
  textAlign: "center"
},

linha: {
flexDirection: "row",
flexWrap: "wrap",
gap: 12,
justifyContent: "center",
},

divider: {
  height: 1,
  marginLeft: 18,
  marginRight: 8,
  backgroundColor: "#e5ebe6",
},

botaoVoltar: {
  position: "absolute",
  left: 16,
  bottom: 16,
  borderRadius: 20,
  padding: 12,
  paddingHorizontal: 16,
  backgroundColor: "#fff",
  boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.16)",
},

});