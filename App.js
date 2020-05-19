import React, {Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './src/Components/HomePage';
import MapPage from './src/Components/MapPage';
import CreateAccountForm from './src/Components/CreateAccountForm';
import { AsyncStorage } from 'react-native';


const signupUrl = 'https://parking-spot-finder-backend.herokuapp.com/users'
const loginUrl = 'https://parking-spot-finder-backend.herokuapp.com/login'

const Main = createStackNavigator();

export default class App extends Component {

  state = {
    user: {}
}

loginUsers = (user, navigation) => {
    fetch(loginUrl,{
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    }).then(res => res.json())
    .then(result => {
      console.log(result)
      AsyncStorage.setItem('token', result.token)
      this.setState({user: result.token})
      return result.token
    })
    .then((token) => {
        if(token) {
          navigation.navigate("Map")
        }
  })
}

signUpUsers = (newUser, navigation) => {
  this.setState({
    user: {...this.state.user, newUser}
  })

  const user = {
    user: newUser
  }

  fetch(signupUrl,{
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  }).then(res => res.json())
  .then(result => {
    return result
  })
  .then((result) => {
    if(result){
      navigation.navigate("Login")
    }
  })
}

  render() {
    // AsyncStorage.getItem('token')
    //   .then(console.log)
    return (
      <NavigationContainer>
          <Main.Navigator>
              <Main.Screen name="Login" component={HomePage} initialParams={{loginUsers: this.loginUsers}} />
              <Main.Screen name="Map" component={MapPage} />
              <Main.Screen name="New Account" component={CreateAccountForm} initialParams={{signUpUsers: this.signUpUsers}}/>
          </Main.Navigator>
      </NavigationContainer>
    )
  }
}




