import React from "react";
import { View, StyleSheet, TextInput, Text, Button, Alert } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

const AddAnnounce = () => {
  return (
    <View>
    <View style={styles.header}>
      <Icon name='arrow-left' size={20} style={styles.icon}/>
      <Text style={styles.screenName}>Add Announcements</Text>
    </View>
    <View style={styles.search}>
      <TextInput  
      placeholder={'   Title of Announcement'}
      style={styles.searchBox}
      required={true}
      />
      <TextInput  
      placeholder={'   Date'}
      style={styles.searchBox}/>
      <TextInput 
      multiline
      placeholder={'   Description'}
      style={styles.searchBox}
      required={true}/>
       <Button
        title="Submit"
        color='#000000'
      />
    </View>
    </View>
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
