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
import {createFilter} from 'react-native-search-filter';

const TutorListScreen = ({navigation}) => {
  const [tutors, setTutors] = useState([]);
  //const [loading, setLoading] = useState(true);

  useEffect(() => {
    const subscriber = firestore()
      .collection('tutors')
      .onSnapshot(querySnapshot => {
        const tutors = [];

        querySnapshot.forEach(documentSnapshot => {
          tutors.push({
            key: documentSnapshot.id,
            name: documentSnapshot.data().name,
            subjects: documentSnapshot.data().subjects,
            age: documentSnapshot.data().age,
            descr: documentSnapshot.data().description,
          });
          //console.log(tutors);
        });

        setTutors(tutors);
        //setLoading(false);
      });
    return () => subscriber();
  }, []);

  //if (loading) {
  //  return <ActivityIndicator />;
  //}
  const KEYS_TO_FILTERS = ['name', 'subjects'];
  const [search, setSearch] = useState('');

  const newSearch = search => {
    setSearch(search);
  };

  const filteredTutors = tutors.filter(createFilter(search, KEYS_TO_FILTERS));
  return (
    <SafeAreaView style={[styles.container, {flexDirection: 'column'}]}>
      <HomeHeader onPress={() => navigation.openDrawer()} />
      <View style={styles.otherbg}>
        <View style={styles.largeSpacing}></View>
        <Text style={styles.titleText}>Tutor List</Text>
        <View style={styles.largeSpacing}></View>
        <SearchBar
          placeholder="Search here ..."
          changeText={e => setSearch(e.nativeEvent.text)}
        />
        <FlatList
          data={filteredTutors}
          renderItem={({item}) => (
            <TutorDescription
              name={item.name}
              subjects={item.subjects}
              age={item.age}
              descr={item.descr}
            />
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
