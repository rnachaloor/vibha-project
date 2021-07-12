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
} from 'react-native';

const GoldTextBox = props => {
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.text}>{props.text}</Text>
      <TextInput
        style={styles.bgTextBox}
        multiline={props.multiline}
        onChangeText={props.onChangeText}
        textContentType={props.textContentType}
        secureTextEntry={props.secureTextEntry}
        onChangeText={props.onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  bgTextBox: {
    backgroundColor: '#D5B537',
    borderRadius: 50,
    paddingLeft: 10,
    width: 350,
    ...Platform.select({
      ios: {
        height: 40,
      },
    }),
  },
  text: {
    left: 15,
    fontSize: 16,
  },
});

export default GoldTextBox;
