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
} from 'react-native';

import BlackButton from './components/BlackButton';

import LoginScreen from './screens/LoginScreen';
import SignUpDetailsScreen from './screens/SignUpDetailsScreen';
import SignUpScreen from './screens/SignUpScreen';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';

import HomeScreen from './screens/HomeScreen';
import FeedbackScreen from './screens/FeedbackScreen';
import ContactScreen from './screens/ContactScreen';
import RecordScreen from './screens/RecordScreen';
import SponsorScreen from './screens/SponsorScreen';
import CalendarScreen from './screens/CalendarScreen';
import AboutScreen from './screens/AboutScreen';
import TutorListScreen from './screens/TutorListScreen';
import {DrawerContent} from './screens/DrawerContent';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="About" component={AboutScreen} />
        {/*<Drawer.Screen name="Notifications" component={NotificationsScreen} />*/}
        <Drawer.Screen name="Tutor List" component={TutorListScreen} />
        <Drawer.Screen name="Calendar" component={CalendarScreen} />
        <Drawer.Screen name="Records" component={RecordScreen} />
        <Drawer.Screen name="Sponsors" component={SponsorScreen} />
        <Drawer.Screen name="Contact" component={ContactScreen} />
        <Drawer.Screen name="Feedback" component={FeedbackScreen} />
      </Drawer.Navigator>
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
