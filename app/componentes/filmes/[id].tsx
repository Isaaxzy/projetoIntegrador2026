import { View, StyleSheet, Text, Image, ScrollView, Pressable, Alert } from 'react-native';
import DadosDosFilmes, { type Receita } from '../coisas';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { adicionarFavorito, listarFavoritos, removerFavorito } from '../../servicos/favoritos';
import Carregamento from '../../../components/Carregamento';
import { Ionicons } from '@expo/vector-icons';
import { lerIndicesSalvos, lerTextoSalvo } from '../introStorage';
import {
  encontrarAlimentosPreferidos,
  opcoesAlergias,
  opcoesAlimentosEvitados,
  opcoesAlimentosPreferidos,
  opcoesRestricoesAlimentares,
  receitaCombinaComUsuario,
} from '../preferencias';

const itensIniciais = ['Favoritar', '✓ Já fiz essa receita'];
const opcoesTempo = ['Até 15 min', 'Até 30 min', 'Até 45min', 'Até 1 hora', 'Até 1h30', '2 horas ou mais'];

function formatarLista(itens: string[]): string {
  if (itens.length < 2) {
    return itens[0] ?? '';
  }

  return `${itens.slice(0, -1).join(', ')} e ${itens[itens.length - 1]}`;
}

export default function Filme() {
  const router = useRouter();

  const {
    id,
    origem,
    ingredientes,
    textoIngredientes,
    categoria,
  } = useLocalSearchParams<{
    id: string;
    origem?: string;
    ingredientes?: string;
    textoIngredientes?: string;
    categoria?: string;
  }>();
    
  const categorias = DadosDosFilmes();
  const item: Receita | undefined = categorias
    .flatMap(categoria => categoria.filmes)
    .find(f => f.id === id);
  const itemId = item?.id;
  const [itensMarcados, setItensMarcados] = useState<boolean[]>(
    itensIniciais.map(() => false),
  );
  const [favorito, setFavorito] = useState(false);
  const [salvandoFavorito, setSalvandoFavorito] = useState(false);
  const [carregandoFavorito, setCarregandoFavorito] = useState(true);
  const [temposPreferidos, setTemposPreferidos] = useState<string[]>([]);
  const [alimentosPreferidos, setAlimentosPreferidos] = useState<string[]>([]);
  const [alimentosEvitados, setAlimentosEvitados] = useState<string[]>([]);
  const [alergias, setAlergias] = useState<string[]>([]);
  const [restricoesAlimentares, setRestricoesAlimentares] = useState<string[]>([]);

  useEffect(() => {
    const temposSalvos = lerIndicesSalvos('Tempo', opcoesTempo.length);
    const alimentosSalvos = lerIndicesSalvos('Gostos', opcoesAlimentosPreferidos.length);
    const alimentosEvitadosSalvos = lerIndicesSalvos('Desgostos', opcoesAlimentosEvitados.length);
    const alergiasSalvas = lerIndicesSalvos('Alergias', opcoesAlergias.length);
    const alergiasPersonalizadas = lerTextoSalvo('OutrosA')
      .split(/[,;\n]+/)
      .map((alergia) => alergia.trim())
      .filter(Boolean);
    const restricoesSalvas = lerIndicesSalvos(
      'Alimentacao',
      opcoesRestricoesAlimentares.length,
    );
    setTemposPreferidos(temposSalvos.map((index) => opcoesTempo[index]));
    setAlimentosPreferidos(alimentosSalvos.map((index) => opcoesAlimentosPreferidos[index]));
    setAlimentosEvitados(alimentosEvitadosSalvos.map((index) => opcoesAlimentosEvitados[index]));
    setAlergias([
      ...alergiasSalvas.map((index) => opcoesAlergias[index]),
      ...alergiasPersonalizadas,
    ]);
    setRestricoesAlimentares(
      restricoesSalvas
        .filter((index) => index !== 0)
        .map((index) => opcoesRestricoesAlimentares[index]),
    );
  }, []);

  useEffect(() => {
    let ativo = true;

    if (!itemId) {
      setCarregandoFavorito(false);
      return () => {
        ativo = false;
      };
    }

    setCarregandoFavorito(true);
    async function verificarFavorito() {
      try {
        const favoritos = await listarFavoritos();
        if (ativo) {
          setFavorito(favoritos.some(receita => receita.id === itemId));
        }
      } catch (error) {
        if (ativo) {
          console.error('Não foi possível verificar os favoritos.', error);
          Alert.alert('Erro', 'Não foi possível carregar o estado dos favoritos.');
        }
      } finally {
        if (ativo) {
          setCarregandoFavorito(false);
        }
      }
    }

    void verificarFavorito();
    return () => {
      ativo = false;
    };
  }, [itemId]);

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

  const alimentosCorrespondentes = encontrarAlimentosPreferidos(
    item.ingredientes.map(({ nome }) => nome),
    alimentosPreferidos,
  );
  const combinaComUsuario = receitaCombinaComUsuario(
    item.ingredientes.map(({ nome }) => nome),
    alimentosPreferidos,
    alimentosEvitados,
    alergias,
    restricoesAlimentares,
    item.condicoes,
  );
  const motivosRecomendacao: string[] = [];

  if (alimentosCorrespondentes.length > 0 && combinaComUsuario) {
    motivosRecomendacao.push(
      `Você gosta de ${formatarLista(alimentosCorrespondentes.map((alimento) => alimento.toLocaleLowerCase('pt-BR')))}.`,
    );
  }

  if (temposPreferidos.length > 0) {
    motivosRecomendacao.push(
      `Você tem tempo de, ${formatarLista(temposPreferidos.map((tempo) => tempo.toLocaleLowerCase('pt-BR')))}.`,
    );
  }

  const textoRecomendacao = motivosRecomendacao.length > 0
    ? motivosRecomendacao.join(' ')
    : combinaComUsuario
      ? 'Esta receita pode ser uma boa opção para você.'
      : 'Esta receita não corresponde a algum gosto ou restrição alimentar informada.';

  function voltar() {
    if (origem === 'pesquisa') {
      router.replace({
        pathname: '/layout/paginaInicial',
        params: {
          restaurarPesquisa: '1',
          ingredientes: ingredientes ?? '',
          textoIngredientes: textoIngredientes ?? '',
          categoria: categoria ?? '⭐ Todas',
        },
      });
      return;
    }

    if (router.canGoBack()) {
      router.back();
      return;
    }

    router.replace(origem === 'favorito' ? '/layout/favorito' : '/layout/paginaInicial');
  }

  return (
    
    <View style={styles.fundo}>
      <Carregamento
        visivel={carregandoFavorito || salvandoFavorito}
        mensagem={salvandoFavorito ? "Salvando favorito..." : "Carregando receita..."}
      />
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
        <Text style={styles.duracao}>🕐 {item.duracao}</Text>
        <Text style={styles.duracao}>{item.dificuldade}</Text>
        <Text style={styles.avaliacao}>👥 2 Porções</Text>
        </View>
        <View style={styles.reco}>
          <Image source={require("../../imagens/repowise-icon.png")} style={styles.image2}>
          </Image>
          <View style={{width: "90%"}}>
          <Text style={styles.texto1}>Por que recomendamos esta receita?</Text>
          <Text style={styles.texto2}>{textoRecomendacao}</Text>
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
                  index === 0 && favorito && styles.marcado,
                  index !== 0 && itensMarcados[index] && styles.feito,
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
      <Pressable
        accessibilityRole="button"
        accessibilityLabel="Voltar para a tela anterior"
        onPress={voltar}
        style={styles.botaoVoltar}
      >
        <Text style={styles.setaVoltar}>←</Text>
      </Pressable>
        <Pressable
            accessibilityRole="button"
            accessibilityLabel="Abrir chat de ajuda com receitas"
            onPress={() => router.push('/layout/chat')}
            style={styles.botaoChat}
        >
            <Ionicons name="chatbubble-ellipses" size={27} color="#ffffff" />
        </Pressable>
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

    botaoChat:{
    position: "absolute",
    right: 20,
    bottom: 10,
    width: 58,
    height: 58,
    borderRadius: 29,
    backgroundColor: "#168A3A",
    alignItems: "center",
    justifyContent: "center",
    elevation: 6,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
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
    marginTop: 8
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
    width: "96%",
    backgroundColor: "#ffffff",
    padding: 10,
    borderRadius: 20,
    marginTop: 22,
    margin: "auto",
    boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.23)",
  },

  informacoes3: {
    width: "96%",
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
    gap: 7,
  },

  texto1: {
    fontWeight: "bold",
    fontSize: 15,
    color: "#00a316",
    marginBottom: 3,
  },

  texto2: {
    fontSize: 13,
    marginBottom: 3,
    textAlign: "justify",
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
    width: "96%",
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
  color: '#f5f5f5',
},

marcado: {
  backgroundColor: "#eb3c25",
  borderColor: "#168A3A",
  boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.8) inset",
},

feito: {
  backgroundColor: "#168A3A",
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
  backgroundColor: "#168A3A",     
  boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.16)",
},

setaVoltar: {
  color: "#fff",
},

});