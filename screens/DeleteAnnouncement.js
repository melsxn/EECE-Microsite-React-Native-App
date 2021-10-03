import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';



export default function DeleteAnnouncement() {
  return (
    <SafeAreaView style={styles.container}>
            <Text>DELETE ANNOUNCEMENT! UI Temporary for navigation testing</Text>
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
  logo: {
    width: "100%",
    height: 120,
    position: 'absolute',
    top: -200,
  }
});