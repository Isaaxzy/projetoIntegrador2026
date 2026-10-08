import { useState } from 'react';
import { Pressable, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
 
// As tarefas exibidas inicialmente na lista de afazeres.
const itensIniciais = ['Muito fácil', 'Fácil', 'Intermediária', 'Elaborada'];
 
export default function CheckBox() {

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
        <View style={styles.UPbar}>
            <Text style={styles.Uptext}> Nome </Text>
        </View>

        <Text style={styles.titulo}> 🧡 Favoritos</Text>
 
        <Text style={styles.tdr}>Tempo para cozinhar</Text>
        <input style={styles.input} type="time" placeholder="Tempo" />
        <Text style={styles.tdr}>Tipo de receita</Text>
 
            <View style={styles.linha}>
                {itensIniciais.map((item, index) => (
                    <Pressable
                     key={item}
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
</View>
    );
}
 
// Estilos separados deixam a estrutura do componente mais legivel e reutilizavel.
const styles = StyleSheet.create({
    backgroundd: {
        padding: 20,
        width: '100%',
        height: '100%',
        margin: 'auto',
    },

    container: {
        borderRadius: 25,
        flex: 1,
        width: '80%',
        margin: 'auto',
        padding: 24,
        backgroundImage: 'linear-gradient(to bottom, #fff, #f1f7f2)',
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    },

    UPbar:{
        width: '100%',
        borderBottomWidth: 2,
        borderColor: '#bebdbd',
        marginBottom: 40,
        marginTop: 60,
    },

    Uptext:{

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
},

    linha: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },

       bots:{
        flexDirection: 'row',
        gap: 10,
        borderTopWidth: 2,
        borderColor: 'gray',
        width: 480,
        justifyContent: 'flex-end',
        marginVertical: '70%',

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
    fontSize: 16,
    marginTop: 5,
    marginHorizontal: 'auto',
    },


    checkbox: {
        padding: 12,
        marginHorizontal: 10,
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.2)",
        borderRadius: 25,
    },

    input: {
        boxShadow: "0px 1px 6px rgba(0, 0, 0, 0.2) inset",
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
        width: 200,
        height: 20,
        borderWidth: 0
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
        marginBottom: 10,
        marginHorizontal: 'auto',
    },

     barContainer: {
        flexDirection: "row",
        width: "100%",
    },

    segment: {
        flex: 1,
        height: 6,
        borderRadius: 3,
     },

    activeSegment: {
        backgroundColor: "#209e3c",
    },


     stepText: {
        fontSize: 14,
        color: "gray",
     },

});