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

const SaturdayTimeScreen = ({navigation}) => {
  const [s1, setS1] = useState(false);
  const [s2, setS2] = useState(false);
  const [s3, setS3] = useState(false);
  const [s4, setS4] = useState(false);
  const [s5, setS5] = useState(false);
  const [s6, setS6] = useState(false);
  const [s7, setS7] = useState(false);
  const [s8, setS8] = useState(false);
  const [s9, setS9] = useState(false);
  const [s10, setS10] = useState(false);
  const [s11, setS11] = useState(false);
  const [s12, setS12] = useState(false);
  const [s13, setS13] = useState(false);
  const [s14, setS14] = useState(false);
  const [s15, setS15] = useState(false);
  const [s16, setS16] = useState(false);
  const [s17, setS17] = useState(false);


  const submitTimes = async () => {
    let daysCheck = [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13, s14, s15, s16, s17];
    let timeSpot = [
      '9:00 - 9:30',
      '9:45 - 10:15',
      '10:30 - 11:00',
      '11:15 - 11:45',
      '12:00 - 12:30',
      '12:45 - 1:15',
      '1:30 - 2:00',
      '2:15 - 2:45',
      '3:00 - 3:30',
      '3:45 - 4:15',
      '4:30 - 5:00',
      '5:15 - 5:45',
      '6:00 - 6:30',
      '6:45 - 7:15',
      '7:30 - 8:00',
      '8:15 - 8:45',
      '9:00 - 9:30'
    ];
    let final = '';

    for (let i = 0; i < 18; i++) {
      let option = daysChecks[i];
      if (option == true) {
        final = final + timeSpot[i] + ', ';
      }
    }

    storeData('saturdaytimes', final);

    navigation.navigate('SundayTime');
  };

  return (
    <SafeAreaView style={[styles.container, {flexDirection: 'column'}]}>
      <Header />
      <View style={styles.otherbg}>
        <Text style={styles.titleText}>Saturday</Text>
        <Text>9:00 - 9:30</Text>
        <CheckBox value={f1} onValueChange={setF1} style={styles.checkbox} />

        <Text>9:45 - 10:15</Text>
        <CheckBox value={f1} onValueChange={setF2} style={styles.checkbox} />

        <Text>10:30 - 11:00</Text>
        <CheckBox value={f1} onValueChange={setF3} style={styles.checkbox} />

        <Text>11:15 - 11:45</Text>
        <CheckBox value={f1} onValueChange={setF4} style={styles.checkbox} />

        <Text>12:00 - 12:30</Text>
        <CheckBox value={f1} onValueChange={setF5} style={styles.checkbox} />

        <Text>12:45 - 1:15</Text>
        <CheckBox value={f1} onValueChange={setF6} style={styles.checkbox} />

        <Text>1:30 - 2:00</Text>
        <CheckBox value={f1} onValueChange={setF7} style={styles.checkbox} />

        <Text>2:15 - 2:45</Text>
        <CheckBox value={f1} onValueChange={setF8} style={styles.checkbox} />

        <Text>3:00 - 3:30</Text>
        <CheckBox value={f1} onValueChange={setF9} style={styles.checkbox} />

        <Text>3:45 - 4:15</Text>
        <CheckBox value={f1} onValueChange={setF10} style={styles.checkbox} />

        <Text>4:30 - 5:00</Text>
        <CheckBox value={f1} onValueChange={setF11} style={styles.checkbox} />

        <Text>5:15 - 5:45</Text>
        <CheckBox value={f2} onValueChange={setF12} style={styles.checkbox} />

        <Text>6:00 - 6:30</Text>
        <CheckBox value={f3} onValueChange={setF13} style={styles.checkbox} />

        <Text>6:45 - 7:15</Text>
        <CheckBox value={f4} onValueChange={setF14} style={styles.checkbox} />

        <Text>7:30 - 8:00</Text>
        <CheckBox value={f5} onValueChange={setF15} style={styles.checkbox} />

        <Text>8:15 - 8:45</Text>
        <CheckBox value={f6} onValueChange={setF16} style={styles.checkbox} />

        <Text>9:00 - 9:30</Text>
        <CheckBox value={f7} onValueChange={setF17} style={styles.checkbox} />

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

export default SaturdayTimeScreen;