import React, {createContext, useState} from 'react';
import auth from '@react-native-firebase/auth';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';

import {AccessToken, LoginManager} from 'react-native-fbsdk';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: async (email, password) => {
          try {
            await auth().signInWithEmailAndPassword(email, password);
          } catch (e) {
            console.log(e);
          }
        },
        googleLogin: async () => {
          try {
            const {idToken} = await GoogleSignin.signIn();
            const googleCredential =
              auth.GoogleAuthProvider.credential(idToken);
            await auth().signInWithCredential(googleCredential);
          } catch (error) {
            console.log({error});
          }
        },
        facebookLogin: async () => {
          const result = await LoginManager.logInWithPermissions([
            'public_profile',
            'email',
          ]);

          if (result.isCancelled) {
            throw 'User cancelled the login process';
          }
          const data = await AccessToken.getCurrentAccessToken();

          if (!data) {
            throw 'Something went wrong obtaining access token';
          }
          const facebookCredential = auth.FacebookAuthProvider.credential(
            data.accessToken,
          );
          await auth().signInWithCredential(facebookCredential);
        },
        register: async (email, password) => {
          try {
            await auth().createUserWithEmailAndPassword(email, password);
          } catch (e) {
            console.log(e);
          }
        },
        logout: async () => {
          try {
            await auth().signOut();
          } catch (e) {
            console.log(e);
          }
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};
