import React, { Component } from 'react'
import { View, Text, StyleSheet, Image } from "react-native";
import StarRating from 'react-native-star-rating';
// import FontAwesome, { SolidIcons } from 'react-native-fontawesome';
 

export default class DisplayLocation extends Component {

render() {
   const displayText =this.props.data.map(data => 
    <View style={styles.nameTitleContainer}>
       <Text style={styles.nameTitle}>{data.name} </Text>
            <StarRating 
                rating ={data.rating}
                containerStyle ={{width: '20%', marginLeft:15, marginTop: 3, marginBottom:3}}
                starSize={10}
                fullStarColor={'#f0a500'}
            />
            <Text style={styles.address}>{data.vicinity}</Text>
     </View>
    )
    return (
            <View style={styles.title}>
                <View>{displayText}</View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    title: {
        marginTop: 15,
        height: 300,
        alignItems: 'center',
    },
    
    nameTitleContainer: {
        marginBottom: 15,
        borderBottomColor: '#dddddd',
        borderBottomWidth: 2,
        height: 65,
        width: 400
    },

    nameTitle: {
        marginLeft: 15
    },

    address:{
        marginLeft: 15,
        fontSize: 11
    }
})

