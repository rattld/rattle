import React, { useContext, useEffect} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import * as Speech from 'expo-speech';

import { NameContext } from '../context/nameContext';
import Navigation from '../constants/Navigation';

import Colors from '../constants/Colors';
import Layout from '../constants/Layout';

export default function SpeakScreen() {
  let context = useContext(NameContext);
  let messages = [
    `Hello ${context.name}, how are you?`,
    `Are you serious?!`
  ]

  getRandomMessage = () =>  messages[Math.floor(Math.random() * messages.length)]

  speak = (msg) => {
    let message = '';

    if(!msg) message = getRandomMessage();
    else message = msg;
    Speech.speak(message);
  }

  useEffect(() => this.speak(messages[0]), []);
  handlePress = () => this.speak();

  return (
    <View style={styles.container}>

      <View style={styles.greeting}>
        <Text style={styles.bodyText}>{messages[0]}</Text>
      </View >

      <View style={styles.butt}>
        <Button onPress ={handlePress} title="Press Me Yo!" />
      </View>

    </View>
  );
}

SpeakScreen.navigationOptions = Navigation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Colors.backgroundColor,
  },
  greeting: {
    marginTop: 50,
    flex: 2,
  },
  butt: {
    padding: 3,
    width: Layout.window.width,
    flex: 3,
  },
  bodyText: {
    color: Colors.white,
    fontWeight: 'bold',
    fontSize: 55,
    textAlign: "center",
  },
});
