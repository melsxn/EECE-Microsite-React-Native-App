import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { InnerContainer, StyledContainer } from '../components/styles';
import { StatusBar } from 'expo-status-bar';


import {
  View,
  Text,
  Button,
  Image,
  StyleSheet, SafeAreaView
} from 'react-native';

const LoginScreen = ({navigation}) => {
  return (
    
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-evenly', marginTop: 200, marginBottom: 200 }}>
        <StatusBar style="dark" />
        <Button
          title="Add asodoasd"
          onPress={() => navigation.navigate("Add", {screen : "AdminScreen" })}
          color="#BD2B0C"
          
        />
        <Button
          title="Edit"
          onPress={() => navigation.navigate("Edit")}
          color="#BD2B0C"
          
        />
        <Button
          title="Delete"
          onPress={() => navigation.navigate("Delete")}
          color="#BD2B0C"
        />
        <Button
          title="Program"
          onPress={() => navigation.navigate("Program")}
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

const AddScreen = () => {
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

const ProgramScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Program Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const AdminScreen = () => {
    return (
      <NavigationContainer independent={true}>
        <Stack.Navigator screenOptions={{ headerTitle:'', headerLeft: null, }} initialRouteName="Home">
          <Stack.Screen options={{headerTintColor : '#FFFFFF',}} name="Admin Login" component={LoginScreen} />
          <Stack.Screen options={{headerTintColor : '#FFFFFF',}} name="Add" component={AddScreen} />
          <Stack.Screen name="Edit" component={EditScreen} />
          <Stack.Screen name="Delete" component={DeleteScreen} />
          <Stack.Screen name="Program" component={ProgramScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
  export default AdminScreen;