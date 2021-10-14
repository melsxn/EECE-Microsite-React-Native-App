import React from "react";
import { View, StyleSheet, TextInput, Text, Button } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Formik } from "formik";

import axios from "axios";

const DeleteAnnounce = () => {

  const handleDelete = (credentials)=> {
    const uri = 'http://192.168.1.10:3000/announcementdata/deleteannouncement';
    //http://localhost:3000/announcementdata/editannouncement
    axios.post(uri, credentials).then((response) => {
        const results = response.data;
        const {message, status, data} = results;
        console.log(status);
        // if condition here for delete output
        if(status !== 'SUCCESS'){
          console.log("Not Success");
        } else {
          console.log("Announcement Successfully deleted!!");
        }
        
    })
    .catch(error => {
        console.log("There was an error!");
    })
}

  return (
    <Formik
    initialValues={{ Title:'' }}
    onSubmit={(values) => {
        console.log(values);
  
        handleDelete(values);
        
    }}
  >{({handleChange,handleBlur,handleSubmit, values}) => (
            <View>
            <View style={styles.header}>
              <Icon name='arrow-left' size={20} style={styles.icon}/>
              <Text style={styles.screenName}>Delete Announcements</Text>
            </View>
            <View style={styles.search}>
              <TextInput  
              placeholder={'    Search title of Announcement here'}
              style={styles.searchBox}
              onChangeText={handleChange('Title')}
              values={values.Title}
              />
              <Icon name='search' size={20} style={styles.icon2}/>
            </View>
            <View style={styles.forButton}>
             <Button
                title="Delete"
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
    flexDirection:'row',
    marginTop:20,
    marginLeft:70
  },
  searchBox:{
    height:35,
    width:250,
    borderWidth:1,
    borderRadius:6,
    marginBottom:10
  },
  icon2:{
    marginTop:0,
    marginLeft:10
  },
  forButton:{
    alignItems:'center'
  }
});

export default DeleteAnnounce;
