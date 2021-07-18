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
import Icon from 'react-native-vector-icons/Ionicons';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

const HomeHeader = props => {
  const openMenu = () => {
    navigation.openDrawer();
  };

  return (
    <View style={styles.mainbg}>
      <Icon
        name="menu"
        size={50}
        onPress={() => {
          console.log('hello');
        }}
        style={styles.icon}
      />
      <Image
        style={styles.headerImage}
        source={require('../images/vlogo_white_bg.png')}
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
    left: 75,
    alignSelf: 'flex-end',
    justifyContent: 'flex-start',
    height: 82,
  },
  icon: {
    position: 'absolute',
    left: -80,
  },
});

export default HomeHeader;
