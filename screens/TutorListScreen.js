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
  Button,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import GoldTextBox from '../components/GoldTextBox';
import BlackButton from '../components/BlackButton';
import HomeHeader from '../components/HomeHeader';
import TutorDescription from '../components/TutorDescription';
import SearchBar from '../components/SearchBar';
import firestore from '@react-native-firebase/firestore';

const TutorListScreen = ({navigation}) => {
  const [search, setSearch] = useState(' ');
  const [loading, setLoading] = useState(true);
  const [tutors, setTutors] = useState([]);

  const newSearch = search => {
    setSearch(search);
  };

  useEffect(() => {
    const subscriber = firestore()
      .collection('tutors')
      .onSnapshot(querySnapshot => {
        const tutors = [];

        querySnapshot.forEach(documentSnapshot => {
          tutors.push({
            key: documentSnapshot.id,
            name: documentSnapshot.name,
          });
        });

        setTutors(tutors);
        setLoading(false);
      });
    return () => subscriber();
  }, []);

  if (loading) {
    return <ActivityIndicator />;
  }

  const [items, setItems] = useState([
    {name: 'test', subjects: 'math', age: '12', descr: 'hehehe'},
    {name: 'test1', subjects: 'math1', age: '13', descr: 'hehehe1'},
    {name: 'test1', subjects: 'math1', age: '13', descr: 'hehehe1'},
  ]);

  return (
    <SafeAreaView style={[styles.container, {flexDirection: 'column'}]}>
      <HomeHeader onPress={() => navigation.openDrawer()} />
      <View style={styles.otherbg}>
        <View style={styles.largeSpacing}></View>
        <Text style={styles.titleText}>Tutor List</Text>
        <View style={styles.largeSpacing}></View>
        <SearchBar />
        <FlatList
          data={tutors}
          renderItem={({item}) => (
            <View
              style={{
                height: 50,
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text>{item.id}</Text>
              <Text>{item.name}</Text>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
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
  largeSpacing: {
    height: 25,
  },
  search: {
    width: 350,
  },
});

export default TutorListScreen;
