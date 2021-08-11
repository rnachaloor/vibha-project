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
import TimeChoiceScreen from './screens/TimeChoiceScreen';

import HomeNavigationScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';

import messaging from '@react-native-firebase/messaging';

const Stack = createStackNavigator();

const LoginStackScreen = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Sign Up" component={SignUpScreen} />
      <Stack.Screen name="Details" component={SignUpDetailsScreen} />
      <Stack.Screen name="MoreDetails" component={MoreDetailsTutorScreen} />
      <Stack.Screen name="MoreStuDetails" component={MoreDetailsStuScreen} />
      <Stack.Screen name="TimeChoice" component={TimeChoiceScreen} />
      <Stack.Screen name="Forgot Password" component={ForgotPasswordScreen} />
      <Stack.Screen name="Home" component={HomeNavigationScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
};

async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization Status: ', authStatus);
  }
}

const App = () => {
  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });

    return unsubscribe;
  }, []);

  return (
    <NavigationContainer>
      <View style={styles.container}>
        <LoginStackScreen />
      </View>
    </NavigationContainer>
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
