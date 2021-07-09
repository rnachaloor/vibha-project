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
        <View style={props.style}>
            <TouchableOpacity onPress={props.onPress} style={styles.button}>
                <Text style={styles.text}>{props.text}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#464444",
        width: 350,
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

