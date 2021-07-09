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
  TouchableOpacity
} from 'react-native'
import GoldTextBox from '../components/GoldTextBox';
import BlackButton from '../components/BlackButton';
import CenteredTextCard from "../components/CenteredTextCard"

const SignUpDetailsScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
        <View style={styles.largeSpacing}></View>
        <Text style={styles.titleText}>Sign Up</Text>
        <View style={styles.largeSpacing}></View>
        <View style={styles.cards}>
            <CenteredTextCard height={100} width={150} text="Tutor" />
            <CenteredTextCard height={100} width={150} text="Student" />
        </View>
        <View style={styles.largeSpacing}></View>
        <GoldTextBox style={[styles.leftAlignment]} text="Age"/>
        <View style={styles.smallSpacing}></View>
        <GoldTextBox style={[styles.leftAlignment]} text="Grade" />
        <View style={styles.largeSpacing}></View>
        <BlackButton text="Sign Up" style={{alignSelf: "center"}}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: "#8839BF",
  },
  titleText: {
    fontSize: 48,
    alignSelf: "center",
    color: "white"
  },
  leftAlignment : {
    left: 25
  },
  largeSpacing: {
      height: 25
  },
  smallSpacing: {
      height: 12.5
  },
  cards: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-around"
  }  
  
});

export default SignUpDetailsScreen;
