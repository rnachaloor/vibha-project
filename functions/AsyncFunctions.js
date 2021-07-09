import React from "react"
import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, value)
    } catch (e) {
        console.log(e)
    }
}

export const getData = async (key) => {
    let data = await AsyncStorage.getItem(key);
    return data
}