import React from 'react';
import { Text, StyleSheet, View, FlatList } from 'react-native';


const ListScreen = () => {
    const friends = [
        { name: "Friend#1", age:51 },
        { name: "Friend#2", age:32 },
        { name: "Friend#3", age:43 },
        { name: "Friend#4", age:42 },
        { name: "Friend#5", age:52 },
        { name: "Friend#6", age:12 },
        { name: "Friend#7", age:13 },
        { name: "Friend#8", age:17 },
        { name: "Friend#9", age:21 }
    ]
    return <FlatList
        // horizontal
        // showsHorizontalScrollIndicator={false}
        keyExtractor={friend => friend.name}
        data={friends}
        renderItem={({ item }) => {
            return <Text style={styleSheet.textStyle}>{item.name} Age: {item.age}</Text>;
        }}
    ></FlatList>
};

const styleSheet = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
});

export default ListScreen;