import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';

export default function ScreenContainer(props) {
  return <View style={styles.container}>
    {props.children}
  </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.backgroundColor,
  },
});
