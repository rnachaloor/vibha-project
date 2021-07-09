import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native'
import GoldTextBox from '../components/GoldTextBox';
import BlackButton from '../components/BlackButton';

const SignUpScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
        <View style={styles.largeSpacing}></View>
        <Text style={styles.titleText}>Sign Up</Text>
        <View style={styles.largeSpacing}></View>
        <GoldTextBox style={[styles.leftAlignment]} text="Username"/>
        <View style={styles.smallSpacing}></View>
        <GoldTextBox style={[styles.leftAlignment]} text="Email" textContentType="emailAddress"/>
        <View style={styles.smallSpacing}></View>
        <GoldTextBox style={[styles.leftAlignment]} text="Password" secureTextEntry={true} textContentType="password"/>
        <View style={styles.smallSpacing}></View>
        <GoldTextBox style={[styles.leftAlignment]} text="Confirm Password" secureTextEntry={true} textContentType="password"/>
        <View style={styles.largeSpacing}></View>
        <BlackButton onPress={() => navigation.navigate("Details")} text="Next" style={{alignSelf: "center"}}/>
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
  },
  smallSpacing: {
      height: 12.5
  },
  forgot: {
      alignSelf: "center",
      color: "#F0EEE6"
  }
  
});

export default SignUpScreen;
