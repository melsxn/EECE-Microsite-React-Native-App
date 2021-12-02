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
    
      <View style={{ flex: 1, alignItems: 'center', marginTop: 200, marginBottom: 150 }}>
        <StatusBar style="dark" />
        <View style={{padding:10, marginTop:-50}}>
        <Button
          title="Add Announcement"
          onPress={() => navigation.navigate('AddAnnouncement')}
          color="#BD2B0C"
          style ={{marginBottom: 10}}
          
        />
        <Text/>
        <Button
          title="Edit Announcement"
          onPress={() => navigation.navigate("EditAnnouncement")}
          color="#BD2B0C"
          
        />
        <Text/>
        <Button
          title="Delete Announcement"
          onPress={() => navigation.navigate("DeleteAnnouncement")}
          color="#BD2B0C"
        />
        <Text/>
        <Button
          title="Add Program"
          onPress={() => navigation.navigate("AddProgram")}
          color="#BD2B0C"
        />
        <Text/>
        <Button
          title="Edit Program"
          onPress={() => navigation.navigate("EditProgram")}
          color="#BD2B0C"
        />
        <Text/>
        <Button
          title="Delete Program"
          onPress={() => navigation.navigate("DeleteProgram")}
          color="#BD2B0C"
        />
        <Text/>
        <Button
          title="Logout"
          onPress={() => navigation.navigate('LoginScreen')}
          color="#BD2B0C"
        />
        
        </View>
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


  
export default HomeScreen;