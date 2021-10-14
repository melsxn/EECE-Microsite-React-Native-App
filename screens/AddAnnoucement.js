import React from "react";
import { View, StyleSheet, TextInput, Text, Button, Alert } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

import { Formik } from "formik";

import axios from "axios";

const AddAnnounce = () => {
  const handleAdd = (credentials)=> {
    const uri = 'http://192.168.1.10:3000/announcementdata/addannouncement';
    //http://localhost:3000/announcementdata/editannouncement
    axios.post(uri, credentials).then((response) => {
      const results = response.data;
      const {message, status, data} = results;
      console.log(status);
      
      // if condition here to direct to admin ui 
      if(status !== 'SUCCESS'){
        console.log("Not Success");
      } else {
        console.log("Announcement Successfully added!!");
      }
        
    })
    .catch(error => {
        console.log("error");
    })
}
const handleMessage = (message, type = 'FAILED') => {
  setMessage(message);
  setMessageType(type);
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
      <Icon name='arrow-left' size={20} style={styles.icon}/>
      <Text style={styles.screenName}>Add Announcements</Text>
    </View>
    <View style={styles.search}>
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
       <Button
        title="Submit"
        color='#000000'
        onPress={handleSubmit}
      />
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
  },
  searchBox:{
    height:35,
    width:250,
    borderWidth:1,
    borderRadius:6,
    marginBottom:10
  }
});

export default AddAnnounce;
