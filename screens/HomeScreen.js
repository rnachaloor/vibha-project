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
import {NavigationContainer} from '@react-navigation/native';

import FeedbackScreen from './FeedbackScreen';
import ContactScreen from './ContactScreen';
import RecordScreen from './RecordScreen';
import SponsorScreen from './SponsorScreen';
import CalendarScreen from './CalendarScreen';
import AboutScreen from './AboutScreen';
import TutorListScreen from './TutorListScreen';
import {DrawerContent} from './DrawerContent';

import {LocalNotification} from '../services/LocalPushController';
import RemotePushController from '../services/RemotePushController';

import inAppMessaging from '@react-native-firebase/in-app-messaging';
import {storeData, getData} from '../functions/AsyncFunctions';
import {getUserInfo} from '../functions/FirestoreFunctions';
import messaging from '@react-native-firebase/messaging';

const HomeScreen = ({navigation}) => {
  const handleButtonPress = () => {
    LocalNotification();
  };

  const [canReceiveMessage, setCanReceiveMessage] = useState(true);

  const allowToReceiveMessage = async isAllowed => {
    setCanReceiveMessage(isAllowed);
    // Allow/Disallow user to receive messages
    await inAppMessaging().setMessagesDisplaySuppressed(isAllowed);
  };

  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });

    return unsubscribe;
  }, []);

  return (
    <View style={styles.container}>
      <HomeHeader
        onPress={() => {
          getUserInfo();
          navigation.openDrawer();
        }}
      />
      <View style={styles.otherbg}>
        <Button onPress={handleButtonPress} title="testing" />
        <Text>
          User Can Receive Message : {canReceiveMessage ? 'Yes' : 'No'}
        </Text>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => allowToReceiveMessage(!canReceiveMessage)}>
          <Text>
            {canReceiveMessage
              ? 'Disable Receiving Message'
              : 'Enable Receiving Message'}
          </Text>
        </TouchableOpacity>
      </View>
      <RemotePushController />
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
});

export default HomeNavigationScreen;
