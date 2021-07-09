/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image
} from 'react-native';
import BlackButton from './components/BlackButton';
import LoginScreen from './screens/LoginScreen';
import SignUpDetailsScreen from './screens/SignUpDetailsScreen';
import SignUpScreen from './screens/SignUpScreen';


const Stack = createStackNavigator()

const LoginStackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Login" 
        component={LoginScreen}
        options={{ headerTitle: props => <Image style={styles.headerImage} source={require('./images/vlogo_white_bg.jpg')} />}}/>
      <Stack.Screen 
        name="Sign Up" 
        component={SignUpScreen}
        options={{ headerTitle: props => <Image style={styles.headerImage} source={require('./images/vlogo_white_bg.jpg')} />}}/>
      <Stack.Screen 
        name="Details" 
        component={SignUpDetailsScreen}
        options={{ headerTitle: props => <Image style={styles.headerImage} source={require('./images/vlogo_white_bg.jpg')} />}}/>
    </Stack.Navigator>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <LoginStackScreen/>
      </View>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: "white"
  },
  headerImage: {
    alignSelf: "center",
    justifyContent: "flex-start",
    height: 50
  }
});

export default App;
