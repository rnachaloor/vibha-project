import React, {useContext, useState, useEffect} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';

import {AuthContext} from '../AuthProvider';

import firestore from '@react-native-firebase/firestore';
import {storeData, getData} from './AsyncFunctions';

export const getUserInfo = async () => {
  let user = await getData('email');
  let opt = await getData('choice');
  global.user = user;
  global.opt = opt;
  test();
};

const test = () => {
  let nice = opt;
};
