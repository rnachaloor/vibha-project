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
} from 'react-native';
import GoldTextBox from '../components/GoldTextBox';
import BlackButton from '../components/BlackButton';
import HomeHeader from '../components/HomeHeader';
import DropDownPicker from 'react-native-dropdown-picker';

const FeedbackScreen = ({navigation}) => {

  const [textBoxName, setTextBoxName] = useState("Other");
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Tab Feedback', value: 'tab'},
    {label: 'Tutor Feedback', value: 'tutor'},
    {label: 'Other Feedback', value: 'other'},
  ]);

  useEffect(() =>  {
    if (value == 'tab') {
      setTextBoxName("Tab Name")
    } else if (value == 'tutor') {
      setTextBoxName("Tutor Name")
    } else {
      setTextBoxName("Other")
    }
  })

  return (
    <SafeAreaView style={[styles.container, {flexDirection: 'column'}]}>
      <HomeHeader onPress={() => navigation.openDrawer()}/>
      <View style={styles.otherbg}>
        <View style={styles.largeSpacing}></View>
        <Text style={styles.titleText}>Feedback</Text>
        <View style={styles.largeSpacing}></View>
        <DropDownPicker
          style={styles.dropDown}
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          dropDownContainerStyle={{
            width: 350,
            alignSelf: 'center',
          }}
        />
        <View style={styles.largeSpacing}></View>
        <GoldTextBox
          style={[styles.leftAlignment]}
          text={textBoxName}
        />
        <View style={styles.largeSpacing}></View>
        <Text style={styles.otherAlignment}>Comments</Text>
        <TextInput style={styles.bgTextBox} multiline={true} />
        <View style={styles.largeSpacing}></View>
        <BlackButton text="Submit" style={{alignSelf: 'center'}} />
        <View style={styles.smallSpacing}></View>
        <View style={styles.smallSpacing}></View>
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
  leftAlignment: {
    left: 20,
    fontSize: 16,
  },
  otherAlignment: {
    left: 35,
    fontSize: 16,
  },
  largeSpacing: {
    height: 25,
  },
  smallSpacing: {
    height: 12.5,
  },
  forgot: {
    alignSelf: 'center',
    color: '#F0EEE6',
  },
  headerImage: {
    alignSelf: 'center',
    justifyContent: 'flex-start',
    height: 82,
  },
  dropDown: {
    backgroundColor: 'white',
    alignSelf: 'center',
    width: 350,
    color: 'black',
  },
});

export default FeedbackScreen;
