import * as React from 'react';
import { useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  TextInput,
  Picker,
} from 'react-native';

const styles = StyleSheet.create({
  textInput: {
    color: '#05375a',
    borderWidth: 1,
    borderRadius:6,
    marginBottom:10,
    width:350,
  },
  logo: {
    width: "100%",
    height: 120,
    position: 'absolute',
    top: -200,
  },
  header:{
    marginBottom:20,
  },
  screenName:{
    alignSelf:'center',
    fontWeight:'bold',
    fontSize:20,
    color:'#FFFFFF',
    marginBottom:10
  },
  icon:{
    marginTop:40,
    marginLeft:15
  },
  search:{
    alignItems:'center',
    flexDirection:'column',
    marginTop:20,
    paddingLeft:10
  },
  searchBox:{
    height:35,
    width:250,
    borderWidth:1,
    borderRadius:6,
    marginBottom:10
  },
  searchBox2:{
    height:35,
    width:250,
    borderWidth:1,
    borderRadius:6,
    marginBottom:10,
    maxHeight:80,
    minHeight:10,
    flex: 5
  },
  space:{
    height:10,
    width:10
  }
})

function AddProgramScreen ({ navigation }) {
  const [selectedValue, setSelectedValue] = useState("java");
  return (
    <View style={{ flex: 1, alignContent: 'center',  marginTop: 200, marginBottom: 100 }}>
      <Image
        style={styles.logo}
        source={require('../assets/EECE-Banner.jpg')}
      />
      <Picker
        selectedValue={selectedValue}
        style={{ height: 30, width: 200 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Bachelor's Degrees" value="BS" />
        <Picker.Item label="Master's Degrees" value="MS" />
        <Picker.Item label="PhD Programs" value="PP" />
      </Picker>
      <View style={styles.search}>
        <TextInput
          placeholder="    Program Name"
          placeholderTextColor="#666666"
          style={styles.searchBox}
        />
      </View>
      <View style={styles.search}>
        <TextInput
          placeholder="    Date"
          placeholderTextColor="#666666"
          style={styles.searchBox}
        />
      </View>
      <View style={styles.search}>
        <TextInput
          multiline
          numberOfLines={10}
          placeholder="   Description"
          placeholderTextColor="#666666"
          style={styles.textInput}
        />
      </View>
      <View style={{padding:10}}  >
       <Button 
          title="Add"
          color="#000000"
        />
        <View style={styles.space} />
        <Button
          title="Back"
          onPress={() => navigation.navigate("AdminScreen")}
          color="#000000"
        />

      </View>

      </View>
  )
}


export default AddProgramScreen