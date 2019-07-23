import React from 'react';
import { View, StyleSheet, Text } from 'react-native';


export default function Header() {
  return (
    
      <Text style={styles.headerStyle}>Rattld</Text>
    
  );
}

const styles = StyleSheet.create({
  headerStyle: {
    fontSize: 65,
    fontWeight: 'bold'
  }
})