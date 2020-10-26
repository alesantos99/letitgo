import React from "react";

import { View, Text, StyleSheet } from "react-native";

export const ExploreScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Explorar</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
