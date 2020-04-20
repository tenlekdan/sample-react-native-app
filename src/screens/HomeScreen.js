import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return <View>
    <Text style={styles.text}>Hola Senorita, Senores testing!</Text>
    <Button
      onPress={() => navigation.navigate('Components')}
      title="Go to components demo"
      style={styles.margin}
    />

    <Button
      title="Go to List demo"
      onPress={() => navigation.navigate('Lists')}
      style={styles.margin}

    />

    <Button
      title="Go to image Component"
      onPress={() => navigation.navigate('Image')}
      style={styles.margin}

    />

    <Button
      title="Go to Counter demo"
      onPress={()=>navigation.navigate('Counter')}
      style={styles.margin}

    />

    <Button
      title="Go to Color Screen"
      onPress = {()=>navigation.navigate('Color')} />
  </View>
};

const styles = StyleSheet.create({
  margin: {
    marginVertical: 10
  },
  text: {
    fontSize: 20
  }
});

export default HomeScreen;
