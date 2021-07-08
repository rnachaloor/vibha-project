import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput
} from 'react-native'
import GoldTextBox from '../components/GoldTextBox';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.titleText}>Log In</Text>
        <View style={styles.largeSpacing}></View>
        <GoldTextBox style={[styles.leftAlignment]} text="Username"/>
        <GoldTextBox style={[styles.leftAlignment]} text="Password" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: "#8839BF",
  },
  titleText: {
    fontSize: 48,
    alignSelf: "center",
    color: "white"
  },
  leftAlignment : {
    left: 25
  },
  largeSpacing: {
      height: 25
  }
  
});

export default LoginScreen;
