import React, { useContext } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';
import { NameContext } from "../context/nameContext";
import Header from '../components/Header';

import Colors from '../constants/Colors';
import Layout from '../constants/Layout';

export default function HomeScreen() {
  let context = useContext(NameContext);

  return (
    <View style={styles.container}>

      <Header />

      <View style={styles.greeting}>
        <Text style={styles.message}>Hello, {context.name} </Text>
      </View>

      <View style={styles.form}>
        <TextInput style={styles.inputField} value={context.name} onChangeText={context.updateName} />
      </View>

    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.backgroundColor,
  },
  greeting: {
    marginTop: 50,
    flex: 1,
  },
  form: {
    flex: 4,
    width: Layout.window.width,
    marginTop: 10,
    padding: 5
  },
  message: {
    fontSize: 55,
    color: Colors.primaryBlue,
  },
  inputField: {
    fontSize: 30,
    height: 40,
    paddingLeft: 7,
    color: Colors.primaryBlue,
    borderColor: Colors.primaryRed,
    borderWidth: 1,
  }
});
