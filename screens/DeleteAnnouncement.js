import React from "react";
import { View, StyleSheet, TextInput, Text, Button } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

const DeleteAnnounce = () => {
  return (
    <View>
    <View style={styles.header}>
      <Icon name='arrow-left' size={20} style={styles.icon}/>
      <Text style={styles.screenName}>Delete Announcements</Text>
    </View>
    <View style={styles.search}>
      <TextInput  
      placeholder={'    Search title of Announcement here'}
      style={styles.searchBox}/>
      <Icon name='search' size={20} style={styles.icon2}/>
    </View>
    <View style={styles.forButton}>
     <Button
        title="Delete"
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
