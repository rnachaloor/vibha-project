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

const CenteredTextCard = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress} style={[styles.card, {width: props.width, height: props.height}]}>
            <Text style={styles.text}>{props.text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "white",
        justifyContent: "center"
    }, 
    text: {
        alignSelf: "center"
    }
})

export default CenteredTextCard;