/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import BlackButton from './components/BlackButton';
import LoginScreen from './screens/LoginScreen';

const App = () => {
  return (
    <View style={styles.container}>
      <LoginScreen/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: "white"
  }
});

export default App;
