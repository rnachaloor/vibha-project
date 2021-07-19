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
  Button,
} from 'react-native';
import GoldTextBox from '../components/GoldTextBox';
import BlackButton from '../components/BlackButton';
import WhiteButton from '../components/WhiteButton';
import HomeHeader from '../components/HomeHeader';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

import FeedbackScreen from './FeedbackScreen';
import ContactScreen from './ContactScreen';
import RecordScreen from './RecordScreen';
import SponsorScreen from './SponsorScreen';
import CalendarScreen from './CalendarScreen';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <HomeHeader onPress={() => navigation.openDrawer()}/>
      <View style={styles.otherbg}>
        <Button
          onPress={() => navigation.navigate('Notifications')}
          title="testing"
        />
      </View>
    </View>
  );
};

const Drawer = createDrawerNavigator();

const HomeNavigationScreen = ({navigation}) => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} />
      {/*<Drawer.Screen name="About" component={AboutScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
        <Drawer.Screen name="Tutor List" component={TutorListScreen} />*/}
      <Drawer.Screen name="Calendar" component={CalendarScreen} />
      <Drawer.Screen name="Records" component={RecordScreen} />
      <Drawer.Screen name="Sponsors" component={SponsorScreen} />
      <Drawer.Screen name="Contact" component={ContactScreen} />
      <Drawer.Screen name="Feedback" component={FeedbackScreen} />
    </Drawer.Navigator>
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
});

export default HomeNavigationScreen;
