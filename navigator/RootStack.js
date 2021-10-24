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

const {primary, tertiary} = Colors;


const HomeNavigator = () => {
  return(
    <Stack.Navigator initialRouteName="ProgramPage">
      <Stack.Screen name="AdminScreen" component={AdminScreen} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ProgramPage" component={ProgramPage} />
      <Stack.Screen name="BachelorScreen" component={BachelorScreen} />
      <Stack.Screen name="MasterScreen" component={MasterScreen} />
      <Stack.Screen name="PhDScreen" component={PhDScreen} />
    </Stack.Navigator>
  )
}

const AdminNavigator = () => {
  return(
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="AddAnnouncement" component={AddAnnouncement} />
      <Stack.Screen name="EditAnnouncement" component={EditAnnouncement} />
      <Stack.Screen name="DeleteAnnouncement" component={DeleteAnnouncement} />
      <Stack.Screen name="AddProgram" component={AddProgram} />
      <Stack.Screen name="EditProgram" component={EditProgram} />
      <Stack.Screen name="DeleteProgram" component={DeleteProgram} />
      <Stack.Screen name="AdminScreen" component={AdminScreen} />
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