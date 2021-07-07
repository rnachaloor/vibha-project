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
import SpecialTextBox from './components/SpecialTextBox';

const App = () => {
  return (
    <View style={styles.container}>
      <Text>Hi</Text>
      <SpecialTextBox/>
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
