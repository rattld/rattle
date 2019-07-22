import React from 'react';
import { ScrollView, StyleSheet, Text, View, Button } from 'react-native';
import * as Speech from 'expo-speech';
import { NameContext } from "../context/nameContext";

export default class ShakeScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }
  static contextType = NameContext;

  speak = ()=> {
    var thingToSay = `Hello ${this.context.name}, how are you?`;
    Speech.speak(thingToSay);
  }

  componentDidMount(){
    this.speak();
  }



  render() { 
    return (
      <ScrollView style={styles.container}>
        {/**
        * Go ahead and delete ExpoLinksView and replace it with your content;
        * we just wanted to provide you with some helpful links.
        */}
        {/* <ExpoLinksView /> */}
        <View style={{width: 50, height: 100, backgroundColor: '#444'}} />
        <Text style={styles.bodyText}>Hello, {this.context.name}, you are on the ShakeScreen</Text>
        <View style={{width: 50, height: 50, backgroundColor: '#444'}} />
        <View style={styles.buttonStyle}>
        <Button onPress ={this.speak} title="Press Me Yo!" color="black" />
        </View>
      </ScrollView>
    );
  }
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
  buttonStyle: {
    width: 150,
    backgroundColor: 'white',
    alignSelf: "center"
  }
});

{/* <View style={{flex: 1, flexDirection: 'column'}}>
<View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
<View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
<View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
</View> */}