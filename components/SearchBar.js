import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  useState,
  TextInput,
} from 'react-native';

const SearchBar = props => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.bar}>
        <TextInput
          placeholder={props.placeholder}
          onChange={props.changeText}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  bar: {
    width: '90%',
    height: 50,
    backgroundColor: '#D5B537',
    borderRadius: 8,
    borderColor: '#464444',
    borderWidth: 1,
  },
  searchInput: {
    width: '100%',
    height: '100%',
    paddingLeft: 8,
    fontSize: 16,
  },
});

export default SearchBar;
