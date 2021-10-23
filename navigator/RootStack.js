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



const Stack = createNativeStackNavigator();
const {primary, tertiary} = Colors;

const RootStack = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator 
                screenOptions={{
                    headerStyle:{
                        backgroundcolor: 'transparent'
                    },
                    headerTintColor: primary,
                    headerTransparent: true,
                    headerTitle:'',
                    headerShown: false,
                    headerLeft: null,
                    
                    
            }}
            initialRouteName="LoginScreen"
            >
            <Stack.Group>
                <Stack.Screen name="LoginScreen" component={LoginScreen} />
                <Stack.Screen options={{headerTintColor : '#FFFFFF',}} name="AdminScreen" component={AdminScreen} />
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="ProgramPage" component={ProgramPage} />
                <Stack.Screen name="BachelorScreen" component={BachelorScreen} />
                <Stack.Screen name="MasterScreen" component={MasterScreen} />
                <Stack.Screen name="PhDScreen" component={PhDScreen} />
            </Stack.Group>
            <Stack.Group>
                <Stack.Screen name="Afterlog" component={Afterlog} />
                <Stack.Screen name="AddAnnouncement" component={AddAnnouncement} />
                <Stack.Screen name="EditAnnouncement" component={EditAnnouncement} />
                <Stack.Screen name="DeleteAnnouncement" component={DeleteAnnouncement} />
                <Stack.Screen name="AddProgram" component={AddProgram} />
                <Stack.Screen name="EditProgram" component={EditProgram} />
                <Stack.Screen name="DeleteProgram" component={DeleteProgram} />
            </Stack.Group>


            </Stack.Navigator>
        </NavigationContainer>
    )

}

export default RootStack;