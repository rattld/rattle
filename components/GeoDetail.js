import * as React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function GeoDetail(props) {
  return (
    <Text style={styles.detail}><Text style={styles.title}>{props.title}:</Text> {props.content}</Text>
  );
}

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold'
  },
  detail: {
    fontSize: 20,
    marginBottom: 10
  }
});
