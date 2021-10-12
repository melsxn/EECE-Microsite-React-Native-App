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
    flex: 1,
    paddingLeft: 10,
    color: '#05375a',
  },
  logo: {
    width: "100%",
    height: 120,
    position: 'absolute',
    top: -200,
  }
})

function EditProgramScreen ({ navigation }) {
  const [selectedValue, setSelectedValue] = useState("java");
  return (
    <View style={{ flex: 1, alignContent: 'center',  marginTop: 200, marginBottom: 200 }}>
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
      <View style={{ flex: 1, }}>
        <TextInput
          placeholder="Program Name"
          placeholderTextColor="#666666"
          style={styles.textInput}
        />
      </View>
      <View style={{ flex: 2, }}>
        <TextInput
          multiline
          numberOfLines={10}
          placeholder="Description"
          placeholderTextColor="#666666"
          style={styles.textInput}
        />
      </View>
        <Button
          title="Update"
          onPress={() => navigation.navigate("EditProgram")}
          color="#BD2B0C"
        />
        <Button
          title="Back"
          onPress={() => navigation.navigate("AdminScreen")}
          color="#BD2B0C"
        />
      </View>
  )
}

export default EditProgramScreen