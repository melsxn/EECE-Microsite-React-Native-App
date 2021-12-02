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
import { Formik } from 'formik';
import axios from 'axios';


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
    color:'#000000',
    marginBottom:10
  },

  screenName2:{
    alignSelf:'center',
    fontWeight:'bold',
    fontSize:20,
    color:'#000000',
    marginBottom:10
  },

  screenName3:{
    alignSelf:'center',
    fontWeight:'bold',
    fontSize:14,
    color:'#FF0000',
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

const AddProgramScreen = ({navigation}) => {
  const [message, setMessage] = useState();
  const [selectedValue, setSelectedValue] = useState();
  const [titleText, setTitleText] = useState();
  const onPressTitle = () => {
    setTitleText("PhD");
  };
  const handleAdd = (credentials)=> {
    const uri = 'http://192.168.1.10:3000/programdata/addprogram';
    axios.post(uri, credentials).then((response) => {
      const results = response.data;
      const {message, status, data} = results;
      console.log(status);
      
      // if condition here of add program
      if(status !== 'SUCCESS'){
        console.log("Not Success");
        setMessage(message);
      } else {
        console.log("Program Successfully added!!");
        setMessage(message);
      }
        
    })
    .catch(error => {
        console.log("error");
    })
  }

  
  return (
    <Formik
    enableReinitialize
    initialValues={{ProgramType:'', TitleProgram:'', Date:'', Description:'' }}
    onSubmit={(values) => {
        console.log(values);
  
        handleAdd(values);
        
    }}
  >{({handleChange,handleBlur,handleSubmit, values}) => (
    <View style={{ flex: 1, alignContent: 'center',  marginTop: 200, marginBottom: 100 }}>
      <Image
        style={styles.logo}
        source={require('../assets/EECE-Banner.jpg')}
      />
      <View style={{ marginTop: -80}}> 
      
      <Picker
        selectedValue={values.ProgramType}
        style={{ height: 30, width: 200 }}
        onValueChange={handleChange('ProgramType')}
        values = {values.ProgramType}
        
      > 
        <Picker.Item label="Choose Program" value=""  />
        <Picker.Item label="Bachelor's Degrees" value="Bachelor's Degrees"   />
        <Picker.Item label="Master's Degrees" value="Master's Degrees" />
        <Picker.Item label="PhD Programs" value="PhD Programs" />
      </Picker>
      
      <View style={styles.search}>
      <Text style={styles.screenName2}

        >{selectedValue}</Text>
        
        <TextInput
          placeholder="    Program Name"
          placeholderTextColor="#666666"
          onChangeText={handleChange('TitleProgram')}
          values={values.TitleProgram}
          style={styles.searchBox}
        />

      </View>
      <View style={styles.search}>
        <TextInput
          placeholder="    Date"
          placeholderTextColor="#666666"
          onChangeText={handleChange('Date')}
          values={values.Date}
          style={styles.searchBox}
        />
      </View>
      <View style={styles.search}>
        <TextInput
          multiline
          numberOfLines={10}
          placeholder="   Description"
          placeholderTextColor="#666666"
          onChangeText={handleChange('Description')}
          values={values.Description}
          style={styles.textInput}
        />
      </View>
      <View style={{padding:10}}  >
      <Text style={styles.screenName3}>{message}</Text>
       <Button 
          title="Add"
          color="#000000"
          onPress={handleSubmit}
        />
        <View style={styles.space} />
        <Button
          title="Back"
          onPress={() => navigation.navigate("AdminScreen")}
          color="#000000"
        />
      </View>

      </View>

      </View>
  )}
  </Formik>
  )
}


export default AddProgramScreen