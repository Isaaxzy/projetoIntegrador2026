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

          <View style={{ alignItems: "center", marginBottom: 20 }}>
            <Text style={styles.texto}>Sua alimentação</Text>
            <Text style={styles.subtexto}>Como você costuma se alimentar? Você pode marcar mais de uma</Text>
          </View>

              <View style={styles.container}>
                
                <View style={styles.loginContainer}>

                <View style={styles.fundo}>

                <View style={styles.container}>
                
                {itensIniciais.map((item, index) => (
                <Pressable
                    key={item}
                    style={styles.linha}
                    onPress={() => alternarItem(index)}
                >
                <View style={[styles.checkbox, itensMarcados[index] && styles.marcado]}>
                {itensMarcados[index] && <Text style={styles.check}>✓</Text>}  

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

        </View>
      </View>
 
)};


const styles = StyleSheet.create({

	container: {
		flex: 1,
		padding: 24,
		backgroundColor: '#fff',
	},
    
	linha: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 16,
	},

	checkbox: {
		width: 180,
		height: 50,
        flexDirection: 'row',
        marginLeft: 20,
        borderRadius: 25,
        marginRight: 10,
		alignItems: 'center',
		justifyContent: 'center',
		borderWidth: 2,
		borderColor: '#555',
	},

	marcado: {
		backgroundColor: '#2563eb',
		borderColor: '#2563eb',
	},

	check: {
		color: '#fff',
		fontWeight: 'bold',
	},

	item: {
		fontSize: 18,
	},

	concluido: {
		color: '#888',
		textDecorationLine: 'line-through',
	},

    logobox: {
    backgroundColor: "#078523",
    width: 100,
    height: 100,
    margin: 'auto',
    marginTop: 20,
    marginBottom: 10,
    borderRadius: 25
    },

    logo: {
    width: 50,
    height: 50,
    margin: "auto",
    filter: 'invert(',
    },

    texto: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 5,
    },
    
    subtexto: {
    fontSize: 15,
    color: "gray",
    width: 250,
    textAlign: 'center',
    },

    loginContainer: {
    width: "90%",
    },

    bots:{
        flexDirection: 'row',
        gap: 10,
        borderTopWidth: 2,
        borderColor: 'gray',
        width: 270,
    },

    textButtonV:{
        color: '#313131',
        textAlign: "center",
    },

     textButtonP:{
        color: '#ececec',
        textAlign: "center",
    },

    loginButtonP: {
    backgroundColor: "#078523",
    color: "#fff",
    width: "45%",
    paddingVertical: 10,
    borderRadius: 5,
    marginLeft: 10,
    fontSize: 16,
    marginTop: 5,
    boxShadow: "0px 1px 6px rgba(0, 0, 0, 0.2)",
    },

loginButtonV: {
    backgroundColor: "#FAFAFA",
    color: "#2b2b2b",
    width: "45%",
    paddingVertical: 10,
    borderRadius: 5,
    marginLeft: 5,
    fontSize: 16,
    marginTop: 5,
    boxShadow: "0px 1px 6px rgba(0, 0, 0, 0.2)",
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




