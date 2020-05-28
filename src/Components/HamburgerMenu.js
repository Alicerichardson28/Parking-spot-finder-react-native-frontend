import React from 'react'
import { View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

function MapPage({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          onPress={() => navigation.navigate('Home')}
          title="Go to notifications"
        />
      </View>
    );
  }
  
  function Logout({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button onPress={() => navigation.goBack()} title="Logout" />
      </View>
    );
  }
  
  const Drawer = createDrawerNavigator();
  
export default function HamburgerMenu() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Home" component={MapPage} />
                <Drawer.Screen name="Logout" component={Logout} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}
