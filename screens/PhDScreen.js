import React, { useEffect, useState } from "react";
import { View, StyleSheet, TextInput, Text, Button, Alert, Image, ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Card } from 'react-native-elements'
import axios from "axios";



function PhDScreen() {


  const[result, setResult] = useState([]);


  useEffect(() => {
      handleEdit()
  }, [])

  const handleEdit = ()=> {
    const uri = 'http://192.168.1.10:3000/programdata/getPhD';
    
    const credentials = '';
    axios.post(uri, credentials).then((response) => {
      const results = response.data;
     const {status, Date, data} = results;

      setResult(data)


    })
    .catch(error => {
        console.log("error");
    })
  }
  return (
    <ScrollView>
    <View>
    <View style={styles.header}>
      <Text style={styles.screenName}>PhD Programs</Text>
    </View>
    <View>
      <Image source={require('../assets/EECE-Banner.jpg')} style={styles.banner} resizeMode="contain"/>

    </View>
    <DisplayData props = {result} />
    </View>
    </ScrollView>




  );
}

const DisplayData = ({props}) => {
    
  const {status, message, data} = props;
  //console.log(props[2].Date)
    if (props.length > 0) {
      return(
        props.map((prop, index) => {
          
          return (
            <Card key ={index}>
                <Text style={styles.title}>{prop.TitleProgram}</Text>
                <Text style={styles.date}>{prop.Date}</Text>
                <Text >{prop.Description}</Text>
            </Card>
        )

        })
      )

    } else {
      return(
        <Text>NONE</Text>
      )
    }
               
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
    marginTop:-100,
    marginBottom:-90
  },
  icon:{
    marginTop:40,
    marginLeft:15
  },
  title:{
    fontWeight:'bold',
    fontSize:20,
    color:'#000000'
  },
  date:{
    fontWeight:'100',
    fontSize:12,
    marginBottom:10
  }
});

export default PhDScreen;