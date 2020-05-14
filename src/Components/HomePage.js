import React from 'react';
import { StyleSheet, Text, Image, SafeAreaView, View, TouchableOpacity} from 'react-native';
import LoginForm from './LoginForm'

export default function App(props) {

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image  style={styles.carLogoImage}
          source={require('../../assets/carlogo.png')}
        />
        <Text style={styles.title}>PARK - ON - STREET</Text>
      </View>
      <View>
        <LoginForm navigation = {props.navigation}/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    backgroundColor: '#fff',
  },

  logoContainer:{
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: 50,
  },

  carLogoImage: {
    width: 70,
    height: 60,
  },

  title: {
    fontWeight: "bold",
    color: '#142850',
    fontSize: 20
    
  }
});
