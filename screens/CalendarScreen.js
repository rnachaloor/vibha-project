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
import HomeHeader from '../components/HomeHeader';

import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import moment from 'moment';
import Icon from 'react-native-vector-icons/Ionicons';
import {storeData, getData} from '../functions/AsyncFunctions';

const INITIAL_DATE = moment().format('YYYY-MM-DD');

const CalendarScreen = ({navigation}) => {
  const [selected, setSelected] = useState(INITIAL_DATE);
  const [showMarkedDates, setShowMarkedDates] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalDate, setModalDate] = useState('Unknown');

  const onDayPress = day => {
    setSelected(day.dateString);
  };

  const onDayLongPress = day => {
    setModalOpen(true);
    setModalDate(moment(day.dateString).format('MMM. DD, YYYY'));
  };

  const selectTimes = async (day) => {
    let otherDay = moment(day.dateString).format('YYYY-MM-DD');
    storeData("datesel", otherDay);
    navigation.navigate("TimeSelect");

  }

  return (
    <SafeAreaView style={[styles.container, {flexDirection: 'column'}]}>
      <Modal visible={modalOpen} animationType="fade">
        <View style={styles.modal}>
          <TouchableOpacity
            style={styles.icon}
            onPress={() => setModalOpen(false)}>
            <Icon name="close" size={30} />
          </TouchableOpacity>
          <Text style={styles.otherText}>{modalDate}</Text>
        </View>
      </Modal>

      <HomeHeader onPress={() => navigation.openDrawer()} />
      <View style={styles.otherbg}>
        <View style={styles.largeSpacing}></View>
        <Text style={styles.titleText}>Calendar</Text>
        <View style={styles.largeSpacing}></View>
        <Calendar
          minDate={INITIAL_DATE}
          onPressArrowLeft={subtractMonth => subtractMonth()}
          onPressArrowRight={addMonth => addMonth()}
          enableSwipeMonths={true}
          markedDates={{
            [selected]: {
              selected: true,
            },
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
            todayTextColor: '#D5B537',
          }}
          onDayPress={onDayPress}
          onDayLongPress={onDayLongPress}
        />
        <BlackButton
          text="Next"
          onPress={selectTimes}
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

export default CalendarScreen;
