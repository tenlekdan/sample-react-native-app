import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const ImageDetail = (props) => {
    return <View>
        <Image source={props.imageSource} />
        <Text>{props.title}</Text>
    </View>

}

const styleSheet = StyleSheet.create(() => {
    return {
        image: {
            fontSize: 30
        }
    }
})

export default ImageDetail;