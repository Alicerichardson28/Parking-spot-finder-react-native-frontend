import React from 'react';
import { StyleSheet, Text, Image, SafeAreaView, View } from 'react-native';
import LoginForm from './LoginForm'
import CreateAccountForm from './CreateAccountForm'


export default function App(props) {
    console.log(props)
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image  style={styles.carLogoImage}
          source={require('../../assets/carlogo.png')}
        />
        <Text style={styles.title}>PARKING - SPOT - FINDER</Text>
      </View>
      <View>
        <LoginForm navigation = {props.navigation} loginUsers = {props.route.params.loginUsers}/>
        {/* <CreateAccountForm navigation = {props.navigation} signUpUsers = {props.route.params.signUpUsers}/> */}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#fff',
  },

  logoContainer:{
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    // marginBottom: 50,
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
