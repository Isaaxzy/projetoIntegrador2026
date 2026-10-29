import { Link } from 'expo-router';
import { useState } from 'react';
import {
View,
StyleSheet,
Text,
ImageBackground,
Image,
TouchableOpacity,
TextInput,
Pressable,
ScrollView 
} from 'react-native';

const itensIniciais = ['🌱 Iniciante', '🍳 Intermediário', '👩‍🍳 Avançado'];

const itensIniciais2 = [ { id: 1, label: '🍽️ Sem restrições' }, { id: 2, label: '🥕 Vegetariano' }, { id: 3, label: '🌱 Vegano' }, { id: 4, label: '🥗 Flexitariano' }, { id: 5, label: '🥑 Low crab' }, { id: 6, label: '✨ outra' } ];

const itensIniciais3 = ['🥛 Leite', '🥚 Ovo', '🥜 Amendoim', '🌰 Castanhas', '🫘 Soja', '🌾 Trigo', '🐟 Peixes', '🦐 Frutos do Mar'];

const itensIniciais4 = ['Cebola', 'Alho', 'Tomate', 'Peixe', 'Coentro', 'Pimentão', 'Brócolis', 'Cogumelo', 'Azeitona', 'Pimenta', 'Gengibre', 'Manjericão' ];

const itensIniciais5 = ['Frango', 'Carne', 'Batata', 'Queijo', 'Chocolate', 'Morango', 'Massas', 'Arroz', 'Ovo', 'Tomate', 'Cenoura', 'Abacate', 'Salmão', 'Limão', 'Milho', 'Feijão' ];

const itensIniciais6 = ['💫 Comer melhor', '⚡ Encontrar receitas práticas', '💰 Economizar', '🌈 Variar minha alimentação', '🎓 Aprender a cozinhar', '📅 Encontrar receitas para minha rotina', '✨ Outro'];

const itensIniciais7 = ['Até 10 min', 'Até 20 min', 'Até 30 min', 'Até 1 hora', 'Mais de 1 hora'];

