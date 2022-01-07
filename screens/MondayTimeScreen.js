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
  CheckBox,
} from 'react-native';
import GoldTextBox from '../components/GoldTextBox';
import BlackButton from '../components/BlackButton';
import Header from '../components/Header';

import moment from 'moment';
import Icon from 'react-native-vector-icons/Ionicons';
import {storeData, getData} from '../functions/AsyncFunctions';
import firestore from '@react-native-firebase/firestore';

const MondayTimeScreen = ({navigation}) => {
  const [m1, setM1] = useState(false);
  const [m2, setM2] = useState(false);
  const [m3, setM3] = useState(false);
  const [m4, setM4] = useState(false);
  const [m5, setM5] = useState(false);
  const [m6, setM6] = useState(false);
  const [m7, setM7] = useState(false);

  const submitTimes = async () => {
    let daysCheck = [m1, m2, m3, m4, m5, m6, m7];
    let timeSpot = [
      '4:30 - 5:00',
      '5:15 - 5:45',
      '6:00 - 6:30',
      '6:45 - 7:15',
      '7:30 - 8:15',
      '8:30 - 9:00',
      '9:15 - 9:45',
    ];
    let final = '';

    for (let i = 0; i < 8; i++) {
      let option = daysChecks[i];
      if (option == true) {
        final = final + timeSpot[i] + ', ';
      }
    }

    storeData('mondaytimes', final);

    navigation.navigate('TuesdayTime');
  };

  return (
    <SafeAreaView style={[styles.container, {flexDirection: 'column'}]}>
      <Header />
      <View style={styles.otherbg}>
        <Text style={styles.titleText}>Monday</Text>
        <Text>4:30 - 5:00</Text>
        <CheckBox value={m1} onValueChange={setM1} style={styles.checkbox} />

        <Text>5:15 - 5:45</Text>
        <CheckBox value={m2} onValueChange={setM2} style={styles.checkbox} />

        <Text>6:00 - 6:30</Text>
        <CheckBox value={m3} onValueChange={setM3} style={styles.checkbox} />

        <Text>6:45 - 7:15</Text>
        <CheckBox value={m4} onValueChange={setM4} style={styles.checkbox} />

        <Text>7:30 - 8:00</Text>
        <CheckBox value={m5} onValueChange={setM5} style={styles.checkbox} />

        <Text>8:15 - 8:45</Text>
        <CheckBox value={m6} onValueChange={setM6} style={styles.checkbox} />

        <Text>9:00 - 9:30</Text>
        <CheckBox value={m7} onValueChange={setM7} style={styles.checkbox} />

        <BlackButton
          text="Next"
          onPress={submitTimes}
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
  checkbox: {
    alignSelf: 'center',
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

export default MondayTimeScreen;
