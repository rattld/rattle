import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Colors from '../constants/Colors';
import Layout from '../constants/Layout';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.textStyle}>Rattld</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: Colors.primaryRed,
    width: Layout.window.width,
    paddingTop: 5,
  },
  textStyle: {
    fontSize: 65,
    fontWeight: 'bold',
    color: '#292929'
  }
});
