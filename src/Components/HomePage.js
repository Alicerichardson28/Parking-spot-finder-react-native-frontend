import React from 'react';
import { StyleSheet, Text, Image, SafeAreaView, View } from 'react-native';
import LoginForm from './LoginForm'
import { NavigationContainer } from '@react-navigation/native';




export default function App(props) {
    console.log(props)
  return (
    <SafeAreaView style={styles.container}>
      <Image style= { styles.backgroundImage }
        source={require('../../assets/buildingbg4.jpg')}
      />
      <View style={styles.logoContainer}>
        <Text style={styles.title}>PARKING  SPOT  FINDER</Text>
      </View>
      <View>
        <LoginForm navigation = {props.navigation} loginUsers = {props.route.params.loginUsers}/>
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
  },

  carLogoImage: {
    width: 70,
    height: 60,
  },

  title: {
    fontWeight: "700",
    color: '#142850',
    fontSize: 27,

  },

  backgroundImage:{
    position: 'absolute',
    height: '100%',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    opacity: 0.2
  },
});
