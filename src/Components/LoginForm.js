import React, { Component } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text, StatusBar } from 'react-native';


export class Login extends Component {

    state = {
        email: '',
        password: ''
    }

    render() {
        return (
            <View style={styles.formContainer}>
                <StatusBar
                    barStyle="light-content"
                />
                <TextInput
                    placeholder="Username or email"
                    placeholderTextColor="#142850"
                    returnKeyType="next"
                    onSubmitEditing={() => this.passwordInput.focus()}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={styles.input}
                    onChangeText={(email) => this.setState({email})}
                    value={this.state.email}
                />
                <TextInput
                    placeholder="Password"
                    placeholderTextColor="#142850"
                    returnKeyType="go"
                    secureTextEntry
                    style={styles.input}
                    ref={(input) => this.passwordInput = input}
                    onChangeText={(password) => this.setState({password})}
                    value={this.state.password}
                />
                <View style={styles.allButtonContainer}>
                    <TouchableOpacity 
                        style={styles.buttonContainer}
                        onPress = {() => this.onFormSubmit(this.state)}
                    >
                        
                        <Text style={styles.buttonText}>LOGIN</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={styles.buttonContainer}
                        onPress = {() => this.props.navigation.navigate("Sign up")}
                    >
                        <Text style={styles.buttonText}>CREATE AN ACCOUNT</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    onFormSubmit = (user) => {
        this.props.loginUsers(user, this.props.navigation)
    }
}

const styles = StyleSheet.create({
    formContainer: {
        padding: 30,
      },

    input: {
        alignItems: 'center',
        height: 40,
        backgroundColor: '#fafafa',
        marginBottom: 10,
        color: '#142850',
        paddingHorizontal: 10,
        borderRadius: 10,
    },

    buttonContainer: {
        backgroundColor: 'rgba(0,255,0,0.45)',
        paddingVertical: 13,
        marginBottom: 10,
        borderRadius: 10,
    },

    buttonText: {
        textAlign: 'center',
        color: '#142850',
        fontWeight: '700',
    }

})

export default Login

