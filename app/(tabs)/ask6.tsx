import { useState } from 'react';
import { Pressable, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
 
// As tarefas exibidas inicialmente na lista de afazeres.
const itensIniciais = ['💫 Comer melhor', '⚡ Encontrar receitas práticas', '💰 Economizar', '🌈 Variar minha alimentação', '🎓 Aprender a cozinhar', '📅 Encontrar receitas para minha rotina', '✨ Outro'];
 
export default function CheckBox() {
 
    const totalSteps = 7;
    const currentStep = 6;
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
 
    return (
 
<View style={styles.backgroundd}>
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
            </View>
        <Text style={styles.titulo}>Seu objetivo</Text>
        <Text style={styles.subtexto}>O que você procura no aplicativo?</Text>
       
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

       
        <View>
           <View style={styles.bots}>
             <TouchableOpacity style={styles.loginButtonV}><Text style={styles.textButtonV}>←  Voltar</Text></TouchableOpacity>
                                        
             <TouchableOpacity style={styles.loginButtonP}><Text style={styles.textButtonP}>Proximo →</Text></TouchableOpacity>
        </View>   
    </View>
    
    </View>
</View>
    );
}
 
// Estilos separados deixam a estrutura do componente mais legivel e reutilizavel.
const styles = StyleSheet.create({
    backgroundd: {
        padding: 20,
        height: '100%',
        margin: 'auto',
    },
    container: {
        borderRadius: 25,
        flex: 1,
        width: 400,
        margin: 'auto',
        padding: 24,
        backgroundImage: 'linear-gradient(to bottom, #fff, #f1f7f2)',
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    },
    tdr: {
        marginBottom: 20,
    },
    titulo: {
        marginBottom: 20,
        fontSize: 24,
        fontWeight: 'bold',
    },
    subtexto: {
        fontSize: 15,
        color: "gray",
        marginBottom: 20,
},
    linha: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: '3%',
    },
    bots:{
        flexDirection: 'row',
        gap: 10,
        borderTopWidth: 2,
        borderColor: 'gray',
        width: '100%',
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

    checkbox: {
        paddingHorizontal: 12,
        padding: 10,
        marginHorizontal: 'auto',
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
    progressSection: {
  width: "90%",
  gap: 8,
  marginBottom: 10,
  marginHorizontal: 'auto',
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