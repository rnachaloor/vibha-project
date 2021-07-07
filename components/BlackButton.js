import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

const BlackButton = (props) => {
    return (
        <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>{props.text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "black",
        width: 200,
        borderRadius: 50,
        height: 50,
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        color: "white",
    }
})

export default BlackButton;

