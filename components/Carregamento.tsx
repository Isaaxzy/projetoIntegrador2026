import { Image } from "expo-image";
import {
  Modal,
  StyleSheet,
  Text,
  View,
} from "react-native";

type Props = {
  visivel: boolean;
  mensagem?: string;
};

export default function Carregamento({
  visivel,
  mensagem = "Carregando...",
}: Props) {
  return (
    <Modal
      animationType="fade"
      transparent
      visible={visivel}
      statusBarTranslucent
      onRequestClose={() => undefined}
    >
      <View style={styles.fundo}>
        <Image
          source={require("../app/imagens/carregamento.gif")}
          style={styles.animacao}
          contentFit="contain"
          accessibilityLabel="Animação de um cronômetro verde carregando"
        />
        <Text style={styles.mensagem}>{mensagem}</Text>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  fundo: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
    backgroundColor: "#000000",
  },
  animacao: {
    width: "100%",
    maxWidth: 480,
    aspectRatio: 16 / 9,
  },
  mensagem: {
    marginTop: 16,
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },
});
