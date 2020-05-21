import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity,  Linking } from "react-native";
import StarRating from 'react-native-star-rating';



export default class DisplayLocation extends Component {

 

    getDirection = (location) => {
        fetch(`https://www.google.com/maps/search/?api=1&query=${location.lat},${location.lng}`)
            .then(res => 
                 Linking.openURL(res.url)
            )   
    }

    render() {
        const displayText =this.props.data.map(data => {
            return(
                <View style={styles.mainContainer}>
                    <View style={styles.leftContainer}>
                        <Text style={styles.nameTitle}>{data.name}</Text>
                        <StarRating 
                            rating ={data.rating}
                            containerStyle ={{width: '20%', marginLeft:15, marginTop: 3, marginBottom:3}}
                            starSize={10}
                            fullStarColor={'#f0a500'}
                        />
                        <Text style={styles.address}>{data.vicinity} </Text>
                    </View>
                    <View style={styles.rightContainer}>
                    <TouchableOpacity
                        onPress = {() => this.getDirection(data.geometry.location)}
                    >
                        <Image 
                            source={require('../../assets/directionicon2.png')} 
                            style={{height: 55, width: 55, marginRight: 30 }} 
                        />
                    </TouchableOpacity>
                    </View>
                </View>
            )
        })


        return (
            <View style={styles.title}>
                <ScrollView>
                    <View>{displayText}</View>
                </ScrollView>
                </View>
            )
        }
    }

    const styles = StyleSheet.create({
        title: {
            marginTop: 10,
            height: 300,
            alignItems: 'center',
        },
        
        mainContainer: {
            flexDirection: 'row',
            marginBottom: 15,
            borderBottomColor: '#dddddd',
            borderBottomWidth: 2,
            height: 65,
            width: 400,
        },

        nameTitle: {
            marginLeft: 15,
            width: 300
        },

        address:{
            marginLeft: 15,
            marginBottom: 10,
            fontSize: 11,
            width: 300,
        },

        iconDirections: {
            marginRight: 40,
            marginTop: 20,
            
        },

        leftContainer: {
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems:'flex-start',
            width: 300
        },
    })

