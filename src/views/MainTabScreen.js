import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "./HomeScreen";
import { DetailsScreen } from "./DetailsScreen";
import { ProfileScreen } from "./ProfileScreen";
import { ExploreScreen } from "./ExploreScreen";

import Icon from "react-native-vector-icons/MaterialIcons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

const HomeStack = createStackNavigator();
const DetailStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

export const HomeStackScreen = ({ navigation }) => (
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#9932CC"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
        textAlign: "center"
      }
    }}
  >
    <HomeStack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        headerLeft: () => (
          <Icon.Button
            name="menu"
            size={25}
            backgroundColor="#9932CC"
            onPress={() => {
              navigation.openDrawer();
            }}
          ></Icon.Button>
        )
      }}
    />
  </HomeStack.Navigator>
);

export const DetailStackScreen = ({ navigation }) => (
  <DetailStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#9932CC"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
        textAlign: "center"
      }
    }}
  >
    <DetailStack.Screen
      name="Detalhes"
      component={DetailsScreen}
      options={{
        headerLeft: () => (
          <Icon.Button
            name="menu"
            size={25}
            backgroundColor="#9932CC"
            onPress={() => {
              navigation.openDrawer();
            }}
          ></Icon.Button>
        )
      }}
    />
  </DetailStack.Navigator>
);

const MainTabScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
      style={{ backgroundColor: "#fff" }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: "Home",
          tabBarColor: "#9932CC",
          tabBarIcon: ({ color }) => (
            <Icon name="home" color={color} size={26} />
          )
        }}
      />
      <Tab.Screen
        name="Detalhes"
        component={DetailStackScreen}
        options={{
          tabBarLabel: "Updates",
          tabBarColor: "#0000ff",
          tabBarIcon: ({ color }) => (
            <Icon name="loupe" color={color} size={26} />
          )
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={ProfileScreen}
        options={{
          tabBarLabel: "Profile",
          tabBarColor: "#ff00ff",
          tabBarIcon: ({ color }) => (
            <Icon name="face" color={color} size={26} />
          )
        }}
      />

      <Tab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          tabBarLabel: "Profile",
          tabBarColor: "#00dd00",
          tabBarIcon: ({ color }) => (
            <Icon name="search" color={color} size={26} />
          )
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabScreen;
