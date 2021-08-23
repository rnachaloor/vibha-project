import React, {useState, useContext} from 'react';
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
} from 'react-native';
import GoldTextBox from '../components/GoldTextBox';
import BlackButton from '../components/BlackButton';
import Header from '../components/Header';
import {AuthContext} from '../AuthProvider';
import {storeData, getData} from '../functions/AsyncFunctions';
import {Checkbox} from 'react-native-paper';
import firestore from '@react-native-firebase/firestore';

const TimeChoiceScreen = ({navigation}) => {
  const [m1, setM1] = useState(false);
  const [m2, setM2] = useState(false);
  const [m3, setM3] = useState(false);
  const [m4, setM4] = useState(false);
  const [m5, setM5] = useState(false);
  const [m6, setM6] = useState(false);
  const [m7, setM7] = useState(false);
  const [m8, setM8] = useState(false);

  const [tu1, setTU1] = useState(false);
  const [tu2, setTU2] = useState(false);
  const [tu3, setTU3] = useState(false);
  const [tu4, setTU4] = useState(false);
  const [tu5, setTU5] = useState(false);
  const [tu6, setTU6] = useState(false);
  const [tu7, setTU7] = useState(false);
  const [tu8, setTU8] = useState(false);

  const [w1, setW1] = useState(false);
  const [w2, setW2] = useState(false);
  const [w3, setW3] = useState(false);
  const [w4, setW4] = useState(false);
  const [w5, setW5] = useState(false);
  const [w6, setW6] = useState(false);
  const [w7, setW7] = useState(false);
  const [w8, setW8] = useState(false);

  const [th1, setTH1] = useState(false);
  const [th2, setTH2] = useState(false);
  const [th3, setTH3] = useState(false);
  const [th4, setTH4] = useState(false);
  const [th5, setTH5] = useState(false);
  const [th6, setTH6] = useState(false);
  const [th7, setTH7] = useState(false);
  const [th8, setTH8] = useState(false);

  const [f1, setF1] = useState(false);
  const [f2, setF2] = useState(false);
  const [f3, setF3] = useState(false);
  const [f4, setF4] = useState(false);
  const [f5, setF5] = useState(false);
  const [f6, setF6] = useState(false);
  const [f7, setF7] = useState(false);
  const [f8, setF8] = useState(false);

  const {register} = useContext(AuthContext);

  const getEmail = async () => {
    const email = await getData('email');
    return email;
  };

  const getPass = async () => {
    const password = await getData('password');
    return password;
  };

  const submit = async () => {
    let final = '';
    let dayinit = ['m', 'tu', 'w', 'th', 'f'];
    let nums = ['1', '2', '3', '4', '5', '6', '7', '8'];
    for (let i = 0; i < 5; i++) {
      for (let k = 1; k < 9; k++) {
        let option = dayinit[i] + nums[k];
        if (option == true) {
          final = final + option + ', ';
        }
      }
    }

    storeData('times', final);

    const email = await getData('email');
    const password = await getData('password');
    const name = await getData('name');
    const username = await getData('username');
    const age = await getData('age');
    const grade = await getData('grade');
    const subjects = await getData('subjects');
    const description = await getData('description');
    const lowgrade = await getData('lowgrade');
    const highgrade = await getData('highgrade');
    const times = await getData('times');
    register(email, password);
    firestore()
      .collection('tutors')
      .add({
        name: name,
        username: username,
        password: password,
        email: email,
        age: age,
        grade: grade,
        subjects: subjects,
        description: description,
        lowGrade: lowgrade,
        highGrade: highgrade,
        times: times,
      })
      .then(() => {
        console.log('SUCCESS');
      });
  };

  return (
    <SafeAreaView style={[styles.container, {flexDirection: 'column'}]}>
      <Header />
      <View style={styles.otherbg}>
        <View style={styles.smallSpacing}></View>
        <Text style={styles.titleText}>Choose Times</Text>
        <View style={styles.smallSpacing}></View>
        <View style={{flexDirection: 'column', alignSelf: 'center'}}>
          <Text>Monday:</Text>
          <View style={{flexDirection: 'column'}}>
            <View style={{flexDirection: 'row'}}>
              <Checkbox
                status={m1 ? 'checked' : 'unchecked'}
                onPress={() => {
                  setM1(!m1);
                }}
              />
              <Text>5:00 PM</Text>
              <Checkbox
                status={m2 ? 'checked' : 'unchecked'}
                onPress={() => {
                  setM2(!m2);
                }}
              />
              <Text>5:30 PM</Text>
              <Checkbox
                status={m3 ? 'checked' : 'unchecked'}
                onPress={() => {
                  setM3(!m3);
                }}
              />
              <Text>6:00 PM</Text>
              <Checkbox
                status={m4 ? 'checked' : 'unchecked'}
                onPress={() => {
                  setM4(!m4);
                }}
              />
              <Text>6:30 PM</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Checkbox
                status={m5 ? 'checked' : 'unchecked'}
                onPress={() => {
                  setM5(!m5);
                }}
              />
              <Text>7:00 PM</Text>
              <Checkbox
                status={m6 ? 'checked' : 'unchecked'}
                onPress={() => {
                  setM6(!m6);
                }}
              />
              <Text>7:30 PM</Text>
              <Checkbox
                status={m7 ? 'checked' : 'unchecked'}
                onPress={() => {
                  setM7(!m7);
                }}
              />
              <Text>8:00 PM</Text>
              <Checkbox
                status={m8 ? 'checked' : 'unchecked'}
                onPress={() => {
                  setM8(!m8);
                }}
              />
              <Text>8:30 PM</Text>
            </View>
          </View>
        </View>
        <View style={styles.largeSpacing}></View>
        <View style={{flexDirection: 'column', alignSelf: 'center'}}>
          <Text>Tuesday:</Text>
          <View style={{flexDirection: 'column'}}>
            <View style={{flexDirection: 'row'}}>
              <Checkbox
                status={tu1 ? 'checked' : 'unchecked'}
                onPress={() => {
                  setTU1(!tu1);
                }}
              />
              <Text>5:00 PM</Text>
              <Checkbox
                status={tu2 ? 'checked' : 'unchecked'}
                onPress={() => {
                  setTU2(!tu2);
                }}
              />
              <Text>5:30 PM</Text>
              <Checkbox
                status={tu3 ? 'checked' : 'unchecked'}
                onPress={() => {
                  setTU3(!tu3);
                }}
              />
              <Text>6:00 PM</Text>
              <Checkbox
                status={tu4 ? 'checked' : 'unchecked'}
                onPress={() => {
                  setTU4(!tu4);
                }}
              />
              <Text>6:30 PM</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Checkbox
                status={tu5 ? 'checked' : 'unchecked'}
                onPress={() => {
                  setTU5(!tu5);
                }}
              />
              <Text>7:00 PM</Text>
              <Checkbox
                status={tu6 ? 'checked' : 'unchecked'}
                onPress={() => {
                  setTU6(!tu6);
                }}
              />
              <Text>7:30 PM</Text>
              <Checkbox
                status={tu7 ? 'checked' : 'unchecked'}
                onPress={() => {
                  setTU7(!tu7);
                }}
              />
              <Text>8:00 PM</Text>
              <Checkbox
                status={tu8 ? 'checked' : 'unchecked'}
                onPress={() => {
                  setTU8(!tu8);
                }}
              />
              <Text>8:30 PM</Text>
            </View>
          </View>
        </View>
        <View style={styles.largeSpacing}></View>
        <View style={{flexDirection: 'column', alignSelf: 'center'}}>
          <Text>Wednesday:</Text>
          <View style={{flexDirection: 'column'}}>
            <View style={{flexDirection: 'row'}}>
              <Checkbox
                status={w1 ? 'checked' : 'unchecked'}
                onPress={() => {
                  setW1(!w1);
                }}
              />
              <Text>5:00 PM</Text>
              <Checkbox
                status={w2 ? 'checked' : 'unchecked'}
                onPress={() => {
                  setW2(!w2);
                }}
              />
              <Text>5:30 PM</Text>
              <Checkbox
                status={w3 ? 'checked' : 'unchecked'}
                onPress={() => {
                  setW3(!w3);
                }}
              />
              <Text>6:00 PM</Text>
              <Checkbox
                status={w4 ? 'checked' : 'unchecked'}
                onPress={() => {
                  setW4(!w4);
                }}
              />
              <Text>6:30 PM</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Checkbox
                status={w5 ? 'checked' : 'unchecked'}
                onPress={() => {
                  setW5(!w5);
                }}
              />
              <Text>7:00 PM</Text>
              <Checkbox
                status={w6 ? 'checked' : 'unchecked'}
                onPress={() => {
                  setW6(!w6);
                }}
              />
              <Text>7:30 PM</Text>
              <Checkbox
                status={w7 ? 'checked' : 'unchecked'}
                onPress={() => {
                  setW7(!w7);
                }}
              />
              <Text>8:00 PM</Text>
              <Checkbox
                status={w8 ? 'checked' : 'unchecked'}
                onPress={() => {
                  setW8(!w8);
                }}
              />
              <Text>8:30 PM</Text>
            </View>
          </View>
        </View>
        <View style={styles.largeSpacing}></View>
        <View style={{flexDirection: 'column', alignSelf: 'center'}}>
          <Text>Thursday:</Text>
          <View style={{flexDirection: 'column'}}>
            <View style={{flexDirection: 'row'}}>
              <Checkbox
                status={th1 ? 'checked' : 'unchecked'}
                onPress={() => {
                  setTH1(!th1);
                }}
              />
              <Text>5:00 PM</Text>
              <Checkbox
                status={th2 ? 'checked' : 'unchecked'}
                onPress={() => {
                  setTH2(!th2);
                }}
              />
              <Text>5:30 PM</Text>
              <Checkbox
                status={th3 ? 'checked' : 'unchecked'}
                onPress={() => {
                  setTH3(!th3);
                }}
              />
              <Text>6:00 PM</Text>
              <Checkbox
                status={th4 ? 'checked' : 'unchecked'}
                onPress={() => {
                  setTH4(!th4);
                }}
              />
              <Text>6:30 PM</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Checkbox
                status={th5 ? 'checked' : 'unchecked'}
                onPress={() => {
                  setTH5(!th5);
                }}
              />
              <Text>7:00 PM</Text>
              <Checkbox
                status={th6 ? 'checked' : 'unchecked'}
                onPress={() => {
                  setTH6(!th6);
                }}
              />
              <Text>7:30 PM</Text>
              <Checkbox
                status={th7 ? 'checked' : 'unchecked'}
                onPress={() => {
                  setTH7(!th7);
                }}
              />
              <Text>8:00 PM</Text>
              <Checkbox
                status={th8 ? 'checked' : 'unchecked'}
                onPress={() => {
                  setTH8(!th8);
                }}
              />
              <Text>8:30 PM</Text>
            </View>
          </View>
        </View>
        <View style={styles.largeSpacing}></View>
        <View style={{flexDirection: 'column', alignSelf: 'center'}}>
          <Text>Friday:</Text>
          <View style={{flexDirection: 'column'}}>
            <View style={{flexDirection: 'row'}}>
              <Checkbox
                status={f1 ? 'checked' : 'unchecked'}
                onPress={() => {
                  setF1(!f1);
                }}
              />
              <Text>5:00 PM</Text>
              <Checkbox
                status={f2 ? 'checked' : 'unchecked'}
                onPress={() => {
                  setF2(!f2);
                }}
              />
              <Text>5:30 PM</Text>
              <Checkbox
                status={f3 ? 'checked' : 'unchecked'}
                onPress={() => {
                  setF3(!f3);
                }}
              />
              <Text>6:00 PM</Text>
              <Checkbox
                status={f4 ? 'checked' : 'unchecked'}
                onPress={() => {
                  setF4(!f4);
                }}
              />
              <Text>6:30 PM</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Checkbox
                status={f5 ? 'checked' : 'unchecked'}
                onPress={() => {
                  setF5(!f5);
                }}
              />
              <Text>7:00 PM</Text>
              <Checkbox
                status={f6 ? 'checked' : 'unchecked'}
                onPress={() => {
                  setF6(!f6);
                }}
              />
              <Text>7:30 PM</Text>
              <Checkbox
                status={f7 ? 'checked' : 'unchecked'}
                onPress={() => {
                  setF7(!f7);
                }}
              />
              <Text>8:00 PM</Text>
              <Checkbox
                status={f8 ? 'checked' : 'unchecked'}
                onPress={() => {
                  setF8(!f8);
                }}
              />
              <Text>8:30 PM</Text>
            </View>
          </View>
        </View>
        <View style={styles.largeSpacing}></View>
        <BlackButton
          onPress={() => submit()}
          text="Sign Up"
          style={{alignSelf: 'center'}}
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
  bgTextBox: {
    backgroundColor: 'white',
    borderRadius: 30,
    paddingLeft: 10,
    width: 350,
    height: 150,
    left: 20,
  },
  otherbg: {
    flex: 7,
    backgroundColor: '#8839BF',
  },
  insidebg: {
    alignSelf: 'center',
    backgroundColor: '#D5B537',
    width: 380,
    height: 500,
    borderRadius: 20,
    paddingTop: 40,
    paddingLeft: 20,
  },
  titleText: {
    fontSize: 30,
    alignSelf: 'center',
    color: 'white',
  },
  largeSpacing: {
    height: 15,
  },
  forgot: {
    alignSelf: 'auto',
    color: 'black',
    fontSize: 20,
    paddingBottom: 20,
  },
  button: {
    backgroundColor: '#464444',
    width: 200,
    borderRadius: 50,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
  },
  other: {
    paddingLeft: 15,
  },
  direction: {
    flexDirection: 'row',
  },
});

export default TimeChoiceScreen;
