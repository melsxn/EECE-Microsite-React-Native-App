import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Colors } from '../components/styles';

import Afterlog from '../screens/Afterlog';
import LoginScreen from '../screens/LoginScreen';
import AdminScreen from '../screens/AdminScreen';

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
                <Stack.Screen name="LoginScreen" component={LoginScreen} />
                <Stack.Screen options={{headerTintColor : '#FFFFFF',}} name="AdminScreen" component={AdminScreen} />
                <Stack.Screen name="Afterlog" component={Afterlog} />
            </Stack.Navigator>
        </NavigationContainer>
    )

}

export default RootStack;