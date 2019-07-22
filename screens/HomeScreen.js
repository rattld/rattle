import React, { useContext } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
} from 'react-native';
import * as Speech from 'expo-speech';
import { MonoText } from '../components/StyledText';
import { NameContext } from "../context/nameContext";

export default function HomeScreen() {
  let context = useContext(NameContext);

  speak = () => {
    Speech.speak(context.name);
  }

  return (
    <View style={styles.container}>
      <Button title="Press to hear some words" onPress={speak} />
      <Text style={styles.name}>Hello, {context.name} </Text>
      <TextInput value={context.name} style={styles.inputField} onChangeText={context.updateName} />
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