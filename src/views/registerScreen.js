import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Button, Icon } from "react-native-elements";

export function RegisterScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.textButton}
        onPress={() => {
          navigation.pop();
        }}
      >
        <Text style={styles.textButtonText}>Voltar</Text>
      </TouchableOpacity>

      <Text style={styles.heading}>Cadastre-se</Text>
      <Text style={styles.textError}>Error</Text>
      <TextInput
        style={styles.inputEmail}
        placeholder={"Email"}
        keyboardType={"email-address"}
      ></TextInput>
      <TextInput
        style={styles.inputPassword}
        placeholder={"Password"}
        secureTextEntry
      ></TextInput>
      <TouchableOpacity style={styles.filledButton} onPress={() => {}}>
        <Text style={styles.filledButtonText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 40,
    padding: 20
  },
  heading: {
    fontSize: 32,
    marginBottom: 38
  },
  inputEmail: {
    backgroundColor: "#e8e8e8",
    width: "100%",
    marginVertical: 20,
    padding: 20,
    borderRadious: 8
  },
  inputPassword: {
    backgroundColor: "#e8e8e8",
    width: "100%",
    marginVertical: 8,
    padding: 20,
    borderRadious: 8
  },
  filledButton: {
    backgroundColor: "#971FBB",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    borderRadious: 8,
    marginVertical: 32
  },
  filledButtonText: {
    color: "white",
    fontWeight: "500",
    fontSize: 18
  },

  textButton: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    borderRadious: 8,
    marginVertical: 32
  },
  textButtonText: {
    color: "#971FBB",
    fontWeight: "500",
    fontSize: 16
  },
  textError: {
    color: "red",
    fontWeight: "bold",
    paddingVertical: 8
  },
  backLogin: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    borderRadious: 8,
    marginVertical: 32
  }
};
