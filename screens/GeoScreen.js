import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';

import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

// import RNLocation from 'react-native-location';

export default function GeoScreen() {
  let [location, setLocation] = useState({});
  let [errorMessage, setErrorMessage] = useState('ERROR: ____');

  useEffect(async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      setErrorMessage('Permission to access location was denied');
      // this.setState({
      //   errorMessage: 'Permission to access location was denied',
      // });
    }

    let location = await Location.getCurrentPositionAsync({});
    console.log(location);
    setLocation(location);
  }, []);

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      setErrorMessage('Permission to access location was denied');
    }

    let location = await Location.getCurrentPositionAsync({});
    setLocation(location);
  };

  return (
    <View style={styles.container}>
      <Button title="Update" onPress={_getLocationAsync} />
      {location.coords && (
        <>
          <Text>TIME: {location.timestamp}</Text>
          <Text>ALTITUDE: {location.coords.altitude}</Text>
          <Text>HEADING: {location.coords.heading}</Text>
          <Text>LOGITUDE: {location.coords.longitude}</Text>
          <Text>LATITUDE: {location.coords.latitude}</Text>
          <Text>SPEED: {location.coords.speed}</Text>
          <Text>ACCURACY: {location.coords.accuracy}</Text>
        </>
      )}
    </View>
  );
}

GeoScreen.navigationOptions = {
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
