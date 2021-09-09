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
  Alert,
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

import {Avatar} from 'react-native-paper';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import firestore from '@react-native-firebase/firestore';

const ProfileScreen = ({navigation}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [otherModalOpen, setOtherModalOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [newPass, setNewPass] = useState('');
  const [newCPass, setNewCPass] = useState('');
  const [oldPass, setOldPass] = useState('');
  const [ausername, setAUsername] = useState('');
  const [aname, setAName] = useState('');
  const [aemail, setAEmail] = useState('');

  const load = async () => {
    setUsername(await getData('username'));
    setName(await getData('name'));
    setEmail(await getData('email'));
  };

  load();

  const [resourcePath, setResourcePath] = useState({});

  const selectFile = () => {
    console.log(resourcePath.uri);
    var options = {
      title: 'Select Image',
      customButtons: [
        {
          name: 'customOptionKey',
          title: 'Choose file from Custom Option',
        },
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    launchImageLibrary(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = response;
        setResourcePath(source);

        console.log(source);
        findData();
      }
    });
  };

  const findData = async () => {
    const choice = await getData('choice');
    if (choice == 'tutor') {
      firestore()
        .collection('tutors')
        .doc(email)
        .add({profileadd: resourcePath.uri});
    } else {
      firestore()
        .collection('students')
        .doc(email)
        .add({profileadd: resourcePath.uri});
    }
  };

  const newPassw = async () => {
    const ooldp = await getData('password');
    const choice1 = await getData('choice');
    if (ooldp == oldPass) {
      if (newPass == newCPass) {
        storeData('password', newPass);
        if (choice1 == 'tutor') {
          firestore()
            .collection('tutors')
            .doc(email)
            .update({password: newPass})
            .then(() => {
              Alert.alert('SUCCESS', 'Your password was successfully changed.');
              setNewPass('');
              setNewCPass('');
              setOldPass('');
              setModalOpen(false);
            });
        } else {
          firestore()
            .collection('students')
            .doc(email)
            .update({password: newPass})
            .then(() => {
              Alert.alert('SUCCESS', 'Your password was successfully changed.');
              setNewPass('');
              setNewCPass('');
              setOldPass('');
              setModalOpen(false);
            });
        }
      } else {
        Alert.alert(
          'Error',
          'Confirm password and password do not match. Try again.',
        );
      }
    } else {
      Alert.alert('Error', 'Old password does not match. Try again.');
    }
  };

  const newChanges = async () => {
    const choice2 = await getData('choice');
    if (ausername != username && ausername != '') {
      storeData('username', ausername);
      if (choice2 == 'tutor') {
        firestore()
          .collection('tutors')
          .doc(email)
          .update({username: ausername})
          .then(() => {
            Alert.alert('SUCCESS', 'Your username was successfully changed.');
          });
      } else {
        firestore()
          .collection('students')
          .doc(email)
          .update({username: ausername})
          .then(() => {
            Alert.alert('SUCCESS', 'Your username was successfully changed.');
          });
      }
    } else {
      Alert.alert('Error', 'New username is the same as old username.');
    }

    if (aname != name && aname != '') {
      storeData('name', aname);
      if (choice2 == 'tutor') {
        firestore()
          .collection('tutors')
          .doc(email)
          .update({name: aname})
          .then(() => {
            Alert.alert('SUCCESS', 'Your name was successfully changed.');
          });
      } else {
        firestore()
          .collection('students')
          .doc(email)
          .update({name: aname})
          .then(() => {
            Alert.alert('SUCCESS', 'Your name was successfully changed.');
          });
      }
    } else {
      Alert.alert('Error', 'New name is the same as old name.');
    }

    if (aemail != email && aemail != '') {
      storeData('email', aemail);
      const password = await getData('password');
      const name = await getData('name');
      const username = await getData('username');
      const age = await getData('age');
      const grade = await getData('grade');
      const subjects = await getData('subjects');
      const description = await getData('description');
      const lowgrade = await getData('lowgrade');
      const highgrade = await getData('highgrade');
      const times = await getData('times');
      if (choice2 == 'tutor') {
        firestore().collection('tutors').doc(email).delete();

        firestore()
          .collection('tutors')
          .doc(aemail)
          .set({
            name: name,
            username: username,
            password: password,
            email: aemail,
            age: age,
            grade: grade,
            subjects: subjects,
            description: description,
            lowGrade: lowgrade,
            highGrade: highgrade,
            times: times,
          })
          .then(() => {
            Alert.alert('SUCCESS', 'Your data was successfully changed.');
            setAEmail('');
            setAName('');
            setAUsername('');
            setOtherModalOpen(false);
          });
      } else {
        firestore().collection('students').doc(email).delete();
        firestore()
          .collection('students')
          .doc(aemail)
          .set({
            name: name,
            username: username,
            password: password,
            email: aemail,
            age: age,
            grade: grade,
            subjects: subjects,
          })
          .then(() => {
            Alert.alert('SUCCESS', 'Your data was successfully changed.');
            setAEmail('');
            setAName('');
            setAUsername('');
            setOtherModalOpen(false);
          });
      }
    } else {
      Alert.alert('Error', 'New email is the same as old email.');
    }
  };

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
          <PurpleTextBox
            style={[styles.leftAlignment]}
            text="Old Password"
            onChangeText={e => setOldPass(e)}
            value={oldPass}
          />
          <View style={styles.largeSpacing}></View>
          <PurpleTextBox
            style={[styles.leftAlignment]}
            text="New Password"
            onChangeText={e => setNewPass(e)}
            value={newPass}
          />
          <View style={styles.largeSpacing}></View>
          <PurpleTextBox
            style={[styles.leftAlignment]}
            text="Confirm New Password"
            onChangeText={e => setNewCPass(e)}
            value={newCPass}
          />
          <View style={styles.largeSpacing}></View>
          <BlackButton
            text="Submit"
            style={{alignSelf: 'center'}}
            onPress={newPassw}
          />
        </View>
      </Modal>
      <Modal visible={otherModalOpen} animationType="slide">
        <View style={styles.modal}>
          <TouchableOpacity
            style={styles.otherIcon}
            onPress={() => setOtherModalOpen(false)}>
            <Icon name="close" size={30} />
          </TouchableOpacity>
          <Text style={styles.otherText}>User Changes</Text>
          <View style={styles.largeSpacing}></View>
          <PurpleTextBox
            style={[styles.leftAlignment]}
            text="Username"
            onChangeText={e => setAUsername(e)}
            value={ausername}
          />
          <View style={styles.largeSpacing}></View>
          <PurpleTextBox
            style={[styles.leftAlignment]}
            text="Name"
            onChangeText={e => setAName(e)}
            value={aname}
          />
          <View style={styles.largeSpacing}></View>
          <PurpleTextBox
            style={[styles.leftAlignment]}
            text="Email"
            onChangeText={e => setAEmail(e)}
            value={aemail}
          />
          <View style={styles.largeSpacing}></View>
          <BlackButton
            text="Submit"
            style={{alignSelf: 'center'}}
            onPress={newChanges}
          />
        </View>
      </Modal>
      <ProfileHeader onPress={() => navigation.navigate('Home')} />
      <View style={styles.otherbg}>
        <View style={styles.largeSpacing}></View>
        <Text style={styles.titleText}>My Profile</Text>
        <View style={styles.smallSpacing}></View>
        <View style={styles.sec}>
          <Image
            source={{uri: resourcePath.uri}}
            style={{width: 200, height: 200}}
          />
          <TouchableOpacity style={styles.change} onPress={selectFile}>
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

          <TouchableOpacity
            style={styles.button}
            onPress={() => setOtherModalOpen(true)}>
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
