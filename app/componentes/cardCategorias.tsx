import { Link } from 'expo-router';
import { View, StyleSheet, FlatList, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import type { Receita } from './coisas';
import { receitaCombinaComUsuario } from './preferencias';

interface EstadoRetorno {
  ingredientes: string;
  textoIngredientes: string;
  categoria: string;
}

interface CategoriaReceitas {
  id: string;
  filmes: Receita[];
}

export default function renderCategoria({
  item,
  returnState,
  alimentosPreferidos = [],
  alimentosEvitados = [],
  alergias = [],
  restricoesAlimentares = [],
}: {
  item: CategoriaReceitas;
  returnState?: EstadoRetorno;
  alimentosPreferidos?: string[];
  alimentosEvitados?: string[];
  alergias?: string[];
  restricoesAlimentares?: string[];
}) {
  return (
    <View>
      <FlatList
      data={item.filmes}
      keyExtractor={filme => filme.id}
      horizontal={true}
      // showsHorizontalScrollIndicator = {false}
      // contentContainerStyle={{ paddingBottom: 40 }}
      renderItem={({ item }) => (
        <Link
          href={returnState
            ? {
                pathname: '/componentes/filmes/[id]',
                params: {
                  id: item.id,
                  origem: 'pesquisa',
                  ingredientes: returnState.ingredientes,
                  textoIngredientes: returnState.textoIngredientes,
                  categoria: returnState.categoria,
                },
              }
            : `../../componentes/filmes/${item.id}`}
        >
       <TouchableOpacity style={styles.bott}>    
          <View style={styles.filme}>
            <View>
            <ImageBackground
            source={{uri:item.Imagem}}
            style={styles.imagem}
            >
             {receitaCombinaComUsuario(
               item.ingredientes.map((ingrediente) => ingrediente.nome),
               alimentosPreferidos,
               alimentosEvitados,
               alergias,
               restricoesAlimentares,
               item.condicoes,
             ) && (
               <Text style={styles.seloRecomendacao}>☆ Combina com você</Text>
             )}
            </ImageBackground>
              <Text style={styles.filmeTitulo} numberOfLines={2} ellipsizeMode="tail">
                {item.titulo}
              </Text>
              <View style={styles.detalhesReceita}>
              <View style={styles.tempoReceita}>
                <Ionicons name="time-outline" size={14} color="#6d6d6d" />
                <Text style={styles.filmedescricao} numberOfLines={1} ellipsizeMode="tail">{item.duracao}</Text>
              </View>
              <Text style={styles.filmedescricao} numberOfLines={1} ellipsizeMode="tail">{item.dificuldade}</Text>
              </View>
              <Text style={styles.info} numberOfLines={2} ellipsizeMode="tail">{item.info}</Text>
              </View>
           </View>
           </TouchableOpacity>
        </Link>
      )}
      />
   
    </View>
       
    )
}
 
const styles = StyleSheet.create({
 
    backcolor:{
    backgroundColor: '#f4f8f4',
    flex: 1,
  },
 
  cont1:{
    fontSize: 30,
    color:'#ffff',
    margin: 20,
  },
 
  bott:{

  },

  imagem: {
    width: 154,
    height: 110,
    borderRadius: 6,
    margin: 5,
  },

  seloRecomendacao: {
    width: "70%",
    alignSelf: "flex-end",
    textAlign: "center",
    padding: 5,
    fontSize: 10,
    backgroundColor: "#168A3Ab0",
    margin: 7,
    borderRadius: 20,
    color: "#ffffff",
  },

  titulo:{
    width: 180,
    color:'#ffff',
    fontSize: 22,
    fontFamily:'Arial',
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#168A3A",
    textAlign: "center",
    margin: 6,
  },
  filme:{
    width: 175,
    height: 260,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#e1e9e2',
    margin: 7,
    borderRadius: 10,
    justifyContent: 'flex-start',
    padding: 5,
  },
  filmeTitulo:{
    color: '#0f0f0f',
    fontSize: 20,
    padding: 3, 
    height: 52,
    lineHeight: 22,

  },
  detalhesReceita: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tempoReceita: {
    flex: 1,
    minWidth: 0,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
  },
  filmedescricao: {
    flex: 1,
    minWidth: 0,
    padding: 2,
    color: "#6d6d6d"
  },
  info: {
    color: "#5a5a5a",
    padding: 5,
    height: 42,
    lineHeight: 18,
  },
       
});
