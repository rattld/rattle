import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { MonoText } from '../components/StyledText';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <MonoText style={styles.message}>Hello, ...</MonoText>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#ccc',
  },
  message: {
    fontSize: 30,
    color: '#19f',
  }
});
