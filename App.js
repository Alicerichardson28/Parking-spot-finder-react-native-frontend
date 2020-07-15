import React, {Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
// import { View, Button } from 'react-native';
import HomePage from './src/Components/HomePage';
import MapPage from './src/Components/MapPage';
import SearchBar from './src/Components/Searchbar';
import Logout from './src/Components/Logout'
import CreateAccountForm from './src/Components/CreateAccountForm';
import { AsyncStorage } from 'react-native';


const signupUrl = 'https://parking-spot-finder-backend.herokuapp.com/users'
const loginUrl = 'https://parking-spot-finder-backend.herokuapp.com/login'

const Main = createStackNavigator();
const Drawer = createDrawerNavigator();



function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}



export default class App extends Component {

  state = {
    user: {},
    signUpSuccess: null,
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
    if(result.id) {
      this.setState({
        signUpSuccess: true 
      });
      return result
  }else {
    this.setState({
        signUpSuccess: false
    });
  }
  })
  .then((result) => {
    setTimeout(() => this.setState({signUpSuccess: null}),2000)
    if(result){
      setTimeout(() => navigation.navigate("Login"), 1000)
    }
  })
}


logout = () => {
  return(
    <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
    </Drawer.Navigator>
  )
}

  render() {
    // AsyncStorage.getItem('token')
    //   .then(console.log)
    console.log("appState", this.state)
    return (
      <NavigationContainer>
          <Main.Navigator>
              <Main.Screen name="Login" component={HomePage} initialParams={{loginUsers: this.loginUsers}} 
              />
              <Main.Screen name="Map" component={MapPage}/>
              <Main.Screen name="Search" component={SearchBar}/>
              <Main.Screen name="Logout" component={HomePage} logout = {this.logout}/>
              <Main.Screen name="Sign up"/>
              <Main.Screen name="Login" component={HomePage} initialParams={{loginUsers: this.loginUsers}} />
              <Main.Screen name="Map" component={MapPage} />
              <Main.Screen name="Search" component={SearchBar}  />
              <Main.Screen name="New Account">
                  {props => <CreateAccountForm {...props} signUpUsers = {this.signUpUsers} signUpSuccess ={this.state.signUpSuccess}/>}
              </Main.Screen>
          </Main.Navigator>
      </NavigationContainer>
    )
  }
}






