import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
} from 'react-native';
import * as Speech from 'expo-speech';

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: '...'
    }
  }

  speak = () => {
    Speech.speak(this.state.name);
  }

  onNameChange = (name) => {
    console.log(this.state.name)
    this.setState({name});
  }

  render() {
    return (
      <View style={styles.container}>
        <Button title="Press to hear some words" onPress={this.speak} />
        <Text style={styles.name}>Hello, {this.state.name} </Text>
        <TextInput value={this.state.name} style={styles.inputField} onChangeText={this.onNameChange} />
      </View>
    );
  }
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