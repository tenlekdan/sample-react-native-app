import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
    const name = "Tenzin Lekden";
    return (
        <View>
            <Text style={styles.firstStyle}>Getting Started with react native</Text>
            <Text style={styles.secondStyle}> My name is {name}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    firstStyle: {
        fontSize: 45
    },
    secondStyle: {
        fontSize: 35,
    }
})

export default ComponentsScreen;