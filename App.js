import React from "react";
import { Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";

import { createStackNavigator } from "@react-navigation/stack";
import { AuthStackNavigator } from "./src/navigators/AuthStatckNavigator";
import { LoginScreen } from "./src/views/loginScreen";
import { RegisterScreen } from "./src/views/registerScreen";
import * as firebase from "firebase";
import { Button, Icon } from "react-native-elements";
import { lightTheme } from "./src/themes/light";
import { AuthContext } from "./src/contexts/AuthContext";
const [loggedIn, setState] = useState();

var firebaseConfig = {
  apiKey: "AIzaSyCTlok2uvuN0ynl4V3sXPSwOJfX11UKTAk",
  authDomain: "letitgo-7603c.firebaseapp.com",
  databaseURL: "https://letitgo-7603c.firebaseio.com",
  projectId: "letitgo-7603c",
  storageBucket: "letitgo-7603c.appspot.com",
  messagingSenderId: "30943907517",
  appId: "1:30943907517:web:9d3ac4063d9cb7b27db1d4",
  measurementId: "G-J8D3F28Y8L"
};
// Initialize Firebase

firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    setState(true);
  } else {
    setState(false);
  }
});

const RootStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer theme={lightTheme}>
      <RootStack.Navigator screenOptions={screenOptions}>
        <RootStack.Screen name={"AuthStack"} component={AuthStackNavigator} />
      </RootStack.Navigator>
    </NavigationContainer>
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
  headerShown: false
};

//firebase.analytics();
/*
import {createStackNavigator} from '@react-navigation/stack'
import ProductForm from './src/views/ProductForm'
import ProductList from './src/views/ProductList'
import {Button,Icon} from 'react-native-elements'
import 'react-na'
const Stack = createStackNavigator()

export default props =>{
    return(
        <NavigationContainer>
            <Stack.Navigator 
                initialRouteName="ProductList" 
                screenOptions={screenOptions}
            >
                
                <Stack.Screen
                    name="ProductList"
                    component={ProductList}
                    options={
                      ({navigation})=>{
                        return{
                          title: 'Produtos',
                          headerRight:()=>(
                            
                            <Button  onPress={()=> navigation.navigate('ProductForm')}
                             type="clear" icon={<Icon name="add" size="25" color="white"/>} /> 
                          )
                        }
                      }
                    }
                />
                <Stack.Screen
                    name="ProductForm"
                    component={ProductForm}
                    options={{
                      title:"Cadastrar produto"
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const screenOptions={
    headerStyle:{
        backgroundColor: '#6959CD'
    },
    headerTintColor:'#fff',
    headerTitleStyle:{
      fontWeight:'bold'
    }

}*/
