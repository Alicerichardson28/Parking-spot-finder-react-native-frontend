import React, { Component } from 'react'
import { View, Text, StyleSheet, Image } from "react-native";
import StarRating from 'react-native-star-rating';

export default class DisplayLocation extends Component {

render() {
   const displayText =this.props.data.map(data => 
    <View style={styles.nameTitleContainer}>
       <Text style={styles.nameTitle}>{data.name} </Text>
            <StarRating 
                rating ={data.rating}
                containerStyle ={{width: '20%'}}
                starSize={12}
                fullStarColor={'#f0a500'}
            />
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
        marginTop: 20,
        height: 300,
        alignItems: 'center',
    },
    
    nameTitleContainer: {
        marginBottom: 15,
        borderBottomColor: '#dddddd',
        borderBottomWidth: 2,
        height: 50,
        width: 400
    },

    nameTitle: {
        marginLeft: 15
    },
})

