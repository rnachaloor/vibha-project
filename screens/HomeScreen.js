import React, {useState, useEffect} from 'react';
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
import {NavigationContainer, useNavigation} from '@react-navigation/native';

import FeedbackScreen from './FeedbackScreen';
import ContactScreen from './ContactScreen';
import RecordScreen from './RecordScreen';
import SponsorScreen from './SponsorScreen';
import CalendarScreen from './CalendarScreen';
import AboutScreen from './AboutScreen';
import TutorListScreen from './TutorListScreen';
import {DrawerContent} from './DrawerContent';

//import inAppMessaging from '@react-native-firebase/in-app-messaging';
import {storeData, getData} from '../functions/AsyncFunctions';
import {getUserInfo} from '../functions/FirestoreFunctions';
import firestore from '@react-native-firebase/firestore';
import messaging from '@react-native-firebase/messaging';
import { SliderBox } from "react-native-image-slider-box";

const HomeScreen = ({navigation}) => {

  const [email, setEmail] = useState('');
  const [images, setImages] = useState([
        "https://source.unsplash.com/1024x768/?nature",
        "https://source.unsplash.com/1024x768/?water",
        "https://source.unsplash.com/1024x768/?girl",
        "https://source.unsplash.com/1024x768/?tree",
      ])

  const load = async () => {
    setEmail(await getData('email'));
    const subscriber = firestore()
      .collection('tutors')
      .doc(email)
      .get()
      .then(documentSnapshot => {
        if (documentSnapshot.exists) {
          storeData('name', documentSnapshot.data().name);
          storeData('username', documentSnapshot.data().username);
          storeData('password', documentSnapshot.data().password);
          storeData('age', documentSnapshot.data().age);
          storeData('grade', documentSnapshot.data().grade);
          storeData('choice', 'tutor');
          storeData('lowgrade', documentSnapshot.data().lowGrade);
          storeData('highgrade', documentSnapshot.data().highGrade);
          storeData('subjects', documentSnapshot.data().subjects);
          storeData('description', documentSnapshot.data().description);
        } else {
          continue;
        }
      });
    
    const subscriber = firestore()
      .collection('students')
      .doc(email)
      .get()
      .then(documentSnapshot => {
        if (documentSnapshot.exists) {
          storeData('name', documentSnapshot.data().name);
          storeData('username', documentSnapshot.data().username);
          storeData('password', documentSnapshot.data().password);
          storeData('age', documentSnapshot.data().age);
          storeData('grade', documentSnapshot.data().grade);
          storeData('choice', 'student');
          storeData('subjects', documentSnapshot.data().subjects);
        } else {
          continue;
        }
      });

  }

  load();

  return (
    <View style={styles.container}>
      <HomeHeader
        onPress={() => {
          getUserInfo();
          navigation.openDrawer();
        }}
      />
      <View style={styles.otherbg}>
        <Button onPress={console.log('Test')} title="testing" />
        <SliderBox images={images} />
      </View>
      <ScrollView style={styles.insidebg}>
        <Text>Reminders place</Text>
      </ScrollView>
    </View>
  );
};

const Drawer = createDrawerNavigator();

const HomeNavigationScreen = ({navigation}) => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          swipeEnabled: false,
        }}
      />
      <Drawer.Screen
        name="About"
        component={AboutScreen}
        options={{
          swipeEnabled: false,
        }}
      />
      {/*<Drawer.Screen name="Notifications" component={NotificationsScreen} />*/}
      <Drawer.Screen
        name="Tutor List"
        component={TutorListScreen}
        options={{
          swipeEnabled: false,
        }}
      />
      <Drawer.Screen
        name="Calendar"
        component={CalendarScreen}
        options={{
          swipeEnabled: false,
        }}
      />
      <Drawer.Screen
        name="Records"
        component={RecordScreen}
        options={{
          swipeEnabled: false,
        }}
      />
      <Drawer.Screen
        name="Sponsors"
        component={SponsorScreen}
        options={{
          swipeEnabled: false,
        }}
      />
      <Drawer.Screen
        name="Contact"
        component={ContactScreen}
        options={{
          swipeEnabled: false,
        }}
      />
      <Drawer.Screen
        name="Feedback"
        component={FeedbackScreen}
        options={{
          swipeEnabled: false,
        }}
      />
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
  insidebg: {
    alignSelf: 'center',
    backgroundColor: '#D5B537',
    width: '100%',
    height: 500,
    borderRadius: 20,
    paddingTop: 20,
    paddingLeft: 20,
    bottom: 25,
  },
});

export default HomeNavigationScreen;
