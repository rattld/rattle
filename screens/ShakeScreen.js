import React, { useContext, useEffect } from 'react';
import { ScrollView, StyleSheet, Text, View, Button } from 'react-native';
import * as Speech from 'expo-speech';

import { NameContext } from '../context/nameContext';

export default function ShakeScreen() {
  
  let context = useContext(NameContext);

  speak = ()=> {
    var message = `Hello, ${context.name}, how are you?`;
    Speech.speak(message);
  }

  useEffect(() => this.speak(), []);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.bodyText}>Hello, {context.name}, you are on the ShakeScreen</Text>
      <Button onPress ={this.speak} title="Press Me Yo!" />
    </ScrollView>
  );
}

ShakeScreen.navigationOptions = {
  title: 'Shakes',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: 15,
    backgroundColor: '#444',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
  },
  bodyText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: "center",
    textAlignVertical: "center",
  },
});
