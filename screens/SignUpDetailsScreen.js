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

  const saveData = () => {
    storeData('age', age);
    storeData('grade', grade);
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
            <TouchableOpacity
              style={(styles.icon, styles.icon1)}
              onPress={() => setModalOpen(false)}>
              <Icon name="chalkboard-teacher" size={100} />
            </TouchableOpacity>
            <Text style={styles.text}>Tutor</Text>
          </View>
          <View style={styles.caption}>
            <TouchableOpacity
              style={(styles.icon, styles.icon2)}
              onPress={() => setModalOpen(false)}>
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
          onPress={() => navigation.navigate('Home')}
          text="Sign Up"
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
    borderColor: 'yellow',
    borderWidth: 2,
    borderRadius: 15,
    padding: 10,
  },
  icon2: {
    borderColor: 'yellow',
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
