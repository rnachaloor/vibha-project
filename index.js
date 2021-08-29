/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import React from 'react';
import {Routes} from './Routes';
import {name as appName} from './app.json';
import {AuthProvider} from './AuthProvider';
import messaging from '@react-native-firebase/messaging';

const Providers = () => {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
};

AppRegistry.registerComponent(appName, () => Providers);
