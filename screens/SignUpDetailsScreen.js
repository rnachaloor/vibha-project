import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import GoldTextBox from '../components/GoldTextBox';
import BlackButton from '../components/BlackButton';
import CenteredTextCard from '../components/CenteredTextCard';
import Header from '../components/Header';
import {useState} from 'react';
import {storeData, getData} from '../functions/AsyncFunctions';

import Icon from 'react-native-vector-icons/FontAwesome5';

const SignUpDetailsScreen = ({navigation}) => {
  const [age, setAge] = useState(0);
  const [grade, setGrade] = useState('');

  const saveData = async () => {
    storeData('age', age);
    storeData('grade', grade);
  };

  const [isPressed, setIsPressed] = useState(false);
  const [timesPressed, setTimesPressed] = useState(0);
  const [style, setStyle] = useState(styles.icon1);

  const changeStyle = () => {
    if (timesPressed == 0) {
      setIsPressed(true);
      setTimesPressed(1);
      setStyle(styles.icon1other);
      setOtherStyle(styles.icon2);
      setOtherTimesPressed(0);
      setIsOtherPressed(false);
    } else {
      setIsPressed(false);
      setTimesPressed(0);
      setStyle(styles.icon1);
    }
  };

  const [isOtherPressed, setIsOtherPressed] = useState(false);
  const [otherTimesPressed, setOtherTimesPressed] = useState(0);
  const [otherStyle, setOtherStyle] = useState(styles.icon2);

  const changeOtherStyle = () => {
    if (otherTimesPressed == 0) {
      setIsOtherPressed(true);
      setOtherTimesPressed(1);
      setOtherStyle(styles.icon2other);
      setStyle(styles.icon1);
      setTimesPressed(0);
      setIsPressed(false);
    } else {
      setIsOtherPressed(false);
      setOtherTimesPressed(0);
      setOtherStyle(styles.icon2);
    }
  };

  const nextScreen = () => {
    saveData();

    if (isPressed == true) {
      navigation.navigate('MoreDetails');
    } else if (isOtherPressed == true) {
      navigation.navigate('MoreStuDetails');
    } else {
      Alert.alert('Error', 'Choose a role');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.otherbg}>
        <View style={styles.largeSpacing}></View>
        <Text style={styles.titleText}>Sign Up</Text>
        <View style={styles.largeSpacing}></View>
        <View style={styles.cards}>
          <View style={styles.caption}>
            <TouchableOpacity style={style} onPress={() => changeStyle()}>
              <Icon name="chalkboard-teacher" size={100} />
            </TouchableOpacity>
            <Text style={styles.text}>Tutor</Text>
          </View>
          <View style={styles.caption}>
            <TouchableOpacity
              style={otherStyle}
              onPress={() => changeOtherStyle()}>
              <Icon name="user-graduate" size={100} />
            </TouchableOpacity>
            <Text style={styles.text}>Student</Text>
          </View>
        </View>
        <View style={styles.smallSpacing}></View>
        <GoldTextBox
          onChangeText={value => setAge(value)}
          style={[styles.leftAlignment]}
          text="Age"
        />
        <View style={styles.smallSpacing}></View>
        <GoldTextBox
          onChangeText={value => setGrade(value)}
          style={[styles.leftAlignment]}
          text="Grade"
        />
        <View style={styles.largeSpacing}></View>
        <BlackButton
          onPress={() => nextScreen()}
          text="Next"
          style={{alignSelf: 'center'}}
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
  icon: {
    alignItems: 'center',
    paddingTop: 5,
    justifyContent: 'center',
    paddingBottom: 5,
  },
  icon1: {
    borderColor: '#D5B537',
    borderWidth: 2,
    borderRadius: 15,
    padding: 10,
  },
  icon1other: {
    borderColor: '#464444',
    backgroundColor: '#D5B537',
    borderWidth: 2,
    borderRadius: 15,
    padding: 10,
  },
  icon2: {
    borderColor: '#D5B537',
    borderWidth: 2,
    borderRadius: 15,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
  },
  icon2other: {
    borderColor: '#464444',
    backgroundColor: '#D5B537',
    borderWidth: 2,
    borderRadius: 15,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
  },
  caption: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  text: {
    fontSize: 25,
    paddingTop: 10,
  },
  mainbg: {
    flex: 1,
    backgroundColor: 'white',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  otherbg: {
    flex: 7,
    backgroundColor: '#8839BF',
  },
  titleText: {
    fontSize: 48,
    alignSelf: 'center',
    color: 'white',
  },
  leftAlignment: {
    left: 25,
  },
  largeSpacing: {
    height: 25,
  },
  smallSpacing: {
    height: 12.5,
  },
  cards: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
});

export default SignUpDetailsScreen;
