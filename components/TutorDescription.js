import React, {useContext, useState, useEffect} from 'react';
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

import {Avatar} from 'react-native-paper';

import {storeData, getData} from '../functions/AsyncFunctions';

const TutorDescription = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [subjects, setSubjects] = useState('');
  const [descr, setDescr] = useState('');

  const load = async () => {
    setName(await getData('name'));
    setAge(await getData('age'));
    setSubjects(await getData('subjects'));
    setDescr(await getData('description'));
  };

  load();

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.topLayer}>
          <Avatar.Image
            source={{
              uri: 'https://api.adorable.io/avatars/50/abott@adorable.png',
            }}
            size={50}
          />
          <Text>{name}</Text>
        </View>
        <View style={styles.bottomLayer}>
          <Text>{subjects}</Text>
          <Text>{age}</Text>
        </View>
        <Text style={styles.description}>{descr}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    borderWidth: 2,
    borderRadius: 30,
    width: 350,
    alignSelf: 'center',
  },
  topLayer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  bottomLayer: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  description: {
    alignSelf: 'center',
  },
  largeSpacing: {
    height: 25,
  },
});

export default TutorDescription;
