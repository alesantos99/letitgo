import React from "react";
import { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import Heading from "../components/Heading";
import { red } from "ansi-colors";

export function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const [loading, setLoading] = useState("");
  const [state, setState] = useState("");

  function onButtonPress() {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess);
  }
  function onLoginSuccess() {
    this.setState({
      erro: "",
      loading: false
    });
  }
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>LOGIN</Text>
      <Text style={styles.textError}>Error</Text>
      <TextInput
        style={styles.inputEmail}
        placeholder={"Email"}
        keyboardType={"email-address"}
        onChangeText={email => setEmail({ email })}
      ></TextInput>
      <TextInput
        style={styles.inputPassword}
        placeholder={"Password"}
        secureTextEntry
        onChangeText={password => setPassword({ password })}
      ></TextInput>
      <TouchableOpacity
        style={styles.filledButton}
        onPress={() => {
          navigation.navigate("Register");
        }}
      >
        <Text style={styles.filledButtonText}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.textButton} onPress={onButtonPress}>
        <Text style={styles.textButtonText}>Cadastra-se agora.</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 120,
    padding: 20,
    backgroundColor: "white"
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
  }
};
