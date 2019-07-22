import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
} from 'react-native';
import * as Speech from 'expo-speech';

import { MonoText } from '../components/StyledText';

export default function HomeScreen() {
  let [name, setName] = useState('...');

  speak = () => {
    Speech.speak(name);
  }

  onNameChange = (name) => {
    console.log(name)
    setName(name);
  }

  return (
    <View style={styles.container}>
      <Button title="Press to hear some words" onPress={speak} />
      <Text style={styles.name}>Hello, {name} </Text>
      <TextInput value={name} style={styles.inputField} onChangeText={onNameChange} />
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: '#ccc',
    padding: 8,
  },
  name: {
    fontSize: 30,
    color: '#19f',
  },
  inputField: {
    height: 40,
    borderColor: 'red',
    borderWidth: 1,
    color: '#999'
  }
});