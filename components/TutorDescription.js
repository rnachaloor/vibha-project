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

const TutorDescription = props => {
  /*const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [subjects, setSubjects] = useState('');
  const [descr, setDescr] = useState('');

  const load = async () => {
    setName(await getData('name'));
    setAge(await getData('age'));
    setSubjects(await getData('subjects'));
    setDescr(await getData('description'));
  };

  load();*/

  return (
    <SafeAreaView>
      <View style={styles.largeSpacing}></View>
      <View style={styles.container}>
        <View style={styles.topLayer}>
          <Avatar.Image
            source={{
              uri: 'https://api.adorable.io/avatars/50/abott@adorable.png',
            }}
            size={80}
          />
          <Text style={{paddingLeft: 20, fontSize: 25}}>{props.name}</Text>
        </View>
        <View style={styles.smallSpacing}></View>
        <View style={styles.bottomLayer}>
          <Text style={{paddingBottom: 10, fontSize: 17}}>
            {'Subjects: ' + props.subjects}
          </Text>
          <Text style={{paddingBottom: 10, paddingLeft: 10, fontSize: 17}}>
            {'Age: ' + props.age}
          </Text>
        </View>
        <Text style={styles.description}>{props.descr}</Text>
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
    fontSize: 15,
  },
  largeSpacing: {
    height: 25,
  },
  smallSpacing: {
    height: 15,
  },
});

export default TutorDescription;
