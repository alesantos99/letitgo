import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Hello</Text>
      <Button
        title="Veja os Detalhes"
        onPress={() => navigation.navigate("Detalhes")}
      />
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
