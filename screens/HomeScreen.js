import React, { useContext } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
} from 'react-native';
import { NameContext } from "../context/nameContext";
import Header from '../components/Header';

export default function HomeScreen() {
  let context = useContext(NameContext);

  return (
    <View style={styles.container}>
      <View><Header /></View>
      <Text style={styles.greeting}>Hello, {context.name} </Text>
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
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#ccc',
    padding: 8,
  },
  greeting: {
    fontSize: 55,
    color: '#19f',
  },
  inputField: {
    fontSize: 30,
    height: 40,
    width: 350,
    marginTop: 30,
    marginBottom: 100,
    // paddingLeft: 5,
    padding: 15,
    borderColor: '#f12',
    borderWidth: 1,
    color: '#19f'
  }
});