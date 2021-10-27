import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Colors } from '../components/styles';

import Afterlog from '../screens/Afterlog';
import LoginScreen from '../screens/LoginScreen';
import AdminScreen from '../screens/AdminScreen';
import AddAnnouncement from '../screens/AddAnnoucement';
import AddProgram from '../screens/AddProgram';
import EditProgram from '../screens/EditProgram';
import DeleteProgram from '../screens/DeleteProgram';
import EditAnnouncement from '../screens/EditAnnouncement';
import DeleteAnnouncement from '../screens/DeleteAnnouncement';
import Home from '../screens/Home';
import ProgramPage from '../screens/ProgramPage';
import BachelorScreen from '../screens/BachelorScreen';
import MasterScreen from '../screens/MasterScreen';
import PhDScreen from '../screens/PhDScreen';

import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();


const HomeNavigator = () => {
  
  return(
    
    <Stack.Navigator options={{ headerShown: false }} initialRouteName="ProgramPage">
      <Stack.Screen options={{ headerShown: false }} name="AdminScreen" component={AdminScreen} />
      <Stack.Screen options={{ headerShown: false }} name="Home" component={Home} />
      <Stack.Screen options={{ headerShown: false }} name="ProgramPage" component={ProgramPage} />
      <Stack.Screen options={{ headerShown: false }} name="BachelorScreen" component={BachelorScreen} />
      <Stack.Screen options={{ headerShown: false }} name="MasterScreen" component={MasterScreen} />
      <Stack.Screen options={{ headerShown: false }} name="PhDScreen" component={PhDScreen} />
    </Stack.Navigator>
  )
}

const AdminNavigator = () => {
  return(
    <Stack.Navigator options={{ headerShown: false }} initialRouteName="LoginScreen">
      <Stack.Screen options={{ headerShown: false }} name="LoginScreen" component={LoginScreen} />
      <Stack.Screen options={{ headerShown: false }} name="AddAnnouncement" component={AddAnnouncement} />
      <Stack.Screen options={{ headerShown: false }} name="EditAnnouncement" component={EditAnnouncement} />
      <Stack.Screen options={{ headerShown: false }} name="DeleteAnnouncement" component={DeleteAnnouncement} />
      <Stack.Screen options={{ headerShown: false }} name="AddProgram" component={AddProgram} />
      <Stack.Screen options={{ headerShown: false }} name="EditProgram" component={EditProgram} />
      <Stack.Screen options={{ headerShown: false }} name="DeleteProgram" component={DeleteProgram} />
      <Stack.Screen options={{ headerShown: false }} name="AdminScreen" component={AdminScreen} />
    </Stack.Navigator>
  )
}

const RootStack = () => {
    return(
        <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home" screenOptions={{
           drawerStyle: {
             backgroundColor: '#FFFFCC'
           },
           headerShown: true,
           headerStyle:{
             backgroundColor:'red'
           }
        }}>
           <Drawer.Screen name="Home" component={Home}/>
           <Drawer.Screen name="Login" component={AdminNavigator}/>
           <Drawer.Screen name="Programs" component={HomeNavigator}/>  
        </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default RootStack;