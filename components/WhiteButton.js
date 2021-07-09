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

const WhiteButton = (props) => {
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
        backgroundColor: "#DACCCC",
        width: 350,
        borderRadius: 50,
        height: 50,
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        color: "black",
    }
})

export default WhiteButton;

