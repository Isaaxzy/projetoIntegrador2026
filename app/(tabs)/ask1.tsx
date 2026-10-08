import { View, StyleSheet, Text, ImageBackground, Image, Pressable, Touchable, TouchableOpacity  } from 'react-native';
import { useState } from 'react';

 
const itensIniciais = ['🍽️ Sem restrições', '🥕 Vegetariano', '🌱 Vegano', '🥗 Flexitariano', '🥑 Low crab', '✨ outra'];
export default function CheckBox() {
	// Cada posição corresponde à tarefa na mesma posição de `itensIniciais`.
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

    const totalSteps = 7;
    const currentStep = 1;

    return (
         
   <View style={styles.container}>
          
    <View style={styles.progressSection}>
       <View style={styles.barContainer}>
           {Array.from({ length: totalSteps }).map((_, index) => {
            const stepNumber = index + 1;
            const isActive = stepNumber <= currentStep;
            return (
      <View
         key={index}
         style={[
           styles.segment,
            isActive ? styles.activeSegment : styles.inactiveSegment,
            ]}
            />
            );
            })}
      </View>
      <Text style={styles.stepText}>Etapa {currentStep} de {totalSteps}</Text>
          
      <View style={{ alignItems: "center", marginBottom: 20}}>
          
        <Text style={styles.texto}>Sua alimentação</Text>
        <Text style={styles.subtexto}>Como você costuma se alimentar? Você pode marcer mais de uma opção.</Text>
      </View>
          
          <View style={styles.linha}>              
           {itensIniciais.map((item, index) => (
            <Pressable
            key={item}
            onPress={() => alternarItem(index)}
            >
            <View style={[styles.checkbox, itensMarcados[index] && styles.marcado]}>
            {itensMarcados[index] && <Text style={styles.check}></Text>}  
          
            <Text style={[styles.item, itensMarcados[index] && styles.concluido]}>
            {item}
            </Text>
          
          </View>
                        
          </Pressable>
         ))}
      </View>

      <View style={styles.bots}>
        <TouchableOpacity style={styles.loginButtonV}><Text style={styles.textButtonV}>←  Voltar</Text></TouchableOpacity>
                              
        <TouchableOpacity style={styles.loginButtonP}><Text style={styles.textButtonP}>Proximo →</Text></TouchableOpacity>
      </View>
          
    </View>   
          
    </View>    

)};


const styles = StyleSheet.create({

	 container: {
        width: 550,
        height: 500,
        flex: 1,
        padding: 24,
        margin: 'auto',
        backgroundColor: '#fff',  
        flexWrap: 'wrap',
        flexDirection: 'row',
    },

  linha: {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },

    aviso:{
        width: '100%',
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
        fontSize: 15,
        textAlign: 'justify',
    },

    checkbox: {
        padding: 12,
        marginHorizontal: 10,
        marginTop: 60,
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.2)",
        borderRadius: 25,
    },

   marcado: {
        backgroundColor: "#078523",
        borderColor: "#078523",
        boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.8) inset",
    },
    check: {
        color: '#fff',
        fontWeight: 'bold',
    },
    item: {
        fontSize: 18,
    },
    concluido: {
        color: '#ffffff',
    },

    texto: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 5,
    marginTop: 5,
    },
    
    subtexto: {
    fontSize: 15,
    color: "gray",
    width: 300,
    textAlign: 'center',
    },

    loginContainer: {
    width: "80%",
    },

    bots:{
        flexDirection: 'row',
        gap: 10,
        borderTopWidth: 2,
        borderColor: 'gray',
        width: '110%',
        justifyContent: 'flex-end',
        marginVertical: '50%',
    },

    textButtonV:{
        color: '#313131',
        textAlign: "center",
        fontWeight: 'bold',
    },

     textButtonP:{
        color: '#ececec',
        textAlign: "center",
        fontWeight: 'bold',
    },

    loginButtonP: {
    backgroundColor: "#078523",
    color: "#fff",
    width: "45%",
    paddingVertical: 10,
    borderRadius: 10,
    marginLeft: 10,
    fontSize: 16,
    marginTop: 5,
    boxShadow: "0px 1px 6px rgba(0, 0, 0, 0.2)",
    },

loginButtonV: {
    color: "#2b2b2b",
    width: "45%",
    paddingVertical: 10,
    borderRadius: 5,
    marginLeft: 10,
    fontSize: 16,
    marginTop: 5,
    marginHorizontal: 'auto',
    },

progressSection: {
    width: "90%",
    marginTop: 30,
    alignSelf: 'center',
    gap: 8,
    marginBottom: 10,
    },

    barContainer: {
    flexDirection: "row",
    width: "100%",
    gap: 6,
    },

segment: {
    flex: 1,
    height: 6,
    borderRadius: 3,
    },

    activeSegment: {
    backgroundColor: "#209e3c",
    },

    inactiveSegment: {
    backgroundColor: "#E2E8F0",
    },

    stepText: {
    fontSize: 14,
    color: "gray",
    },
    });
