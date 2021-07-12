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
} from 'react-native';
import GoldTextBox from '../components/GoldTextBox';
import BlackButton from '../components/BlackButton';
import HomeHeader from '../components/HomeHeader';
import DropDownMenu from '../components/DropDownMenu';

const FeedbackScreen = ({navigation}) => {
  return (
    <SafeAreaView style={[styles.container, {flexDirection: 'column'}]}>
      <HomeHeader />
      <View style={styles.otherbg}>
        <View style={styles.largeSpacing}></View>
        <Text style={styles.titleText}>Feedback</Text>
        <View style={styles.largeSpacing}></View>
        <DropDownMenu />
        <View style={styles.largeSpacing}></View>
        <GoldTextBox
          style={[styles.leftAlignment]}
          text="Tutor Name / Tab Name"
        />
        <View style={styles.largeSpacing}></View>
        <Text style={styles.otherAlignment}>Comments</Text>
        <TextInput style={styles.bgTextBox} multiline={true} />
        <View style={styles.largeSpacing}></View>
        <BlackButton text="Submit" style={{alignSelf: 'center'}} />
        <View style={styles.smallSpacing}></View>
        <View style={styles.smallSpacing}></View>
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
  otherbg: {
    flex: 7,
    backgroundColor: '#8839BF',
  },
  titleText: {
    fontSize: 55,
    alignSelf: 'center',
    color: 'white',
  },
  leftAlignment: {
    left: 20,
    fontSize: 16,
  },
  otherAlignment: {
    left: 35,
    fontSize: 16,
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
  headerImage: {
    alignSelf: 'center',
    justifyContent: 'flex-start',
    height: 82,
  },
});

export default FeedbackScreen;
