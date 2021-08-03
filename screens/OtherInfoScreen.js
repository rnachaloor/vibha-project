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
} from 'react-native';
import GoldTextBox from '../components/GoldTextBox';
import BlackButton from '../components/BlackButton';
import ProfileHeader from '../components/ProfileHeader';
import DropDownMenu from '../components/DropDownMenu';

import Icon from 'react-native-vector-icons/Ionicons';

const OtherInfoScreen = ({navigation}) => {
  const [modalOpen, setModalOpen] = useState(false);

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
      <ProfileHeader onPress={() => navigation.navigate('Home')} />
      <View style={styles.otherbg}>
        <View style={styles.largeSpacing}></View>
        <Text style={styles.titleText}>My Profile</Text>
        <View style={styles.smallSpacing}></View>
        <View style={styles.sec}>
          <Icon name="person-circle" color="black" size={150} />
          <TouchableOpacity style={styles.change}>
            <Text>Change</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.insidebg}>
          <Text style={styles.forgot}>Age:</Text>
          <Text style={styles.forgot}>Grade:</Text>
          <Text style={styles.forgot}>Subjects:</Text>
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

          <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>Save Changes</Text>
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
    height: 500,
    borderRadius: 20,
    paddingTop: 20,
    paddingLeft: 20,
    bottom: 25,
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
  forgot: {
    alignSelf: 'auto',
    color: 'black',
    fontSize: 20,
    paddingBottom: 20,
  },
});

export default OtherInfoScreen;
