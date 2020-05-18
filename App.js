import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { FontAwesome5, FontAwesome } from "@expo/vector-icons"
import HomePage from './src/Components/HomePage';
import MapPage from './src/Components/MapPage';
import CreateAccountForm from './src/Components/CreateAccountForm';


const Main = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Main.Navigator>
             <Main.Screen name="Login" component={HomePage} />
             <Main.Screen name="Map" component={MapPage} />
             <Main.Screen name="New Account" component={CreateAccountForm} />
        </Main.Navigator>
    </NavigationContainer>
  )
}




