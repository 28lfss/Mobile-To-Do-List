import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

export default function AdicionarItem({ funcao }) {
  const [texto, setTexto] = useState("");

  const pegarMudanca = (val) => {
    setTexto(val);
  };

  const limparInput = () => {
    if (texto.trim() !== "") {
      funcao(texto);
      setTexto("");
    }
  };

  return (
    <View style={styles.position}>
      <TextInput
        style={styles.input}
        placeholder="Novo item..."
        backgroundColor="white"
        onChangeText={pegarMudanca}
        value={texto}
      />
      <Button onPress={limparInput} title="Adicionar item" color="#F8CC3A" />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: "white",
    marginBottom: 8,
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderRadius: 5,
    width: "80%",
  },
  position: {
    alignItems: "center",
  },
});
