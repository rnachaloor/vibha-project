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

const TuesdayTimeScreen = ({navigation}) => {
  const [t1, setT1] = useState(false);
  const [t2, setT2] = useState(false);
  const [t3, setT3] = useState(false);
  const [t4, setT4] = useState(false);
  const [t5, setT5] = useState(false);
  const [t6, setT6] = useState(false);
  const [t7, setT7] = useState(false);

  const submitTimes = async () => {
    let daysCheck = [t1, t2, t3, t4, t5, t6, t7];
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

    storeData('tuesdaytimes', final);

    navigation.navigate('WednesdayTime');
  };

  return (
    <SafeAreaView style={[styles.container, {flexDirection: 'column'}]}>
      <Header />
      <View style={styles.otherbg}>
        <Text style={styles.titleText}>Tuesday</Text>
        <Text>4:30 - 5:00</Text>
        <CheckBox value={t1} onValueChange={setT1} style={styles.checkbox} />

        <Text>5:15 - 5:45</Text>
        <CheckBox value={t2} onValueChange={setT2} style={styles.checkbox} />

        <Text>6:00 - 6:30</Text>
        <CheckBox value={t3} onValueChange={setT3} style={styles.checkbox} />

        <Text>6:45 - 7:15</Text>
        <CheckBox value={t4} onValueChange={setT4} style={styles.checkbox} />

        <Text>7:30 - 8:00</Text>
        <CheckBox value={t5} onValueChange={setT5} style={styles.checkbox} />

        <Text>8:15 - 8:45</Text>
        <CheckBox value={t6} onValueChange={setT6} style={styles.checkbox} />

        <Text>9:00 - 9:30</Text>
        <CheckBox value={t7} onValueChange={setT7} style={styles.checkbox} />

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

export default TuesdayTimeScreen;
