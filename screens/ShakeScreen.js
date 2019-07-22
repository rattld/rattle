import React from 'react';
import { ScrollView, StyleSheet, Text, View, Button } from 'react-native';
import * as Speech from 'expo-speech';

export default class ShakeScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  speak = ()=> {
    var thingToSay = 'Hello, person passed to me from context, how are you?';
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
        <Text style={styles.bodyText}>Hello, INSERT NAME FROM CONTEXT, you are on the ShakeScreen</Text>
        <Button onPress ={this.speak} title="Press Me Yo!" />
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
});

{/* <View style={{flex: 1, flexDirection: 'column'}}>
<View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
<View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
<View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
</View> */}