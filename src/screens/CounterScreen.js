import React, {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';


const CounterScreen = () => {
    cont [count, setCount] = useState(0);
    return <View>
        <Button 
        title="Increase"
        onPress={()=>{
            setCount(count+1);
        }} />
        <Button 
        title="Decrease"
        onPress={()=>{
            setCount(count-1);
        }} />
        <Text>This is inside counter demo</Text>
    </View>
}

const styleSheet = StyleSheet.create(() => {
    return {
        fontSize: 30
    }
})

export default CounterScreen;