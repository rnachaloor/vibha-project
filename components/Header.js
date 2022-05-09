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
  Image
} from 'react-native';
import { Icon } from "react-native-vector-icons/Ionicons";

const Header = (props) => {
    return (
      <View style={styles.mainbg}>
        <Image
          style={styles.headerImage}
          // source={require('../images/vlogo_white_bg.png')}
        />
      </View>
    )
}

const styles = StyleSheet.create({
  mainbg: {
    flex: 1,
    backgroundColor: 'white',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  headerImage: {
    alignSelf: 'center',
    justifyContent: 'flex-start',
    height: 82,
  },
})

export default Header;