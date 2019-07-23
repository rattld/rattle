import * as React from 'react';
import { Text, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';

export default function GeoDetail(props) {
  return (
    <Text style={styles.detail}><Text style={styles.title}>{props.title}:</Text> {props.content}</Text>
  );
}

const styles = StyleSheet.create({
  title: {
    color: Colors.primaryBlue,
    fontWeight: 'bold'
  },
  detail: {
    fontSize: 20,
    marginBottom: 10
  }
});
