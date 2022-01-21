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
import StepHeader from '../components/StepHeader';
import TutorDescription from '../components/TutorDescription';
import SearchBar from '../components/SearchBar';
import firestore from '@react-native-firebase/firestore';
import {createFilter} from 'react-native-search-filter';
import {storeData, getData} from '../functions/AsyncFunctions';

const TutorSelectScreen = ({navigation}) => {
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
            email: documentSnapshot.data().email,
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

  const finalTutor = async () => {
    navigation.navigate('TimeSelect');
  };

  const filteredTutors = tutors.filter(createFilter(search, KEYS_TO_FILTERS));
  return (
    <SafeAreaView style={[styles.container, {flexDirection: 'column'}]}>
      <StepHeader />
      <View style={styles.otherbg}>
        <View style={styles.largeSpacing}></View>
        <Text style={styles.titleText}>Tutor List</Text>
        <View style={styles.largeSpacing}></View>
        <SearchBar
          placeholder="Search here ..."
          changeText={e => setSearch(e.nativeEvent.text)}
        />
        <View style={styles.largeSpacing}></View>
        <FlatList
          data={filteredTutors}
          renderItem={({item}) => (
            <>
              <TutorDescription
                name={item.name}
                subjects={item.subjects}
                age={item.age}
                descr={item.descr}
              />

              <BlackButton        
                text={"Schedule Appointment with " + item.name}
                onPress={() => {
                  storeData("schedtut", item.name);
                  storeData("scehdtutem", item.email);
                  finalTutor()
                }}
                style={{alignSelf: 'center', paddingTop: 10, paddingBottom: 10}}
              />
            </>
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
    height: 20,
  },
  search: {
    width: 350,
  },
});

export default TutorSelectScreen;
