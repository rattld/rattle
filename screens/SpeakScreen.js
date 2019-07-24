import React, { useContext, useEffect, useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import * as Speech from 'expo-speech';

import Navigation from '../constants/Navigation';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';
import { DeviceMotion } from 'expo-sensors';

import { NameContext } from '../context/nameContext';

import ScreenContainer from '../components/ScreenContainer';

export default function SpeakScreen() {
  let context = useContext(NameContext);
  const [dm, setDM] = useState(null);
  
  let messages = [
    `Hello ${context.name}, how are you?`,
    `Are you serious?!`,
    `${context.name}, please try something else`,
    `What can I help you with sweetie`,
    `Yeah, I get it ${context.name}, you da man..., or woman`,
    `Why are you doing this to me, haven't I been good to you ${context.name}?`,
    `Alright ${context.name}, press me again and I'll beat you with a half eaten peperoni stick`,
    `Okay, I know you live a lonely life and have no one to talk to. Here's some advice, don't accept any wooden nickels from no one, yo`
  ]

  getRandomMessage = () =>  messages[Math.floor(Math.random() * messages.length)]

  speak = (msg) => {
    let message = '';

    if(!msg) message = getRandomMessage();
    else message = msg;
    Speech.speak(message);
  }

  useEffect(() => this.speak(messages[0]), []);
  useEffect(() => {
    DeviceMotion.setUpdateInterval(300);
    DeviceMotion.addListener( motion => {
      
      if(motion.acceleration.y>3 || motion.acceleration.z>4 || motion.acceleration.x>2){ 
        let accel = `X: ${motion.acceleration.x} Y: ${motion.acceleration.y} Z: ${motion.acceleration.z}`
        setDM(accel);
        this.speak(`Hey what the hell, stop shaking me!`);
      }

    });
  },[]);


  handlePress = () => this.speak();

  return (
    <ScreenContainer>
      <View style={styles.greeting}>
        <Text style={styles.bodyText}>{messages[0]}</Text>
      </View >

      <View style={styles.butt}>
        <Button onPress ={handlePress} title="Press Me Yo!" />
      </View>
      <Text>{dm}</Text>
    </ScreenContainer>
  );
}

SpeakScreen.navigationOptions = Navigation;

const styles = StyleSheet.create({
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
