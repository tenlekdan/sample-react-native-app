/* 
 *   Author: Tenzin Lekden
 *   Date: 18/Sep/2019
*/
import React, { useState } from "react";
import { Button, View, StyleSheet, FlatList } from "react-native";


const ColorScreen = () => {
    const [colors, setColors] = useState([]);
    return <View>
        <Button
            title="Add color to screen"
            onPress={() => {
                setColors([...colors, randomRGB()]);
            }}
        />

        <FlatList
            data={colors}
            keyExtractor={item => item}
            renderItem={({ item }) => {
                return <View style={{ height: 100, width: 100, backgroundColor: item }} ></View>
            }}>

        </FlatList>
    </View>;
}

const randomRGB = () => {
    const red = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`;
}
const styleSheet = StyleSheet.create({});

export default ColorScreen; 
