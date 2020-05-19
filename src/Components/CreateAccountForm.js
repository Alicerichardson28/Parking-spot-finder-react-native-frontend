import React, { Component } from 'react'
import { View, Text, StyleSheet, StatusBar, TextInput, TouchableOpacity } from "react-native";

export default class CreateAccountForm extends Component {
    
    state = {
        user: {
            email: '',
            password: '',
            firstname: '',
            lastname: '',
            // emailError: ''
        }
    }
    
    
    // emailInput() {
        //     if (this.state.email == "")
        //     {
            //         this.setState({emailError: "email can't be empty"})
            //     }else{
                //         this.setState({emailError:''})
                //     }
                // }
                
    render() {
        // console.log(this.props)
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
                    onChangeText={(text) => this.setState({ email: text })}
                    value={this.state.email}
                    // onBlur={() => this.emailInput()}
                    />
                {/* <Text style={styles.emailErrorText}>{this.state.emailError}</Text> */}
                <TextInput
                    placeholder="Password"
                    placeholderTextColor="#142850"
                    returnKeyType="next"
                    secureTextEntry
                    maxLength={12}
                    style={styles.input}
                    ref={(input) => this.passwordInput = input}
                    onChangeText={(text) => this.setState({password: text})}
                    value={this.state.password}
                />
                <TextInput
                    placeholder="Firstname"
                    placeholderTextColor="#142850"
                    returnKeyType="next"
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={styles.input}
                    onChangeText={(text) => this.setState({firstname: text})}
                    value={this.state.firstname}
                    />
                <TextInput
                    placeholder="Lastname"
                    placeholderTextColor="#142850"
                    autoCapitalize="none"
                    autoCorrect={false}
                    returnKeyType="go"
                    style={styles.input}
                    onChangeText={(text) => this.setState({lastname: text})}
                    value={this.state.lastname}
                    />
                <View style={styles.allButtonContainer}>
                    <TouchableOpacity 
                        style={styles.buttonContainer}
                        onPress = {() => {this.onSubmit(this.state)}}
                        >
                        
                        <Text style={styles.buttonText}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
    onSubmit(newUser){
        this.props.route.params.signUpUsers(newUser, this.props.navigation)
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
    },

    // emailErrorText: {
    //     color: 'red'
    // }

})