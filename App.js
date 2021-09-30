import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//screens
//import LoginScreen from './screens/LoginScreen';
//import Afterlog from './screens/afterlog';
//navigations
import RootStack from './navigator/RootStack';

export default function App() {
  return <RootStack />
}
;