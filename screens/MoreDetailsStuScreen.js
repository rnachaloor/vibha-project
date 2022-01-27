import React, {useState, useContext} from 'react';
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
import ProfileHeader from '../components/ProfileHeader';
import DropDownPicker from 'react-native-dropdown-picker';
import {AuthContext} from '../AuthProvider';
import {storeData, getData} from '../functions/AsyncFunctions';
import firestore from '@react-native-firebase/firestore';

const MoreDetailsStuScreen = ({navigation}) => {
  const {register} = useContext(AuthContext);
  const [subjects, setSubjects] = useState('');

  const getEmail = async () => {
    const email = await getData('email');
    return email;
  };

  const getPass = async () => {
    const password = await getData('password');
    return password;
  };

  const submit = async () => {
    const email = await getData('email');
    const password = await getData('password');
    const name = await getData('name');
    const username = await getData('username');
    const age = await getData('age');
    const grade = await getData('grade');
    const subjects = await getData('subjects');
    firestore()
      .collection('students')
      .doc(username)
      .set({
        name: name,
        username: username,
        password: password,
        email: email,
        age: age,
        grade: grade,
        subjects: subjects,
        appointmentDay: '',
        appointmentTime: '',
        tutorChosen: '',
      })
      .then(() => {
        console.log('SUCCESS');
        navigation.navigate('Home');
      });
    register(email, password);
  };

  return (
    <SafeAreaView style={[styles.container, {flexDirection: 'column'}]}>
      <ProfileHeader onPress={() => navigation.goBack()}/>
      <View style={styles.otherbg}>
        <View style={styles.largeSpacing}></View>
        <Text style={styles.titleText}>Sign Up</Text>
        <View style={styles.largeSpacing}></View>
        <View style={styles.largeSpacing}></View>
        <GoldTextBox
          style={[styles.leftAlignment]}
          text="Subjects Help Needed"
          onChangeText={value => setSubjects(value)}
        />
        <View style={styles.largeSpacing}></View>
        <View style={styles.largeSpacing}></View>
        <BlackButton
          onPress={() => {
            storeData('subjects', subjects);
            submit();
          }}
          text="Sign Up"
          style={{alignSelf: 'center'}}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  bgTextBox: {
    backgroundColor: 'white',
    borderRadius: 30,
    paddingLeft: 10,
    width: 350,
    height: 150,
    left: 20,
  },
  dropDown: {
    backgroundColor: 'white',
    width: 150,
    color: 'black',
  },
  otherdropDown: {
    backgroundColor: 'white',
    width: 150,
    color: 'black',
  },
  otherbg: {
    flex: 7,
    backgroundColor: '#8839BF',
  },
  titleText: {
    fontSize: 48,
    alignSelf: 'center',
    color: 'white',
  },
  leftAlignment: {
    left: 20,
    fontSize: 16,
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
  text: {
    color: 'black',
    fontSize: 16,
    left: 35,
  },
});

export default MoreDetailsStuScreen;
