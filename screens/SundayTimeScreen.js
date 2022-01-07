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
} from 'react-native';
import GoldTextBox from '../components/GoldTextBox';
import BlackButton from '../components/BlackButton';
import Header from '../components/Header';

import moment from 'moment';
import Icon from 'react-native-vector-icons/Ionicons';
import {storeData, getData} from '../functions/AsyncFunctions';
import firestore from '@react-native-firebase/firestore';

const SundayTimeScreen = ({navigation}) => {
  const [mail, setMail] = useState('');
  const [times, setTimes] = useState('');

  const load = async () => {
    setMail(await getData('email'));
  };

  load();
  useEffect(() => {
    const subscriber = firestore()
      .collection('tutors')
      .doc(mail)
      .get()
      .then(documentSnapshot => {
        if (documentSnapshot.exists) {
          setTimes(documentSnapshot.data().times);
        }
      });
  });

  return (
    <SafeAreaView style={[styles.container, {flexDirection: 'column'}]}>
      <Header />
      <View style={styles.otherbg}>
        <FlatList data={times} renderItem={({item}) => <Text>{item}</Text>} />
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
  calendar: {
    borderWidth: 3,
    borderColor: '#D5B537',
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
  icon: {
    alignItems: 'center',
    paddingTop: 30,
    justifyContent: 'center',
    paddingBottom: 20,
  },
  modal: {
    flex: 1,
    backgroundColor: '#D5B537',
  },
});

export default SundayTimeScreen;
