import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView } from "react-native";
import StarRating from 'react-native-star-rating';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faDirections } from '@fortawesome/free-solid-svg-icons'


export default class DisplayLocation extends Component {

render() {
   const displayText =this.props.data.map(data => 
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
                <FontAwesomeIcon 
                    style={styles.iconDirections} 
                    starSize={10}
                    icon={ faDirections } 
                />
            </View>
        </View>
    )
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

