import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const CityItem = (props) => {
    return(
        
            <TouchableOpacity>
                <Text>{props.cityName}</Text>
            </TouchableOpacity>
        
    )
}

export {CityItem};