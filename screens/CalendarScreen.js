import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  useState,
  Image,
  TextInput,
  TouchableOpacity,
  Button,
} from 'react-native';
import GoldTextBox from '../components/GoldTextBox';
import BlackButton from '../components/BlackButton';
import HomeHeader from '../components/HomeHeader';

import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

const returnDateString = () => {
}

let day = returnDateString()

const CalendarScreen = ({navigation}) => {
  return (
    <SafeAreaView style={[styles.container, {flexDirection: 'column'}]}>
      <HomeHeader onPress={() => navigation.openDrawer()}/>
      <View style={styles.otherbg}>
        <View style={styles.largeSpacing}></View>
        <Text style={styles.titleText}>Calendar</Text>
        <View style={styles.largeSpacing}></View>
        <Calendar 
            minDate={Date()} 
            onPressArrowLeft={subtractMonth => subtractMonth()} 
            onPressArrowRight={addMonth => addMonth()} 
            enableSwipeMonths={true}
            markedDates={{
                "2021-07-19" : {selected: true, marked: true, selectedColor: '#D5B537'}
            }}
            style={styles.calendar}
            theme={{
                backgroundColor: '#8839BF',
                calendarBackground: '#8839BF',
                arrowColor: '#D5B537',
                selectedDayBackgroundColor: '#D5B537',
                selectedDayTextColor: 'black',
                monthTextColor: '#D5B537',
                textDisabledColor: 'gray',
                dayTextColor: 'white',
            }}/>
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
  largeSpacing: {
    height: 25,
  },
  text: {
    color: 'white',
  },
  other: {
    paddingLeft: 15,
  },
  direction: {
    flexDirection: 'row',
  },
});

export default CalendarScreen;
