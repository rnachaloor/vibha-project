import React, {useState, useContext} from 'react';
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
  Button,
} from 'react-native';
import GoldTextBox from '../components/GoldTextBox';
import BlackButton from '../components/BlackButton';
import Header from '../components/Header';
import DropDownPicker from 'react-native-dropdown-picker';
import {AuthContext} from '../AuthProvider';
import {storeData, getData} from '../functions/AsyncFunctions';

const MoreDetailsStuScreen = ({navigation}) => {
  const {register} = useContext(AuthContext);

  const getEmail = async () => {
    const email = await getData('email');
    return email;
  };

  const getPass = async () => {
    const password = await getData('password');
    return password;
  };

  const submit = async () => {
    const email = await getData('email');
    const password = await getData('password');
    register(email, password);
  };

  return (
    <SafeAreaView style={[styles.container, {flexDirection: 'column'}]}>
      <Header />
      <View style={styles.otherbg}>
        <View style={styles.largeSpacing}></View>
        <Text style={styles.titleText}>Sign Up</Text>
        <View style={styles.largeSpacing}></View>
        <View style={styles.largeSpacing}></View>
        <GoldTextBox
          style={[styles.leftAlignment]}
          text="Subjects Help Needed"
        />
        <View style={styles.largeSpacing}></View>
        <View style={styles.largeSpacing}></View>
        <BlackButton
          onPress={() => submit()}
          text="Sign Up"
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
  bgTextBox: {
    backgroundColor: 'white',
    borderRadius: 30,
    paddingLeft: 10,
    width: 350,
    height: 150,
    left: 20,
  },
  dropDown: {
    backgroundColor: 'white',
    width: 150,
    color: 'black',
  },
  otherdropDown: {
    backgroundColor: 'white',
    width: 150,
    color: 'black',
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
    left: 20,
    fontSize: 16,
  },
  largeSpacing: {
    height: 25,
  },
  forgot: {
    alignSelf: 'auto',
    color: 'black',
    fontSize: 20,
    paddingBottom: 20,
  },
  text: {
    color: 'black',
    fontSize: 16,
    left: 35,
  },
});

export default MoreDetailsStuScreen;