const itensIniciais8 = ['Muito fácil', 'Fácil', 'Intermediária', 'Elaborada'];

    export default function App() {

   const [experienciaSelecionada, setExperienciaSelecionada] = useState<number | null>(null);

    const LIMITE_RESTRICOES = 3;
    const [restricoesSelecionadas, setRestricoesSelecionadas] = useState<number[]>([]);

    const [alergiasMarcadas, setAlergiasMarcadas] = useState<boolean[]>(
    itensIniciais3.map(() => false),
    );

    const [ingredientesEvitaMarcados, setIngredientesMarcados] = useState<boolean[]>(
    itensIniciais4.map(() => false),
    );

    const [ingredientesPrefereMarcados, setIngredientesPrefereMarcados] = useState<boolean[]>(
    itensIniciais5.map(() => false),
    );

    const LIMITE_RESTRICOES2 = 7;
    const [objetivosMarcados, setObjetivosMarcados] = useState<number[]>([]);


  const [tempoMarcados, setTempoMarcados] = useState<boolean[]>(
    itensIniciais7.map(() => false),
  )
 
    const [dificuldadeMarcados, setDificuldadeMarcados] = useState<number | null>(null);
    
    function alternarExperiencia(index: number) {
    setExperienciaSelecionada(index === experienciaSelecionada ? null : index);
    }

function alternarRestricao(id: number) {
  setRestricoesSelecionadas((selecionadas) => {
    if (selecionadas.includes(id)) {
      return selecionadas.filter((item) => item !== id);
    }

    if (id === 1) {
      return [1];
    }

    if (selecionadas.includes(1) || selecionadas.length >= LIMITE_RESTRICOES) {
      return selecionadas;
    }

    return [...selecionadas, id];
  });
}

    function alternarAlergia(index: number) {
    setAlergiasMarcadas((marcados) =>
    marcados.map((marcado, i) => (i === index ? !marcado : marcado)),
    );
    }

    function alternarIngrediente(index: number) {
    setIngredientesMarcados((marcados) =>
    marcados.map((marcado, i) => (i === index ? !marcado : marcado)),
    );
    }

    function alternarIngredientePrefere(index: number) {
    setIngredientesPrefereMarcados((marcados) =>
    marcados.map((marcado, i) => (i === index ? !marcado : marcado)),
    );
    }

      function alternarObjetivo(index: number) {
  setObjetivosMarcados((selecionadas) => {
    if (selecionadas.includes(index)) {
      return selecionadas.filter((item) => item !== index);
    }

    if (selecionadas.length >= LIMITE_RESTRICOES2) {
      return selecionadas;
    }

    return [...selecionadas, index];
  });
}

      function alternarTempo(index: number) {
    setTempoMarcados((marcados) =>
    marcados.map((marcado, i) => (i === index ? !marcado : marcado)),
    );
    }

       function alternarDificuldade(index: number) {
    setDificuldadeMarcados(index === dificuldadeMarcados ? null : index);
    }


    return (
    <View style={styles.fundo}>
    <View style={styles.container}>

<View style={styles.UPbar}>
            <Image
        style={styles.logo1}
        source={require("../imagens/2026_10_01_0mz_Kleki.png")}
        />
    <Text style={styles.Uptext}>Tempero de casa</Text>
    </View>

<Text style={styles.texto}>[Nome do usuario!]</Text>
<Text style={styles.subtexto}>Edite suas preferencias alimentares</Text>

<ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
<View style={styles.loginContainer}>
    <Text style={styles.title}>Sobre você</Text>

    <Text style={styles.label}>Nome</Text>
    <input style={styles.input} type='text' maxLength={35} placeholder="Seu nome" />
    
    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
        <Text style={styles.label}>Idade</Text>
    </View>

    <input style={styles.input} type="number" min="14" max="70" placeholder="14+"/>

    <Text style={styles.label}>Para quantas pessoas você costuma cozinhar?</Text>

    <input style={styles.input} type="number" min="1" max="15" placeholder="Número de pessoas" />
    
    <Text style={styles.label}>Nivel de experiência na cozinha</Text>
    <View style={{ flexDirection: "row",flexWrap: "wrap", gap: 12, marginTop: 10, width: "100%",}}>
    {itensIniciais.map((item, index) => (
    <TouchableOpacity
        key={item}
        onPress={() => alternarExperiencia(index)}
        style={[ styles.checkbox, experienciaSelecionada === index && styles.marcado,
        ]}
    >
        <Text style={[styles.item, experienciaSelecionada === index && styles.concluido]}>
        {item}
        </Text>
    </TouchableOpacity>
    ))}
</View>
    </View>
    <View style={styles.loginContainer}>
    
    <Text style={styles.pritext}>Restrições alimentares</Text>
    <View style={{flexDirection: "row",flexWrap: "wrap", gap: 12, marginTop: 10, width: "100%",}}>
        {itensIniciais2.map((item) => {
  const selecionada = restricoesSelecionadas.includes(item.id);
  const bloqueada =
    item.id !== 1 && restricoesSelecionadas.includes(1);

  return (
    <TouchableOpacity
      key={item.id}
      disabled={bloqueada}
      onPress={() => alternarRestricao(item.id)}
      style={[
        styles.checkbox,
        selecionada && styles.marcado,
        bloqueada && { opacity: 0.5 },
      ]}
    >
      <Text style={[styles.item, selecionada && styles.concluido]}>
        {item.label}
      </Text>
    </TouchableOpacity>
  );
})}
    </View>
    </View>
        
    <View style={styles.loginContainer}>

        <Text style={styles.pritext}>Alergias alimentares</Text>

    <View style={styles.aviso}>
    <View style={styles.icoav}>⚠️</View>
    <Text style={styles.teavs}><Text style={styles.bold}>Filtros de segurança </Text>receitas com estes ingredientes não serão recomendadas.
    </Text>
        </View>

        <View style={{flexDirection: "row",flexWrap: "wrap", gap: 12, marginTop: 10, width: "100%",}}>
    {itensIniciais3.map((item, index) => (
        <TouchableOpacity
            key={item}
            onPress={() => alternarAlergia(index)}
            style={[styles.checkbox, alergiasMarcadas[index] && styles.marcado,
            ]}>
            <Text style={[styles.item, alergiasMarcadas[index] && styles.concluido]}>
            {item}
            </Text>
        </TouchableOpacity>
        ))}
    </View>
</View>

        <View style={styles.loginContainer}>
        <Text style={styles.pritext}>Ingredientes que evita</Text>
        <View style={{flexDirection: "row",flexWrap: "wrap", gap: 12, marginTop: 10, width: "100%",}}>
             {itensIniciais4.map((item, index) => (
        <TouchableOpacity
            key={item}
            onPress={() => alternarIngrediente(index)}
            style={[styles.checkbox, ingredientesEvitaMarcados[index] && styles.marcado,
            ]}>
            <Text style={[styles.item, ingredientesEvitaMarcados[index] && styles.concluido]}>
            {item}
            </Text>
        </TouchableOpacity>
        ))}
        </View>
        </View>

        <View style={styles.loginContainer}>
        <Text style={styles.pritext}>Ingredientes que você ama</Text>
        <View style={{flexDirection: "row",flexWrap: "wrap", gap: 12, marginTop: 10, width: "100%",}}>
             {itensIniciais5.map((item, index) => (
        <TouchableOpacity
            key={item}
            onPress={() => alternarIngredientePrefere(index)}
            style={[styles.checkbox, ingredientesPrefereMarcados[index] && styles.marcado,
            ]}>
            <Text style={[styles.item, ingredientesPrefereMarcados[index] && styles.concluido]}>
            {item}
            </Text>
        </TouchableOpacity>
        ))}
        </View>
        </View>

        <View style={styles.loginContainer}>
        <Text style={styles.pritext}>Seus objetivos</Text>
        <View style={{flexDirection: "row",flexWrap: "wrap", gap: 12, marginTop: 10, width: "100%",}}>
             {itensIniciais6.map((item, index) => {
        const selecionada = objetivosMarcados.includes(index);

        return (
            <TouchableOpacity
            key={`${item}-${index}`}
            onPress={() => alternarObjetivo(index)}
            style={[styles.checkbox, selecionada && styles.marcado]}
            >
            <Text style={[styles.item, selecionada && styles.concluido]}>
                {item}
            </Text>
            </TouchableOpacity>
        );
        })}
        </View>
        </View>

        <View style={styles.loginContainer}>
        <View style={styles.rotinaContainer}>
            <Text style={styles.pritext}>Sua rotina</Text>
        </View>
        <Text style={styles.sobv}>Tempo disponivél para cozinhar</Text>
     <View style={{flexDirection: "row",flexWrap: "wrap", gap: 12, marginTop: 10, width: "100%",}}>
             {itensIniciais7.map((item, index) => (
        <TouchableOpacity
            key={item}
            onPress={() => alternarTempo(index)}
            style={[styles.checkbox, tempoMarcados[index] && styles.marcado,
            ]}>
            <Text style={[styles.item, tempoMarcados[index] && styles.concluido]}>
            {item}
            </Text>
        </TouchableOpacity>
        ))}
        </View>

        <View style={styles.bar}></View>
        <Text style={styles.sobv}>Dificuldade de cozinhar</Text>
             <View style={{ flexDirection: "row",flexWrap: "wrap", gap: 12, marginTop: 10, width: "100%",}}>
    {itensIniciais8.map((item, index) => (
    <TouchableOpacity
        key={item}
        onPress={() => alternarDificuldade(index)}
        style={[ styles.checkbox, dificuldadeMarcados === index && styles.marcado,
        ]}
    >
        <Text style={[styles.item, dificuldadeMarcados === index && styles.concluido]}>
        {item}
        </Text>
    </TouchableOpacity>
    ))}
</View>
        </View>

        <View style={styles.botbox}>
        <TouchableOpacity style={styles.ButtonRota}><Image
            style={styles.buttonIcon}
            source={require("../imagens/save.png")}
            /> <Text style={styles.buttonText}>Salvar todas as informações</Text></TouchableOpacity>
    </View>

    </ScrollView>

    <View style={styles.ops}>

        <View style={styles.foote}>
            <Link href={"./paginaInicial"} style={styles.loginButtonP}><TouchableOpacity>
            <Image
            style={styles.perf}
            source={require("../imagens/house.png")}
            /> 
            <Text style={styles.textButtonP}>Inicio</Text></TouchableOpacity></Link>
            </View>

            <View style={styles.foote}>

            <TouchableOpacity style={styles.loginButtonP}>
            <Image
            style={styles.perf}
            source={require("../imagens/agend.png")}
            /> 
            <Text style={styles.textButtonP}>Planejar</Text></TouchableOpacity>
            </View>

            <View style={styles.foote}>
        <Link href={"./favorito"} style={styles.loginButtonP}><TouchableOpacity style={styles.loginButtonP}>
            <Image
            style={styles.perf}
            source={require("../imagens/fav.png")}
            />
        <Text style={styles.textButtonP}>Favoritos</Text></TouchableOpacity></Link>

            </View>

            <View style={styles.foote}>
            <TouchableOpacity >
            <Image
            style={styles.perf}
            source={require("../imagens/perf.png")}
            />
            <Text style={styles.textButtonP}>Perfil</Text></TouchableOpacity>
                </View>

            </View>

</View>
</View> 
);
}

