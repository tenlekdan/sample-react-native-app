import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import ImageDetail  from '../components/ImageDetail'

const ImageScreen = () => {
    return <View>
        <ImageDetail title="Forest" imageSource={require('../../assets/forest.jpg')}></ImageDetail>
        <ImageDetail title="Beach" imageSource={require('../../assets/beach.jpg')}></ImageDetail>
        <ImageDetail title="Mountain" imageSource={require('../../assets/mountain.jpg')}></ImageDetail>
    </View>;
}

const styleSheet = StyleSheet.create(() => {
    return {
        image: {
            fontSize: 30
        }
    }
})

export default ImageScreen;