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
  Button
} from 'react-native';
import GoldTextBox from '../components/GoldTextBox';
import BlackButton from '../components/BlackButton';
import WhiteButton from '../components/WhiteButton';
import Header from '../components/Header';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="testing"
      />
    </View>
  );
}

const Drawer = createDrawerNavigator();

const HomeNavigationScreen = ({navigation}) => {
  return (
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        {/*<Drawer.Screen name="About" component={AboutScreen} />
        <Drawer.Screen name="Notifications" component={TutorListScreen} />
        <Drawer.Screen name="Tutor List" component={TutorListScreen} />
        <Drawer.Screen name="Calendar" component={CalendarScreen} />
        <Drawer.Screen name="Records" component={RecordsScreen} />
        <Drawer.Screen name="Contact" component={NotificationsScreen} />
        <Drawer.Screen name="Sponsors" component={NotificationsScreen} />
        <Drawer.Screen name="Feedback" component={NotificationsScreen} />*/}
      </Drawer.Navigator>
  );
}

export default HomeNavigationScreen;