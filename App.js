import React from 'react';
import { StyleSheet, Text, Image, SafeAreaView, View} from 'react-native';
import LoginForm from './src/Components/LoginForm'

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image  style={styles.carLogoImage}
          source={require('./assets/carlogo.png')}
        />
        <Text style={styles.title}>PARK - ON - STREET</Text>
      </View>
      <View>
        <LoginForm/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    marginTop: 200,
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
    fontWeight: '700'
    
  }
});
