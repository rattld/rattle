import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';

import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

import Colors from '../constants/Colors';
import Layout from '../constants/Layout';
import Navigation from '../constants/Navigation';

import ScreenContainer from '../components/ScreenContainer';
import GeoDetail from '../components/GeoDetail';

export default function GeoScreen() {
  let [location, setLocation] = useState({});

  _getLocationAsync = async () => {
    // Show loading message
    setLocation({});
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    let location = await Location.getCurrentPositionAsync({});
    setLocation(location);
  };

  useEffect(_getLocationAsync, []);

  timeFormat = (time) => {
    let date = new Date(time);

    return `${date.toLocaleDateString()} - ${date.toLocaleTimeString()}`;
  }

  let okToRender = location.timestamp && location.coords;
  return (
    <ScreenContainer>
      <View style={styles.geoDetails}>
        {!okToRender && (
          <>
            <Text>Retrieving location...</Text>
          </>
        )}
        {okToRender && (
              <>
                <GeoDetail title="TIME" content={timeFormat(location.timestamp)} />
                <GeoDetail title="ALTITUDE" content={location.coords.altitude} />
                <GeoDetail title="LONGITUDE" content={location.coords.longitude} />
                <GeoDetail title="LATITUDE" content={location.coords.latitude} />
                <GeoDetail title="ACCURACY" content={location.coords.accuracy} />
              </>
        )}
      </View>

      <View style={styles.butt}>
        <Button title="Update" onPress={_getLocationAsync} />
      </View>
    </ScreenContainer>
  );
}

GeoScreen.navigationOptions = Navigation;

const styles = StyleSheet.create({
  geoDetails: {
    marginTop: 50,
    flex: 2,
    paddingLeft: 5
  },
  butt: {
    padding: 3,
    width: Layout.window.width,
    flex: 3
  }
});
