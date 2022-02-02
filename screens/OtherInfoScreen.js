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
import GoldTextBox from '../components/GoldTextBox';
import BlackButton from '../components/BlackButton';
import ProfileHeader from '../components/ProfileHeader';
import DropDownMenu from '../components/DropDownMenu';
import PurpleTextBox from '../components/PurpleTextBox';

import Icon from 'react-native-vector-icons/Ionicons';
import {storeData, getData} from '../functions/AsyncFunctions';
import firestore from '@react-native-firebase/firestore';

const OtherInfoScreen = ({navigation}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [otherModalOpen, setOtherModalOpen] = useState(false);

  const [age, setAge] = useState('');
  const [grade, setGrade] = useState('');
  const [subjects, setSubjects] = useState('');
  const [aage, setAAge] = useState('');
  const [agrade, setAGrade] = useState('');
  const [asubjects, setASubjects] = useState('');
  const [email, setEmail] = useState('');

  const load = async () => {
    setAge(await getData('age'));
    setGrade(await getData('grade'));
    setSubjects(await getData('subjects'));
    setEmail(await getData('email'));
  };

  load();

  const newChanges = async () => {
    const choice = await getData('choice');
    if(aage != '' && agrade != '' && asubjects != '' && aage != age && agrade != grade && asubjects != subjects) {
      if(choice == 'tutor') {
        storeData('age', aage);
        storeData('grade', agrade);
        storeData('subjects', asubjects);
        firestore()
          .collection('tutors')
          .doc(email)
          .update({
            age: aage,
            grade: agrade,
            subjects: asubjects
          })
          .then(() => {
            Alert.alert('SUCCESS', 'Your data was successfully changed.');
          });
      } else {
        storeData('age', aage);
        storeData('grade', agrade);
        storeData('subjects', asubjects);
        firestore()
          .collection('students')
          .doc(email)
          .update({
            age: aage,
            grade: agrade,
            subjects: asubjects
          })
          .then(() => {
            Alert.alert('SUCCESS', 'Your data was successfully changed.');
          });
      }
    } else (){
      if (aage != age && aage != '') {
        storeData('age', aage);
        if (choice == 'tutor') {
          firestore()
            .collection('tutors')
            .doc(email)
            .update({age: aage})
        } else {
          firestore()
            .collection('students')
            .doc(email)
            .update({age: aage})
        }
        let fage = 'false';
      } else {
        Alert.alert(
          'Error',
          'New age is the same as old age or new age is empty.',
        );
        let fage = 'true';
      }

      if (agrade != grade && agrade != '') {
        storeData('grade', agrade);
        if (choice == 'tutor') {
          firestore()
            .collection('tutors')
            .doc(email)
            .update({grade: agrade})
        } else {
          firestore()
            .collection('students')
            .doc(email)
            .update({grade: agrade})
        }
        let fgrade = 'false';
      } else {
        let fgrade = 'true';
      }

      if (asubjects != subjects && asubjects != '') {
        storeData('subjects', asubjects);
        if (choice == 'tutor') {
          firestore()
            .collection('tutors')
            .doc(email)
            .update({subjects: asubjects})
        } else {
          firestore()
            .collection('students')
            .doc(email)
            .update({subjects: asubjects})
        }
        let fsub = 'false';
      } else {
        Alert.alert(
          'Error',
          'New subjects are the same as old subjects or new subjects are empty.',
        );
        let fsub = 'true';
      }

      if (fage == 'false' && fgrade == 'false' && fsub == 'false') {
        Alert.alert('SUCCESS', 'Your data was successfully changed.');
      } else if (fage == 'true' && fgrade == 'false' && fsub == 'false') {
        Alert.alert(
          'Error',
          'New age is the same as old age or new age is empty. Other data was updated',
        );
      } else if (fage == 'false' && fgrade == 'true' && fsub == 'false') {
        Alert.alert(
          'Error',
          'New grade is the same as old grade or new grade is empty. Other data was updated',
        );
      } else if (fage == 'false' && fgrade == 'false' && fsub == 'true') {
        Alert.alert(
          'Error',
          'New subjects are the same as old subjects or new subjects are empty. Other data was updated',
        );
      } else if (fage == 'true' && fgrade == 'true' && fsub == 'false') {
        Alert.alert(
          'Error',
          'New age and grade are the same as old age and grade or new age and grade are empty. Other data was updated',
        );
      } else if (fage == 'true' && fgrade == 'false' && fsub == 'true') {
        Alert.alert(
          'Error',
          'New age and subjects are the same as old age and subjects or new age and subjects are empty. Other data was updated',
        );
      } else if (fage == 'false' && fgrade == 'true' && fsub == 'true') {
        Alert.alert(
          'Error',
          'New grade and subjects are the same as old grade and subjects or new grade and subjects are empty. Other data was updated',
        );
      } else {
        Alert.alert(
          'Error',
          'All data is the same as old data or all inputs are empty.',
        );
      }
    }

    setModalOpen(true);
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
          <Text style={styles.otherText}>Session Dates</Text>
          <View style={styles.largeSpacing}></View>
        </View>
      </Modal>
      <Modal>
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
            text="Age"
            onChangeText={e => setAAge(e)}
            value={aage}
          />
          <View style={styles.largeSpacing}></View>
          <PurpleTextBox
            style={[styles.leftAlignment]}
            text="Grade"
            onChangeText={e => setAGrade(e)}
            value={agrade}
          />
          <View style={styles.largeSpacing}></View>
          <PurpleTextBox
            style={[styles.leftAlignment]}
            text="Subjects"
            onChangeText={e => setASubjects(e)}
            value={asubjects}
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
        <View style={styles.insidebg}>
          <Text style={styles.forgot}>{'Age: ' + age}</Text>
          <View style={styles.smallSpacing}></View>
          <Text style={styles.forgot}>{'Grade: ' + grade}</Text>
          <View style={styles.smallSpacing}></View>
          <Text style={styles.forgot}>{'Subjects: ' + subjects}</Text>
          <View style={styles.smallSpacing}></View>
          <Text style={styles.forgot}># of Sessions:</Text>
          <View style={styles.direction}>
            <Text style={styles.forgot}>Session Dates:</Text>
            <View style={styles.another}>
              <TouchableOpacity
                style={styles.otherButton}
                onPress={() => setModalOpen(true)}>
                <Text style={styles.text}>View Dates</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.smallSpacing}></View>
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
    height: 600,
    borderRadius: 20,
    paddingTop: 20,
    paddingLeft: 20,
    top: 30,
  },
  otherIcon: {
    alignItems: 'center',
    paddingTop: 20,
    justifyContent: 'center',
    paddingBottom: 20,
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
  titleText: {
    fontSize: 55,
    alignSelf: 'center',
    color: 'white',
  },
  largeSpacing: {
    height: 25,
  },
  smallSpacing: {
    height: 12.5,
  },
  forgot: {
    alignSelf: 'auto',
    color: 'black',
    fontSize: 20,
    paddingBottom: 20,
  },
});

export default OtherInfoScreen;
