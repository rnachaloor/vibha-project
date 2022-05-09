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
import HomeHeader from '../components/HomeHeader';
import DropDownMenu from '../components/DropDownMenu';

const AboutScreen = ({navigation}) => {
  return (
    <SafeAreaView style={[styles.container, {flexDirection: 'column'}]}>
      <HomeHeader onPress={() => navigation.openDrawer()} />
      <View style={styles.otherbg}>
        <View style={styles.smallSpacing}></View>
        <Text style={styles.titleText}>About</Text>
        <View style={styles.smallSpacing}></View>
        <View style={styles.insidebg}>
          <Text style={styles.subTitle}>App</Text>
          <View style={styles.smallSpacing}></View>
          <Text style={styles.text}>
            We are a{' '}
            <Text style={{fontWeight: 'bold'}}>
              volunteer-driven, non-profit
            </Text>{' '}
            social catalyst that seeds, grows and scales solutions to systemic
            problems affecting children.
          </Text>
          <View style={styles.largeSpacing}></View>
          <Text style={styles.text}>
            We act as a catalyst, partnering with{' '}
            <Text style={{fontWeight: 'bold'}}>social change-makers</Text> like
            entrepreneurs, donors, government agencies, corporate companies or
            volunteers; we call them our{' '}
            <Text style={{fontWeight: 'bold'}}>Partners for Change</Text>.
            Together, we work out viable solutions for addressing the various
            problems afflicting the lives of the children less fortunate.
          </Text>
          <View style={styles.largeSpacing}></View>
          <Text style={styles.text}>
            When we <Text style={{fontWeight: 'bold'}}>empower</Text> people, we
            set them free. We make them capable of{' '}
            <Text style={{fontWeight: 'bold'}}>finding solutions</Text> to
            problems and putting them to effect.
          </Text>
          <View style={styles.largeSpacing}></View>
          <Text style={styles.text}>
            Our goal through this app is to{' '}
            <Text style={{fontWeight: 'bold'}}>encourage students</Text> who
            need help to come and ask for help. We bring tutors of all different{' '}
            <Text style={{fontWeight: 'bold'}}>calibers</Text> to help educate
            students in need.
          </Text>
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
    width: 380,
    height: 600,
    borderRadius: 20,
    paddingTop: 20,
  },
  titleText: {
    fontSize: 55,
    alignSelf: 'center',
    color: 'white',
  },
  largeSpacing: {
    height: 25,
  },
  smallSpacing: {
    height: 12.5,
  },
  text: {
    fontSize: 17,
    paddingLeft: 10,
  },
  subTitle: {
    fontSize: 35,
    alignSelf: 'center',
  },
});

export default AboutScreen;
