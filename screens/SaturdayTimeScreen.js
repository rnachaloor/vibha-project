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
import ProfileHeader from '../components/ProfileHeader';

import moment from 'moment';
import Icon from 'react-native-vector-icons/Ionicons';
import {storeData, getData} from '../functions/AsyncFunctions';
import firestore from '@react-native-firebase/firestore';
import CheckBox from '@react-native-community/checkbox';

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
      '9:00am - 9:30am',
      '9:45am - 10:15am',
      '10:30am - 11:00am',
      '11:15am - 11:45am',
      '12:00pm - 12:30pm',
      '12:45pm - 1:15pm',
      '1:30pm - 2:00pm',
      '2:15pm - 2:45pm',
      '3:00pm - 3:30pm',
      '3:45pm - 4:15pm',
      '4:30pm - 5:00pm',
      '5:15pm - 5:45pm',
      '6:00pm - 6:30pm',
      '6:45pm - 7:15pm',
      '7:30pm - 8:00pm',
      '8:15pm - 8:45pm',
      '9:00pm - 9:30pm'
    ];
    let final = '';

    for (let i = 0; i < 18; i++) {
      let option = daysCheck[i];
      if (option == true) {
        final = final + timeSpot[i] + ', ';
      }
    }
    final = final.slice(0, -2);
    storeData('saturdaytimes', final);

    navigation.navigate('SundayTime');
  };

  return (
    <SafeAreaView style={[styles.container, {flexDirection: 'column'}]}>
      <ProfileHeader onPress={() => navigation.goBack()}/>
      <View style={styles.otherbg}>
        <Text style={styles.titleText}>Saturday</Text>
        <View style={{flexDirection:'row'}}>
          <View style={{flexDirection:'column'}}>
            <Text>9:00am - 9:30am</Text>
            <CheckBox value={s1} onValueChange={setS1} style={styles.checkbox} />

            <Text>9:45am - 10:15am</Text>
            <CheckBox value={s2} onValueChange={setS2} style={styles.checkbox} />

            <Text>10:30am - 11:00am</Text>
            <CheckBox value={s3} onValueChange={setS3} style={styles.checkbox} />

            <Text>11:15am - 11:45am</Text>
            <CheckBox value={s4} onValueChange={setS4} style={styles.checkbox} />

            <Text>12:00pm - 12:30pm</Text>
            <CheckBox value={s5} onValueChange={setS5} style={styles.checkbox} />

            <Text>12:45pm - 1:15pm</Text>
            <CheckBox value={s6} onValueChange={setS6} style={styles.checkbox} />

            <Text>1:30pm - 2:00pm</Text>
            <CheckBox value={s7} onValueChange={setS7} style={styles.checkbox} />

            <Text>2:15pm - 2:45pm</Text>
            <CheckBox value={s8} onValueChange={setS8} style={styles.checkbox} />

            <Text>3:00pm - 3:30pm</Text>
            <CheckBox value={s9} onValueChange={setS9} style={styles.checkbox} />
          </View>

          <View>
            <Text>3:45pm - 4:15pm</Text>
            <CheckBox value={s10} onValueChange={setS10} style={styles.checkbox} />

            <Text>4:30pm - 5:00pm</Text>
            <CheckBox value={s11} onValueChange={setS11} style={styles.checkbox} />

            <Text>5:15pm - 5:45pm</Text>
            <CheckBox value={s12} onValueChange={setS12} style={styles.checkbox} />

            <Text>6:00pm - 6:30pm</Text>
            <CheckBox value={s13} onValueChange={setS13} style={styles.checkbox} />

            <Text>6:45pm - 7:15pm</Text>
            <CheckBox value={s14} onValueChange={setS14} style={styles.checkbox} />

            <Text>7:30pm - 8:00pm</Text>
            <CheckBox value={s15} onValueChange={setS15} style={styles.checkbox} />

            <Text>8:15pm - 8:45pm</Text>
            <CheckBox value={s16} onValueChange={setS16} style={styles.checkbox} />

            <Text>9:00pm - 9:30pm</Text>
            <CheckBox value={s17} onValueChange={setS17} style={styles.checkbox} />
          </View>
        </View>

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
    right: 50,
    bottom: 23,
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