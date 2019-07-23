import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';

import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import GeoDetail from '../components/GeoDetail';

export default function GeoScreen() {
  let [location, setLocation] = useState({});

  _getLocationAsync = async () => {
    // Show retrieving message
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
    <View style={styles.container}>
      <View style={styles.header}><Text>Rattld</Text></View>

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

    </View>
  );
}

GeoScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    backgroundColor: '#ccc',
    padding: 10,
  },
  header: {
    flex: 3
  },
  geoDetails: {
    flex: 4,
  },
  butt: {
    flex: 5
  }
});
