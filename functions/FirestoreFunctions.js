import React, {useContext, useState, useEffect} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';

import {AuthContext} from '../AuthProvider';

import firestore from '@react-native-firebase/firestore';

const [name, setName] = useState('');

export const getInfo = async (person, docu, info) => {
  const subscriber = firestore()
    .collection(person)
    .doc(docu)
    .onSnapshot(documentSnapshot => {
      console.log('User data: ', documentSnapshot.data());
    });
};
