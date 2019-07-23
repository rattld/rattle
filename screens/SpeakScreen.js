import React, { useContext, useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View, Button } from 'react-native';
import * as Speech from 'expo-speech';
import Header from '../components/Header';
import { DeviceMotion } from 'expo-sensors';


import { NameContext } from '../context/nameContext';

export default function SpeakScreen() {
  
  let context = useContext(NameContext);
  const [dm, setDM] = useState(null);

  speak = ()=> {
    let message = `Hello ${context.name}, how are you?`;
    Speech.speak(message);
  }

  // useEffect(() => this.speak(), []);
  useEffect(() => {
    speak();
    DeviceMotion.addListener( motion => {
      setDM(motion);
    });
  });

  handleDeviceMotion = (e)=>{
    speak();
  }

  // DeviceMotion.setUpdateInterval(100)
  // DeviceMotion.addListener(handleDeviceMotion)

  // if(dm) {

  // }

  return (
    <View style={styles.container}>
      <View><Header /></View>

      <View style={{width: 50, height: 100, backgroundColor: '#444'}} />
        <Text style={styles.bodyText}>Hello {context.name}, you are on the SpeakScreen</Text>
      <View style={{width: 50, height: 50, backgroundColor: '#444'}} />

      <View style={styles.buttonStyle}>
        <Button onPress ={speak} title="Press Me Yo!" color="black" />
        <Text>{dm? dm.acceleration.x: 'nothing'}</Text>
      </View>

    </View>
  );
}

SpeakScreen.navigationOptions = {
  title: 'Speaks',
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
  buttonStyle: {
    width: 150,
    backgroundColor: 'white',
    alignSelf: "center"
  }
});
