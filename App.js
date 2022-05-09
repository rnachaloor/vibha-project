/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import React, {useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  Alert,
} from 'react-native';

import BlackButton from './components/BlackButton';

import LoginScreen from './screens/LoginScreen';
import SignUpDetailsScreen from './screens/SignUpDetailsScreen';
import SignUpScreen from './screens/SignUpScreen';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';
import MoreDetailsTutorScreen from './screens/MoreDetailsTutorScreen';
import MoreDetailsStuScreen from './screens/MoreDetailsStuScreen';
import TimeSelectScreen from './screens/TimeSelectScreen';
import TutorSelectScreen from './screens/TutorSelectScreen';
import MondayTimeScreen from './screens/MondayTimeScreen';
import TuesdayTimeScreen from './screens/TuesdayTimeScreen';
import WednesdayTimeScreen from './screens/WednesdayTimeScreen';
import ThursdayTimeScreen from './screens/ThursdayTimeScreen';
import FridayTimeScreen from './screens/FridayTimeScreen';
import SaturdayTimeScreen from './screens/SaturdayTimeScreen';
import SundayTimeScreen from './screens/SundayTimeScreen';
import ConfirmAppointmentScreen from './screens/ConfirmAppointmentScreen';

import HomeNavigationScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import messaging from '@react-native-firebase/messaging';

const Stack = createStackNavigator();

export const LoginStackScreen = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Sign Up" component={SignUpScreen} />
      <Stack.Screen name="Details" component={SignUpDetailsScreen} />
      <Stack.Screen name="MoreDetails" component={MoreDetailsTutorScreen} />
      <Stack.Screen name="MoreStuDetails" component={MoreDetailsStuScreen} />
      <Stack.Screen name="MondayTime" component={MondayTimeScreen} />
      <Stack.Screen name="TuesdayTime" component={TuesdayTimeScreen} />
      <Stack.Screen name="WednesdayTime" component={WednesdayTimeScreen} />
      <Stack.Screen name="ThursdayTime" component={ThursdayTimeScreen} />
      <Stack.Screen name="FridayTime" component={FridayTimeScreen} />
      <Stack.Screen name="SaturdayTime" component={SaturdayTimeScreen} />
      <Stack.Screen name="SundayTime" component={SundayTimeScreen} />
      <Stack.Screen name="Forgot Password" component={ForgotPasswordScreen} />
    </Stack.Navigator>
  );
};

export const HomeStackScreen = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeNavigationScreen} />
      <Stack.Screen name="Details" component={SignUpDetailsScreen} />
      <Stack.Screen name="MoreDetails" component={MoreDetailsTutorScreen} />
      <Stack.Screen name="MoreStuDetails" component={MoreDetailsStuScreen} />
      <Stack.Screen name="MondayTime" component={MondayTimeScreen} />
      <Stack.Screen name="TuesdayTime" component={TuesdayTimeScreen} />
      <Stack.Screen name="WednesdayTime" component={WednesdayTimeScreen} />
      <Stack.Screen name="ThursdayTime" component={ThursdayTimeScreen} />
      <Stack.Screen name="FridayTime" component={FridayTimeScreen} />
      <Stack.Screen name="SaturdayTIme" component={SaturdayTimeScreen} />
      <Stack.Screen name="SundayTime" component={SundayTimeScreen} />
      <Stack.Screen name="Forgot Password" component={ForgotPasswordScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="TutorSelect" component={TutorSelectScreen} />
      <Stack.Screen name="TimeSelect" component={TimeSelectScreen} />
      <Stack.Screen name='ConfirmApp' component={ConfirmAppointmentScreen} />
    </Stack.Navigator>
  );
};

const App = () => {
  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });

    return unsubscribe;
  }, []);
  return (
    <View style={styles.container}>
      <HomeStackScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerImage: {
    alignSelf: 'center',
    justifyContent: 'flex-start',
    height: 82,
  },
});

export default App;
