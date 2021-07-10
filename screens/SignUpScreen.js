import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import GoldTextBox from '../components/GoldTextBox';
import BlackButton from '../components/BlackButton';
import Header from '../components/Header';
import { useState } from 'react';
import { storeData, getData } from "../functions/AsyncFunctions";

const SignUpScreen = ({navigation}) => {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const saveInfo = () => {
    storeData("username", username);
    storeData("email", email);
    storeData("password", password);
    storeData("confirmPassword", confirmPassword);
    navigation.navigate('Details')
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.otherbg}>
        <View style={styles.largeSpacing}></View>
        <Text style={styles.titleText}>Sign Up</Text>
        <View style={styles.largeSpacing}></View>
        <GoldTextBox onChangeText={(value) => setUsername(value)} style={[styles.leftAlignment]} text="Username" />
        <View style={styles.smallSpacing}></View>
        <GoldTextBox
          style={[styles.leftAlignment]}
          text="Email"
          textContentType="emailAddress"
          onChangeText={(value) => setEmail(value)}
        />
        <View style={styles.smallSpacing}></View>
        <GoldTextBox
          style={[styles.leftAlignment]}
          text="Password"
          secureTextEntry={true}
          textContentType="password"
          onChangeText={(value) => setPassword(value)}
        />
        <View style={styles.smallSpacing}></View>
        <GoldTextBox
          style={[styles.leftAlignment]}
          text="Confirm Password"
          secureTextEntry={true}
          textContentType="password"
          onChangeText={(value) => setConfirmPassword(value)}
        />
        <View style={styles.largeSpacing}></View>
        <BlackButton
          onPress={() => saveInfo()}
          text="Next"
          style={{alignSelf: 'center'}}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  mainbg: {
    flex: 1,
    backgroundColor: 'white',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  otherbg: {
    flex: 7,
    backgroundColor: '#8839BF',
  },
  titleText: {
    fontSize: 48,
    alignSelf: 'center',
    color: 'white',
  },
  leftAlignment: {
    left: 25,
  },
  largeSpacing: {
    height: 25,
  },
  smallSpacing: {
    height: 12.5,
  },
  forgot: {
    alignSelf: 'center',
    color: '#F0EEE6',
  },
});

export default SignUpScreen;
