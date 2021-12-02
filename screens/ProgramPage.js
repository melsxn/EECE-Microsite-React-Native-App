import React, { useEffect, useState } from "react";
import { View, StyleSheet, TextInput, Text, Button, Alert, Image, ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Card } from 'react-native-elements'
import axios from "axios";

function ProgramPage({navigation}) {
  
  const[result, setResult] = useState([]);

  useEffect(() => {
      handleEdit()
  }, [])

  const handleEdit = ()=> {
    const uri = 'http://192.168.1.10:3000/announcementdata/test2';
    
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

      <View>
        <Image source={require('../assets/web-banner.jpg')} style={styles.banner} resizeMode="contain"/>
      </View>

      <Card>
        <Text style={styles.title} onPress={() => navigation.navigate("BachelorScreen")}>Bachelor's Degrees</Text>
      </Card>

       <Card>
        <Text style={styles.title} onPress={() => navigation.navigate("MasterScreen")}>Master's Degrees</Text>
      </Card>

      <Card>
        <Text style={styles.title} onPress={() => navigation.navigate("PhDScreen")}>PhD Programs</Text>
      </Card>



    </View>
    </ScrollView>
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

const DisplayData = ({props}) => {
    
  const {status, message, data} = props;
  //console.log(props[2].Date)
    if (props.length > 0) {
      return(
        props.map((prop, index) => {
          
          return (
            <Card >
                <Text style={styles.title}></Text>

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


export default ProgramPage;
