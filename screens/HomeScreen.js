import React, { useContext } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';

import Navigation from '../constants/Navigation';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';

import { NameContext } from "../context/nameContext";

import ScreenContainer from '../components/ScreenContainer';

export default function HomeScreen() {
  let context = useContext(NameContext);

  return (
      <ScreenContainer>
        <View style={styles.greeting}>
          <Text style={styles.message}>Hello, {context.name} </Text>
        </View>

        <View style={styles.form}>
          <TextInput style={styles.inputField} value={context.name} onChangeText={context.updateName} />
        </View>
      </ScreenContainer>
  );
}

HomeScreen.navigationOptions = Navigation;

const styles = StyleSheet.create({
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
    color: Colors.white,
  },
  inputField: {
    fontSize: 30,
    height: 40,
    paddingLeft: 7,
    color: Colors.white,
    borderColor: Colors.primaryBlue,
    borderWidth: 3,
  }
});
