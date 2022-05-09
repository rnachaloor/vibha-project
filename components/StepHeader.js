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
  Image,
} from 'react-native';
import {Icon} from 'react-native-vector-icons/Ionicons';

const StepHeader = props => {
  return (
    <View style={styles.mainbg}>
      <TouchableOpacity style={styles.icon} onPress={() => navigation.goBack()}>
        <Icon name="arrow-back" size={50} />
      </TouchableOpacity>
      <Image
        style={styles.headerImage}
        // source={require('../images/vlogo_white_bg.png')}
      />
    </View>
  );
};

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
  icon: {
    left: -150,
    top: 15,
  },
});

export default StepHeader;
