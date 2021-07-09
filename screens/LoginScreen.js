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
import WhiteButton from '../components/WhiteButton';

const LoginScreen = ({navigation}) => {
  return (
    <SafeAreaView style={[styles.container, {flexDirection: 'column'}]}>
      <View style={styles.mainbg}>
        <Image
          style={styles.headerImage}
          source={require('../images/vlogo_white_bg.png')}
        />
      </View>
      <View style={styles.otherbg}>
        <View style={styles.largeSpacing}></View>
        <Text style={styles.titleText}>Log In</Text>
        <View style={styles.largeSpacing}></View>
        <GoldTextBox style={[styles.leftAlignment]} text="Username" />
        <View style={styles.smallSpacing}></View>
        <GoldTextBox style={[styles.leftAlignment]} text="Password" />
        <View style={styles.largeSpacing}></View>
        <BlackButton text="Log In" style={{alignSelf: 'center'}} />
        <View style={styles.smallSpacing}></View>
        <WhiteButton
          text="Sign Up"
          onPress={() => navigation.navigate('Sign Up')}
          style={{alignSelf: 'center'}}
        />
        <View style={styles.smallSpacing}></View>
        <TouchableOpacity>
          <Text
            style={styles.forgot}
            onPress={() => navigation.navigate('Forgot Password')}>
            Forgot Password?
          </Text>
        </TouchableOpacity>
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
    fontSize: 55,
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
  headerImage: {
    alignSelf: 'center',
    justifyContent: 'flex-start',
    height: 82,
  },
});

export default LoginScreen;
