import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export const DetailsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Detalhes</Text>
      <Button
        title="Voltar aos detalhes"
        onPress={() => navigation.push("Detalhes")}
      />
      <Button
        title="Voltar ao inicio"
        onPress={() => navigation.navigate("Home")}
      />
      <Button title="Voltar" onPress={() => navigation.goBack()} />

      <Button title="Voltar ao Inicio" onPress={() => navigation.popToTop()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
