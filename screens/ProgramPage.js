import React from "react";
import { View, StyleSheet, TextInput, Text, Button, Alert, Image } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Card } from 'react-native-elements'

const Home = () => {
  return (
    <View>
      <View style={styles.header}>
        <Icon name='arrow-left' size={20} style={styles.icon}/>
        <Text style={styles.screenName}>Programs</Text>
      </View>
      <View>
        <Image source={require('../assets/web-banner.jpg')} style={styles.banner} resizeMode="contain"/>
      </View>
      <Card>
        <Text style={styles.title}>Bachelor's Degrees</Text>
      </Card>
      <Text>     data from db will be here</Text>
       <Card>
        <Text style={styles.title}>Master's Degrees</Text>
      </Card>
      <Text>     data from db will be here</Text>
      <Card>
        <Text style={styles.title}>PhD Programs</Text>
      </Card>
      <Text>     data from db will be here</Text>
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
  banner:{
    width:400,
    marginTop:-427,
    marginBottom:-425
  },
  icon:{
    marginTop:40,
    marginLeft:15
  },
  title:{
    fontWeight:'bold',
    fontSize:16
  }
});

export default Home;
