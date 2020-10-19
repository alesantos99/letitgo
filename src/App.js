import React from 'react'
import {Text} from 'react-native'

import{ NavigationContainer} from '@react-navigation/native'

import {createStackNavigator} from '@react-navigation/stack'
import ProductList from './views/ProductList';
import ProductForm from './views/ProductForm';

const Stack = createStackNavigator()

export default props =>{
    return(
        <NavigationContainer>
            <Stack.Navigator 
                initialRouteName="ProductList"
            >
                
                <Stack.Screen
                    name="ProductList"
                    component={ProductList}
                    
                />
                <Stack.Screen
                    name="ProductForm"
                    component={ProductForm}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}