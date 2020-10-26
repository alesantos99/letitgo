import React from "react";

import { NavigationContainer } from "@react-navigation/native";

import { createDrawerNavigator } from "@react-navigation/drawer";

import MainTabScreen from "./src/views/MainTabScreen";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={MainTabScreen} />
        {/*<Drawer.Screen name="Detalhes" component={DetailStackScreen} />*/}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
