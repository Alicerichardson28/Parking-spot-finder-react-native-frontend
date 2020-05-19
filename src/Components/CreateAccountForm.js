import React, { Component } from 'react'
import { View, Text, StyleSheet, StatusBar, TextInput, TouchableOpacity } from "react-native";

export default class CreateAccountForm extends Component {
    render() {
        return (
          <View style={styles.createFormContainer}>
              <View style={styles.titleContainer}>
                <Text style={styles.createTitle}>Create Account</Text>
              </View>
              <StatusBar
                    barStyle="light-content"
                />
                <TextInput
                    placeholder="Email"
                    placeholderTextColor="#142850"
                    returnKeyType="next"
                    onSubmitEditing={() => this.passwordInput.focus()}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Password"
                    placeholderTextColor="#142850"
                    returnKeyType="next"
                    secureTextEntry
                    style={styles.input}
                    ref={(input) => this.passwordInput = input}
                />
                <TextInput
                    placeholder="Firstname"
                    placeholderTextColor="#142850"
                    returnKeyType="next"
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Lastname"
                    placeholderTextColor="#142850"
                    autoCapitalize="none"
                    autoCorrect={false}
                    returnKeyType="go"
                    style={styles.input}
                />
                <View style={styles.allButtonContainer}>
                    <TouchableOpacity 
                        style={styles.buttonContainer}
                        onPress = {() => this.props.navigation.navigate("Login")}
                    >
                        
                        <Text style={styles.buttonText}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
          </View>
        )
    }
}

const styles = StyleSheet.create({
    createFormContainer: {
        padding: 30,
        },

    input: {
        alignItems: 'center',
        height: 40,
        backgroundColor: 'rgba(0,255,0,0.2)',
        marginBottom: 10,
        color: '#142850',
        paddingHorizontal: 10,
        borderRadius: 50,
    },

    buttonContainer: {
        backgroundColor: '#27496d',
        paddingVertical: 13,
        marginBottom: 10,
        borderRadius: 50,
    },

    buttonText: {
        textAlign: 'center',
        color: '#dae1e7',
        fontWeight: '700',
    },
    createTitle: {
        marginBottom: 30,
        // fontWeight: "bold",
        fontSize: 25
    },

    titleContainer: {
        alignItems: 'center'
    }
})