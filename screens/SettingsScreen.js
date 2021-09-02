import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  useState,
  Image,
  TextInput,
  TouchableOpacity,
  Button,
} from 'react-native';
import GoldTextBox from '../components/GoldTextBox';
import BlackButton from '../components/BlackButton';
import ProfileHeader from '../components/ProfileHeader';
import DropDownMenu from '../components/DropDownMenu';

import Icon from 'react-native-vector-icons/Ionicons';

const SettingsScreen = ({navigation}) => {
  return (
    <SafeAreaView style={[styles.container, {flexDirection: 'column'}]}>
      <ProfileHeader onPress={() => navigation.navigate('Home')} />
      <View style={styles.otherbg}>
        <View style={styles.largeSpacing}></View>
        <Text style={styles.titleText}>My Profile</Text>
        <View style={styles.smallSpacing}></View>
        <View style={styles.insidebg}>
          <View style={styles.newView}>
            <TouchableOpacity style={styles.otherButton}>
              <Text style={styles.newText}>User Settings</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.newView}>
            <TouchableOpacity style={styles.otherButton}>
              <Text style={styles.newText}>Notifications Settings</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.newView}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.text}>Save Changes</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  otherbg: {
    flex: 7,
    backgroundColor: '#8839BF',
  },
  insidebg: {
    alignSelf: 'center',
    backgroundColor: '#D5B537',
    width: '100%',
    height: 600,
    borderRadius: 20,
    paddingTop: 20,
    paddingLeft: 20,
    top: 30,
  },
  text: {
    color: 'white',
  },
  newText: {
    color: 'white',
    fontSize: 20,
  },
  newView: {
    paddingBottom: 10,
    alignItems: 'center',
    right: 10,
  },
  direction: {
    flexDirection: 'row',
  },
  sec: {
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#464444',
    width: 340,
    borderRadius: 50,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    top: 50,
  },
  otherButton: {
    borderRadius: 50,
    height: 40,
    paddingBottom: 10,
    top: 10,
  },
  change: {
    backgroundColor: 'white',
    width: 100,
    borderRadius: 50,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 40,
  },
  another: {
    paddingLeft: 30,
  },
  icon: {
    alignItems: 'center',
    paddingTop: 5,
    justifyContent: 'center',
    paddingBottom: 5,
  },
  titleText: {
    fontSize: 55,
    alignSelf: 'center',
    color: 'white',
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
});

export default SettingsScreen;
