import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { createStackNavigator } from "@react-navigation/stack";

import { LoginScreen } from "../views/loginScreen";
import { RegisterScreen } from "../views/registerScreen";

const AuthStack = createStackNavigator();
const LoginStack = createStackNavigator();
export function AuthStackNavigator() {
  return (
    <AuthStack.Navigator mode="modal" screenOptions={screenOptions}>
      <AuthStack.Screen name={"LoginStack"} mode="card">
        {() => (
          <LoginStack.Navigator
            screenOptions={{
              headerShown: false
            }}
          >
            <LoginStack.Screen
              name={"Login"}
              component={LoginScreen}
            ></LoginStack.Screen>
          </LoginStack.Navigator>
        )}
      </AuthStack.Screen>
      <AuthStack.Screen
        name={"Register"}
        component={RegisterScreen}
      ></AuthStack.Screen>
    </AuthStack.Navigator>
  );
}

const styles = {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
};
const screenOptions = {
  headerShown: false,
  position: "absolute"
};
