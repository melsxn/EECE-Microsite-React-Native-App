import React, { useState } from "react";
import { View, StyleSheet, TextInput, Text, Button, Alert } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

import { Formik } from "formik";

import axios from "axios";

const AddAnnounce = ({navigation}) => {

  const [message, setMessage] = useState();


  const handleAdd = (credentials)=> {
    const uri = 'http://192.168.1.10:3000/announcementdata/addannouncement';
    axios.post(uri, credentials).then((response) => {
      const results = response.data;
      const {message, status, data} = results;
      console.log(status);
      
      // if condition here to 
      if(status !== 'SUCCESS'){
        console.log("Not Success");
        setMessage(message);
      } else {
        console.log("Announcement Successfully added!!");
        setMessage(message);
      }
        
    })
    .catch(error => {
        console.log("error");
    })
}

  return (
<Formik
    initialValues={{ Title:'', Date:'', Description:'' }}
    onSubmit={(values) => {
        console.log(values);
  
        handleAdd(values);
        
    }}
  >{({handleChange,handleBlur,handleSubmit, values}) => (
    <View>
    <View style={styles.header}>

      <Text style={styles.screenName}>Add Announcements</Text>
      
    </View>
    <View style={styles.search}>
    <Text style={styles.screenName2}>{message}</Text>
      <TextInput  
      placeholder={'   Title of Announcement'}
      style={styles.searchBox}
      onChangeText={handleChange('Title')}
      values={values.Title}
      required={true}
      />
      <TextInput  
      placeholder={'   Date'}
      style={styles.searchBox}
      onChangeText={handleChange('Date')}
      values={values.Date}
      />
      <TextInput 
      multiline
      placeholder={'   Description'}
      style={styles.searchBox}
      required={true}
      onChangeText={handleChange('Description')}
      values={values.Description}
      />
      
      <View style={{padding:20}}>
       <Button
        title="                            Submit                          "
        color='#000000'
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
  );
}

const styles = StyleSheet.create({
  header:{
    backgroundColor:'#FF0000',
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
    marginTop:60,
  },
  searchBox:{
    height:35,
    width:250,
    borderWidth:1,
    borderRadius:6,
    marginBottom:10
  },
  space:{
    height:10,
    width:10
  }
});

export default AddAnnounce;
