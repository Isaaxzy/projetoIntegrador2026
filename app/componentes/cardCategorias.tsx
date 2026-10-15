import { Link } from 'expo-router';
import {View, StyleSheet, FlatList, Text, Touchable, TouchableOpacity, Image, ImageBackground} from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function renderCategoria({ item } : {item:any}) {
  const id = useLocalSearchParams();
  console.log(id);
  return (
    <View>
    <View style={styles.titulo2}>
      </View>
      <FlatList
      data={item.filmes}
      keyExtractor={filme => filme.id}
      horizontal={true}
      // showsHorizontalScrollIndicator = {false}
      // contentContainerStyle={{ paddingBottom: 40 }}
      renderItem={({ item }) => (
        <Link href={`../../componentes/filmes/${item.id}`}>
       <TouchableOpacity style={styles.bott}>    
          <View style={styles.filme}>
            <ImageBackground 
            source={{uri:item.Imagem}}
            style={styles.imagem}
            />
              <Text style={styles.filmeTitulo}>{item.titulo}
              </Text>
              <View style={{flexDirection: "row", flex: 1}}>
              <Text style={styles.filmedescricao}>{item.duracao}</Text>
              <Text style={styles.filmedescricao}>{item.dificuldade}</Text>
              </View>
              <Text style={styles.info}>{item.info}</Text>
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
    backgroundColor: '#c04949',
    flex: 1,
  },
 
  cont1:{
    fontSize: 30,
    color:'#ffff',
    margin: 20,
  },
 
  bott:{

  },

  info:{
    flex: 1,
    color: "#5a5a5a",
    padding: 5
  },

  imagem: {
    width: 154,
    height: 110,
    borderRadius: 6,
    margin: 5

  },

  titulo:{
    width: 180,
    color:'#ffff',
    fontSize: 22,
    fontFamily:'Arial',
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#444444",
    textAlign: "center",
    margin: 6,
  },
  filme:{
    width: 175,
    height: 220,
    backgroundColor: '#fafafa',
    margin: 7,
    borderRadius: 10,
    justifyContent: 'flex-end',
    padding: 5,
  },
  filmeTitulo:{
    color: '#0f0f0f',
    fontSize: 20,
    padding: 3, 

  },
  filmedescricao: {
    padding: 2,
    color: "#6d6d6d"
  },
       
});

