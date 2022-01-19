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
  Modal,
  FlatList,
  Alert,
} from 'react-native';
import GoldTextBox from '../components/GoldTextBox';
import BlackButton from '../components/BlackButton';
import Header from '../components/Header';

import moment from 'moment';
import Icon from 'react-native-vector-icons/Ionicons';
import {storeData, getData} from '../functions/AsyncFunctions';
import firestore from '@react-native-firebase/firestore';

const ConfirmAppointmentScreen = ({navigation}) => {
  const [aday, setADay] = useState('');
  const [time, setTime] = useState('');
  const [tut, setTut] = useState('');
  const [email, setEmail] = useState('');

  const load = async () => {
    const dayChoice = await getData('datesel');
    setADay(dayChoice);

    const timeChoice = await getData('timesel')
    setTime(timeChoice);

    const tutorChoice = await getData('schedtut');
    setTut(tutorChoice);

    const emailSet = await getData('email');
    setEmail(emailset);
  }

  const finalizeTime = async () => {
    firestore()
      .collection('students')
      .doc(email)
      .set({
        appointmentDay: aday,
        appointmentTime: time,
      })
      .then(() => {
        Alert.alert('Thanks', "Your appointment was successfully scheduled.");
        navigation.navigate('Home');
      });
  }

  load();
  return (
    <SafeAreaView style={[styles.container, {flexDirection: 'column'}]}>
      <Header />
      <View style={styles.otherbg}>
        <Text>{aday}</Text>
        <Text>{time}</Text>
        <Text>{tut}</Text>

        <BlackButton
          text="Confirm"
          onPress={finalizeTime}
          style={{alignSelf: 'center', paddingTop: 20}}
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
  otherbg: {
    flex: 7,
    backgroundColor: '#8839BF',
  },
  titleText: {
    fontSize: 55,
    alignSelf: 'center',
    color: 'white',
  },
  otherText: {
    fontSize: 50,
    alignSelf: 'center',
    color: 'black',
  },
  largeSpacing: {
    height: 25,
  },
  text: {
    color: 'white',
  },
});

export default ConfirmAppointmentScreen;
