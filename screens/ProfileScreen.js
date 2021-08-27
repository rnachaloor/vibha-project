import React, {useState} from 'react';
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
  Modal,
} from 'react-native';
import PurpleTextBox from '../components/PurpleTextBox';
import BlackButton from '../components/BlackButton';
import ProfileHeader from '../components/ProfileHeader';
import DropDownMenu from '../components/DropDownMenu';

import Icon from 'react-native-vector-icons/Ionicons';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import OtherInfoScreen from './OtherInfoScreen';
import SettingsScreen from './SettingsScreen';
import {storeData, getData} from '../functions/AsyncFunctions';

const ProfileScreen = ({navigation}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const load = async () => {
    setUsername(await getData('username'));
    setName(await getData('name'));
    setEmail(await getData('email'));
  };

  load();

  return (
    <SafeAreaView style={[styles.container, {flexDirection: 'column'}]}>
      <Modal visible={modalOpen} animationType="slide">
        <View style={styles.modal}>
          <TouchableOpacity
            style={styles.otherIcon}
            onPress={() => setModalOpen(false)}>
            <Icon name="close" size={30} />
          </TouchableOpacity>
          <Text style={styles.otherText}>Change Password</Text>
          <View style={styles.largeSpacing}></View>
          <PurpleTextBox style={[styles.leftAlignment]} text="Old Password" />
          <View style={styles.largeSpacing}></View>
          <PurpleTextBox style={[styles.leftAlignment]} text="New Password" />
          <View style={styles.largeSpacing}></View>
          <PurpleTextBox
            style={[styles.leftAlignment]}
            text="Confirm New Password"
          />
          <View style={styles.largeSpacing}></View>
          <BlackButton text="Submit" style={{alignSelf: 'center'}} />
        </View>
      </Modal>
      <ProfileHeader onPress={() => navigation.navigate('Home')} />
      <View style={styles.otherbg}>
        <View style={styles.largeSpacing}></View>
        <Text style={styles.titleText}>My Profile</Text>
        <View style={styles.smallSpacing}></View>
        <View style={styles.sec}>
          <Icon name="person-circle" color="black" size={150} />
          <TouchableOpacity style={styles.change}>
            <Text>Change</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.insidebg}>
          <Text style={styles.forgot}>{'Username: ' + username}</Text>
          <View style={styles.direction}>
            <Text style={styles.forgot}>Password:</Text>
            <View style={styles.another}>
              <TouchableOpacity
                style={styles.otherButton}
                onPress={() => setModalOpen(true)}>
                <Text style={styles.text}>Change Password</Text>
              </TouchableOpacity>
            </View>
          </View>

          <Text style={styles.forgot}>{'Name: ' + name}</Text>
          <Text style={styles.forgot}>{'Email: ' + email}</Text>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>Make Changes</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const Tab = createBottomTabNavigator();

const ProfileNavigationScreen = ({navigation}) => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          position: 'absolute',
          bottom: 10,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: 'white',
          borderRadius: 15,
          height: 70,
        },
      }}>
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Icon name="person-outline" color="black" size={40} />
              <Text style={{fontSize: 15}}>Info</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="OtherInfo"
        component={OtherInfoScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Icon name="information-circle-outline" color="black" size={40} />
              <Text style={{fontSize: 15}}>Other Info</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Icon name="settings-outline" color="black" size={40} />
              <Text style={{fontSize: 15}}>Settings</Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
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
  modal: {
    flex: 1,
    backgroundColor: '#D5B537',
  },
  leftAlignment: {
    left: 25,
  },
  otherText: {
    fontSize: 45,
    alignSelf: 'center',
    color: 'black',
  },
  text: {
    color: 'white',
  },
  direction: {
    flexDirection: 'row',
  },
  sec: {
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#464444',
    width: 340,
    borderRadius: 50,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 5,
  },
  otherButton: {
    backgroundColor: '#464444',
    width: 200,
    borderRadius: 50,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  change: {
    backgroundColor: 'white',
    width: 100,
    borderRadius: 50,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 40,
  },
  another: {
    paddingLeft: 30,
  },
  icon: {
    alignItems: 'center',
    paddingTop: 5,
    justifyContent: 'center',
    paddingBottom: 5,
  },
  otherIcon: {
    alignItems: 'center',
    paddingTop: 20,
    justifyContent: 'center',
    paddingBottom: 20,
  },
  titleText: {
    fontSize: 55,
    alignSelf: 'center',
    color: 'white',
  },
  largeSpacing: {
    height: 25,
  },
  forgot: {
    alignSelf: 'auto',
    color: 'black',
    fontSize: 20,
    paddingBottom: 20,
  },
});

export default ProfileNavigationScreen;