const styles = StyleSheet.create({

    bar:{
        marginTop: 15,
    },

    fundo: {
    flex: 1,
    backgroundColor: "rgb(248, 248, 248)"
    },

    aviso:{
    width: '95%',
    height: 100,
    backgroundColor: '#ffef96',
    paddingLeft: 10,
    paddingRight: 20,
    borderRadius: 10,
    borderWidth: 4,
    borderColor: '#ffdc19',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 15,
    },

    icoav:{
    width: 35,
    height: 90,
    marginInlineEnd: 'auto',
    fontSize: 30,
    },

    teavs:{
    width: '90%',
    fontSize: 18,
    textAlign: 'auto',
    },

    box2:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderWidth: 3,
    borderColor: 'transparent',
    boxShadow: "2px 5px 9px rgba(0, 0, 0, 0.2)",
    borderRadius: 10,
    padding: 10,
    gap: 10,
    marginTop: 20,
    marginBottom: 20,
    },

    logo: {
    width: 130,
    height: 187,
    },

    buttonIcon: {
    width: 30,
    height: 30,
    marginLeft: '10%',
    marginTop: -3,
    tintColor: '#fff',
    },

    scroll:{
    padding: 10,
    margin: 'auto',
    width: '100%',
    borderRadius: 10,
    },

    loginContainer: {
    width: "95%",
    padding: 10,
    borderWidth: 3,
    marginBottom: 20,
    borderColor: 'transparent',
    boxShadow: "2px 5px 9px rgba(0, 0, 0, 0.2)",
    borderRadius: 10,
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
    padding: 11,
    boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.2)",
    borderRadius: 25,
    },

    Uptext:{
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: 'Times New Roman',
    },

    UPbar:{
    width: '100%',
    height: '5%',
    borderBottomWidth: 2,
    borderColor: '#bebdbd',
    marginTop: 10,
    paddingBottom: 15,
    gap: 15,
    flexDirection: 'row',
    alignItems: 'center',
    },

    logo1: {
    maxWidth: 40,
    height: 60,
    marginTop: -15,
    marginLeft: 10,
    alignSelf: 'center',
    position: 'relative',
    },

    ButtonRota: {
    backgroundColor: "#209e3c",
    color: "#fff",
    width: "95%",
    height: '70%',
    textAlign: "center",
    paddingVertical: 10,
    marginTop: 15,
    marginLeft: 5,
    borderRadius: 10,
    fontSize: 16,
    boxShadow: "0px 1px 6px rgba(0, 0, 0, 0.2)",
    flexDirection: 'row',
    gap: 15,
    },

    botbox:{
    flexDirection: 'row',
    },

    bold:{
    fontWeight: 'bold',
    },

    buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
    },

    texto: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 5,
    width: "90%",
    marginTop: 20,
    },

    subtexto: {
    fontSize: 16,
    color: "gray",
    width: "86%",
    marginBottom: 10,
    },

    title:{
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 5,
    marginTop: 5,
    textAlign: 'center',
    },

    sobv:{
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 5,
    fontSize: 19,
    fontWeight: "bold",
    },

    rotinaContainer: {
    width: '100%',
    height: 50,
    marginBottom: 10,
    },

    pritext:{
    fontSize: 26,
    fontWeight: 'bold', 
    marginLeft: 5,
    marginTop: 10,
    marginBottom: 10,
    },

    container: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    borderRadius: 10,
    width: 400,
    padding: 20,
    backgroundColor: "#fff",
    margin: "auto",
    marginTop: 10,
    gap: 10,
    },

    input: {
    boxShadow: "0px 1px 6px rgba(0, 0, 0, 0.2) inset",
    borderRadius: 5,
    fontSize: 17,
    padding: 10,
    marginBottom: 10,
    height: 25,
    borderWidth: 0,
    },

    inpout:{
    width: '60%',
    boxShadow: "0px 1px 6px rgba(0, 0, 0, 0.2) inset",
    borderRadius: 5,
    fontSize: 17,
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    height: 30,
    borderWidth: 0,
    },

    label: {
    fontSize: 16,
    marginBottom: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    fontWeight: "400",
    paddingBottom: 5,
    marginTop: 7,
    },

    loginButtonP: {
    width: '100%',
    height: '50%',
    alignItems: 'center',
    display: 'contents',
    },

    textButtonP:{
    color: '#313131',
    textAlign: "center",
    fontWeight: 'bold',
    },


    perf:{
    maxWidth: 50,
    maxHeight: 50, 
    },

    ops:{
    flexDirection: 'row',
    borderTopWidth: 2,
    borderColor: 'gray',
    width: '100%',
    height: '10%',
    alignItems: 'center',
    alignContent: 'center',
    marginVertical: 50,
    },

    foote:{
    width: '25%',
    height: '50%',
    alignItems: 'center',
    alignContent: 'center',
    flexDirection: 'column',
    },

    });