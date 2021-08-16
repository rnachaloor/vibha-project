import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import GoldTextBox from '../components/GoldTextBox';
import BlackButton from '../components/BlackButton';
import WhiteButton from '../components/WhiteButton';
import Header from '../components/Header';

import {Checkbox} from 'react-native-paper';

import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';

import {
  LoginButton,
  AccessToken,
  GraphRequest,
  GraphRequestManager,
} from 'react-native-fbsdk';

const LoginScreen = ({navigation}) => {
  const [checked, setChecked] = useState(false);
  const [loggedIn, setloggedIn] = useState(false);
  const [userInfo, setuserInfo] = useState([]);

  const [otherUserInfo, setotherUserInfo] = useState([]);

  _signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const {accessToken, idToken} = await GoogleSignin.signIn();
      setloggedIn(true);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        alert('Cancel');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        alert('Signin in progress');
        // operation (f.e. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        alert('PLAY_SERVICES_NOT_AVAILABLE');
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };

  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['email'], // what API you want to access on behalf of the user, default is email and profile
      webClientId:
        '850727403922-cn1ic5i19tillvkahnkt12jiie4sdq07.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
    });
  }, []);

  signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      setloggedIn(false);
      setuserInfo([]);
    } catch (error) {
      console.error(error);
    }
  };

  logoutWithFacebook = async () => {
    LoginManager.logOut();
    setotherUserInfo([]);
  };

  getInfoFromToken = async token => {
    const PROFILE_REQUEST_PARAMS = {
      fields: {
        string: 'id,name,first_name,last_name',
      },
    };
    const profileRequest = new GraphRequest(
      '/me',
      {token, parameters: PROFILE_REQUEST_PARAMS},
      (error, user) => {
        if (error) {
          console.log('login info has error: ' + error);
        } else {
          setotherUserInfo([user]);
          console.log('result:', user);
        }
      },
    );
    new GraphRequestManager().addRequest(profileRequest).start();
  };

  loginWithFacebook = async () => {
    // Attempt a login using the Facebook login dialog asking for default permissions.
    LoginManager.logInWithPermissions(['public_profile']).then(
      login => {
        if (login.isCancelled) {
          console.log('Login cancelled');
        } else {
          AccessToken.getCurrentAccessToken().then(data => {
            const accessToken = data.accessToken.toString();
            this.getInfoFromToken(accessToken);
          });
        }
      },
      error => {
        console.log('Login fail with error: ' + error);
      },
    );
  };

  return (
    <SafeAreaView style={[styles.container, {flexDirection: 'column'}]}>
      <Header />
      <View style={styles.otherbg}>
        <View style={styles.smallSpacing}></View>
        <Text style={styles.titleText}>Log In</Text>
        <View style={styles.smallSpacing}></View>
        <GoldTextBox style={[styles.leftAlignment]} text="Username" />
        <View style={styles.smallSpacing}></View>
        <GoldTextBox style={[styles.leftAlignment]} text="Password" />
        <TouchableOpacity style={{alignSelf: 'flex-end'}}>
          <Text
            style={styles.forgot}
            onPress={() => navigation.navigate('Forgot Password')}>
            Forgot Password?
          </Text>
        </TouchableOpacity>
        <View style={styles.checkbox}>
          <Checkbox
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => {
              setChecked(!checked);
            }}
          />
          <Text style={styles.label}>Remember me</Text>
        </View>
        <View style={styles.smallSpacing}></View>
        <BlackButton text="Log In" style={{alignSelf: 'center'}} />
        <View style={styles.smallSpacing}></View>
        <Text style={{alignSelf: 'center', fontSize: 20}}>--- OR ---</Text>
        <Text style={{alignSelf: 'center', fontSize: 14, paddingTop: 10}}>
          Sign in with
        </Text>
        <View style={styles.largeSpacing}></View>
        <View style={styles.otherSignin}>
          <TouchableOpacity
            style={{
              backgroundColor: 'white',
              borderRadius: 100,
              padding: 10,
              right: 20,
            }}
            onPress={this._signIn}>
            <Image
              style={styles.headerImage}
              source={require('../images/glogo.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: 'white',
              borderRadius: 100,
              padding: 10,
              left: 20,
            }}
            onPress={this.loginWithFacebook}>
            <Image
              style={styles.headerImage}
              source={require('../images/flogo.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.largeSpacing}></View>
        <View style={styles.largeSpacing}></View>
        <View
          style={{
            flexDirection: 'row',
            alignSelf: 'center',
          }}>
          <Text style={{fontSize: 18}}>Don't have an account?</Text>
          <TouchableOpacity
            style={{paddingLeft: 10}}
            onPress={() => navigation.navigate('Sign Up')}>
            <Text style={{fontWeight: 'bold', fontSize: 18}}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  mainbg: {
    flex: 1,
    backgroundColor: 'white',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  headerImage: {
    resizeMode: 'stretch',
    height: 35,
    width: 35,
  },
  otherSignin: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-around',
  },
  otherbg: {
    flex: 7,
    backgroundColor: '#8839BF',
  },
  titleText: {
    fontSize: 55,
    alignSelf: 'center',
    color: 'white',
  },
  checkbox: {
    flexDirection: 'row',
    paddingLeft: 25,
  },
  label: {
    alignSelf: 'center',
  },
  leftAlignment: {
    left: 25,
  },
  largeSpacing: {
    height: 25,
  },
  smallSpacing: {
    height: 12.5,
  },
  forgot: {
    color: '#F0EEE6',
    paddingRight: 30,
    paddingTop: 10,
  },
});

export default LoginScreen;
