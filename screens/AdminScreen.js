import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { InnerContainer, StyledContainer } from '../components/styles';
import { StatusBar } from 'expo-status-bar';
import LoginScreen from './LoginScreen';
import {
  View,
  Text,
  Button,
  Image,
  StyleSheet, SafeAreaView
} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-evenly', marginTop: 250, marginBottom: 200 }}>
        <StatusBar style="dark" />
        <Button
          title="Add Announcement"
          onPress={() => navigation.navigate('AddAnnouncement')}
          color="#BD2B0C"
          
        />
        <Button
          title="Edit Announcement"
          onPress={() => navigation.navigate("EditAnnouncement")}
          color="#BD2B0C"
          
        />
        <Button
          title="Delete Announcement"
          onPress={() => navigation.navigate("DeleteAnnouncement")}
          color="#BD2B0C"
        />
        <Button
          title="Add Program"
          onPress={() => navigation.navigate("AddProgram")}
          color="#BD2B0C"
        />
        <Button
          title="Edit Program"
          onPress={() => navigation.navigate("EditProgram")}
          color="#BD2B0C"
        />
        <Button
          title="Delete Program"
          onPress={() => navigation.navigate("DeleteProgram")}
          color="#BD2B0C"
        />
        <Button
          title="Logout"
          onPress={() => navigation.navigate('LoginScreen')}
          color="#BD2B0C"
        />
        <Image
          style={styles.logo}
          source={require('../assets/EECE-Banner.jpg')}
        />
      </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: "100%",
    height: 120,
    position: 'absolute',
    top: -200,
  }
});

const AddScreen = ({navigation}) => {
  return (
  <SafeAreaView style={styles.container}>
    <Text>Login Success! UI Temporary for navigation testing</Text>

    <StatusBar style="auto" />
  </SafeAreaView>
  );
}

const EditScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Edit Screen</Text>
    </View>
  );
}

const DeleteScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Delete Screen</Text>
    </View>
  );
}

const AddProgramScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Add Program Screen</Text>
    </View>
  );
}

const EditProgramScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Edit Program Screen</Text>
    </View>
  );
}

const DeleteProgramScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Delete Program Screen</Text>
    </View>
  );
}



const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


  
export default HomeScreen;