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
import Header from '../components/Header';

import moment from 'moment';
import Icon from 'react-native-vector-icons/Ionicons';
import {storeData, getData} from '../functions/AsyncFunctions';
import firestore from '@react-native-firebase/firestore';

const TimeSelectScreen = ({navigation}) => {
  const [mail, setMail] = useState('');
  const [week, setWeek] = useState('');
  const [day, setDay] = useState('');
  const [times, setTimes] = useState('');
  const [ftimes, setFTimes] = useState([]);
  const [timesel, setTimeSel] = useState('');
  const [atut, setATut] = useState('');
  const [test, setTest] = useState(1);

  const [selectedApp, setSelectedApp] = useState([]);

  // useEffect(() => {
  //   const subscriber = firestore()
  //     .collection('students')
  //     .onSnapshot(querySnapshot => {
  //       const selectedapp = [];

  //       querySnapshot.forEach(documentSnapshot => {
  //         selectedapp.push({
  //           key: documentSnapshot.id,
  //           day: documentSnapshot.data().appointmentDay,
  //           time: documentSnapshot.data().appointmentTime,
  //           tutor: documentSnapshot.data().tutorChosen,
  //         });
  //       });

  //       setSelectedApp(selectedapp);
  //     });
  //   return () => subscriber();
  // }, []);

  const load = async () => {
    setMail(await getData('schedtutem'));
    setDay(await getData('datesel'));
    setATut(await getData('schedtut'));
    const weekDay = await getData('weeksel');

    if (weekDay == 'Monday') {
      setWeek('Monday');
      const subscriber = firestore()
        .collection('tutors')
        .doc(mail)
        .get()
        .then(documentSnapshot => {
          if (documentSnapshot.exists) {
            setTimes(documentSnapshot.data().mondaytimes);
          }
        });
    } else if (weekDay == 'Tuesday') {
      setWeek('Tuesday');
      const subscriber = firestore()
        .collection('tutors')
        .doc(mail)
        .get()
        .then(documentSnapshot => {
          if (documentSnapshot.exists) {
            setTimes(documentSnapshot.data().tuesdaytimes);
          }
        });
    } else if (weekDay == 'Wednesday') {
      setWeek('Wednesday');
      const subscriber = firestore()
        .collection('tutors')
        .doc(mail)
        .get()
        .then(documentSnapshot => {
          if (documentSnapshot.exists) {
            setTimes(documentSnapshot.data().wednesdaytimes);
          }
        });
    } else if (weekDay == 'Thursday') {
      setWeek('Thursday');
      const subscriber = firestore()
        .collection('tutors')
        .doc(mail)
        .get()
        .then(documentSnapshot => {
          if (documentSnapshot.exists) {
            setTimes(documentSnapshot.data().thursdaytimes);
          }
        });
    } else if (weekDay == 'Friday') {
      setWeek('Friday');
      const subscriber = firestore()
        .collection('tutors')
        .doc(mail)
        .get()
        .then(documentSnapshot => {
          if (documentSnapshot.exists) {
            setTimes(documentSnapshot.data().fridaytimes);
          }
        });
    } else if (weekDay == 'Saturday') {
      setWeek('Saturday');
      const subscriber = firestore()
        .collection('tutors')
        .doc(mail)
        .get()
        .then(documentSnapshot => {
          if (documentSnapshot.exists) {
            setTimes(documentSnapshot.data().saturdaytimes);
          }
        });
    } else {
      setWeek('Sunday');
      const subscriber = firestore()
        .collection('tutors')
        .doc(mail)
        .get()
        .then(documentSnapshot => {
          if (documentSnapshot.exists) {
            setTimes(documentSnapshot.data().sundaytimes);
          }
        });
    }

    const finalTimes = times.split(', ');
    const aTimes = [];
    for(let i = 0; i<finalTimes.length; i++) {
      aTimes.push({
        key: i,
        time: finalTimes[i],
      });
    }
    setFTimes(aTimes);
    // const aTimes = [];
    // let a = false;
    // for (let i = 0; i < finalTimes.length; i++) {
    //   for (let k = 0; k < selectedApp.length; k++) {
    //     if (selectedApp[k].tutor != atut) {
    //       a = false;
    //     } else {
    //       if (selectedApp[k].day != day && selectedApp[k].time != finalTimes[i]) {
    //         a = false;
    //       } else if (selectedApp[k].day == day && selectedApp[k].time == finalTimes[i]) {
    //         a = true;
    //         break;
    //       } else if (selectedApp[k].day != day && selectedApp[k].time == finalTimes[i]) {
    //         a = false;
    //       } else if (selectedApp[k].day == day && selectedApp[k].time != finalTimes[i]) {
    //         a = false;
    //       } else {
    //         continue;
    //       }
    //     }
    //   }
    //   aTimes.push({
    //     key: i,
    //     time: finalTimes[i],
    //     available: a,
    //   });
    // }
    // setFTimes(aTimes);
    // console.log(ftimes)
  };

  load();

  const confirmTime = async () => {
    // const pos = ftimes.indexOf(timesel);
    // const ntimes = ftimes.splice(pos, 1);
    // setFTimes(ntimes);
    navigation.navigate('ConfirmApp');
  };

  return (
    <SafeAreaView style={[styles.container, {flexDirection: 'column'}]}>
      <ProfileHeader onPress={() => navigation.goBack()}/>
      <View style={styles.otherbg}>
        <Text style={styles.titleText}>Select Time</Text>
        <FlatList
          data={ftimes}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => {
                storeData('timesel', item.time);
                setTimeSel(item.time);
                confirmTime();
              }}
              style={styles.other}>
              <Text style={styles.otherText}>{item.time}</Text>
            </TouchableOpacity>
          )}
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
  other: {
    paddingTop: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  otherText: {
    fontSize: 30,
    alignSelf: 'center',
    color: '#D5B537',
  },
  largeSpacing: {
    height: 25,
  },
  text: {
    color: 'white',
  },
});

export default TimeSelectScreen;
