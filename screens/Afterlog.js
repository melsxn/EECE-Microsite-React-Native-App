import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';



export default function Afterlog() {
  console.log("Login Success! UI Temporary for navigation testing");

  return (
    <SafeAreaView style={styles.container}>
      <Text>Login Success! UI Temporary for navigation testing</Text>
      <StatusBar style="light" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "dodgerblue",
    alignItems: 'center',
    justifyContent: 'center',
  },
});