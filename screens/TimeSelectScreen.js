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
  // const [mtimes, setMTimes] = useState('');
  // const [tutimes, setTUTimes] = useState('');
  // const [wtimes, setWTimes] = useState('');
  // const [thtimes, setTHTimes] = useState('');
  // const [ftimes, setFTimes] = useState('');
  // const [satimes, setSATimes] = useState('');
  // const [sutimes, setSUTimes] = useState('');

  const [selectedApp, setSelectedApp] = useState([]);

  useEffect(() => {
    const subscriber = firestore()
      .collection('students')
      .onSnapshot(querySnapshot => {
        const selectedapp = [];

        querySnapshot.forEach(documentSnapshot => {
          selectedapp.push({
            key: documentSnapshot.id,
            day: documentSnapshot.data().appointmentDay,
            time: documentSnapshot.data().appointmentTime,
            tutor: documentSnapshot.data().tutorChosen,
          });
          //console.log(tutors);
        });

        setSelectedApp(selectedapp);
        //setLoading(false);
      });
    return () => subscriber();
  }, []);

  const load = async () => {
    setMail(await getData('schedtutem'));
    setDay(await getData('datesel'));
    setATut(await getData('schedtut'));
    const weekNum = await getData('weeksel');

    if (weekNum == 1) {
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
    } else if (weekNum == 2) {
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
    } else if (weekNum == 3) {
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
    } else if (weekNum == 4) {
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
    } else if (weekNum == 5) {
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
    } else if (weekNum == 6) {
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
    let a = false;
    for (let i = 0; i < finalTimes.length; i++) {
      for (let k = 0; k < select.length; k++) {
        if (select[k].tutor != atut) {
          a = false;
        } else {
          if (select[k].day != day && select[k].time != finalTimes[i]) {
            a = false;
          } else if (select[k].day == day && select[k].time == finalTimes[i]) {
            a = true;
            break;
          } else if (select[k].day != day && select[k].time == finalTimes[i]) {
            a = false;
          } else if (select[k].day == day && select[k].time != finalTimes[i]) {
            a = false;
          } else {
            continue;
          }
        }
      }
      aTimes.push({
        time: finalTimes[i],
        available: a,
      });
    }
    setFTimes(aTimes);
  };

  load();
  // useEffect(() => {
  //   const subscriber = firestore()
  //     .collection('tutors')
  //     .doc(mail)
  //     .get()
  //     .then(documentSnapshot => {
  //       if (documentSnapshot.exists) {
  //         setMTimes(documentSnapshot.data().mondaytimes);
  //         setTUTimes(documentSnapshot.data().tuesdaytimes);
  //         setWTimes(documentSnapshot.data().wednesdaytimes);
  //         setTHTimes(documentSnapshot.data().thursdaytimes);
  //         setFTimes(documentSnapshot.data().fridaytimes);
  //         setSATimes(documentSnapshot.data().saturdaytimes);
  //         setSUTimes(documentSnapshot.data().sundaytimes);
  //       }
  //     });
  // });

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
        <FlatList
          data={ftimes}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => {
                storeData('timesel', item);
                setTimeSel(item);
                confirmTime();
              }}
              disabled={item.available}>
              <Text>{item}</Text>
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

export default TimeSelectScreen;
