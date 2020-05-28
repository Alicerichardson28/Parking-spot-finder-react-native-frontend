import React, { Component } from 'react'
import { View } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_API_KEY } from 'react-native-dotenv'



export default class Searchbar extends Component {
    

    render() {
        return (
            <View>
                <GooglePlacesAutocomplete
                    placeholder='Search'
                    minLength={2}
                    autoFocus={true}
                    returnKeyType={'search'}
                    listViewDisplayed={'auto'}
                    fetchDetails={true}
                    placeholderTextColor="#142850"
                    renderDescription={row => row.description} 
                    onPress={(data, details = null) => { 
                        let location = {
                            coords: {
                              latitude: details.geometry.location.lat, 
                              longitude: details.geometry.location.lng
                            }
                          }
                        this.props.changeLocation(location)
                        console.log(details)
                    }}
                    
                    getDefaultValue={() => ''}
                    
                    query={{
                        key: GOOGLE_API_KEY,
                        language: 'en', 
                        types: '(cities)' 
                    }}

                    styles={{
                        textInputContainer: {
                            backgroundColor: '#303960',
                            width: 400,
                            height: 55,
                            zIndex: 99,
                            overflow: 'hidden',
                        },
                        textInput: {
                            width: 400,
                            height: 38,
                            color: '#5d5d5d',
                            fontSize: 16,
                            zIndex: 99,
                            overflow: 'hidden',
                            paddingBottom: 10,
                        },
                        predefinedPlacesDescription: {
                            color: '#1faadb',
                        },
                    }}
                />
            </View>
        )
    }
}
