import React, { Component } from 'react'
import { View, Text, StyleSheet, Image } from "react-native";
import StarRating from 'react-native-star-rating';

export default class extends Component {

render() {
   const displayText =this.props.data.map(data => 
    <View style={styles.nameTitleContainer}>
       <Text style={styles.nameTitle}>{data.name} </Text>
       {/* <Text style={styles.ratingTitle}>{data.rating} </Text> */}
       <View style={styles.ratingContainer}>
            <StarRating 
                rating ={data.rating}
                starSize={12}
                starStyle={20}
                fullStarColor={'#f0a500'}
            />
        </View>
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

