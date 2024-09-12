import {
  View,
  Text,
  StyleSheet,
  useColorScheme,
  TextInput,
} from "react-native";
import { useNavigation } from "expo-router";
import React, { useEffect, useState } from "react";
import RNPickerSelect from 'react-native-picker-select';

import { Colors } from "@/constants/Colors";
import { ThemedView } from "@/components/ThemedView";

export default function UserProfile() {

  const flatDetails = [
    {
      "_id": 1, 
      "name": 'DSR Greenfields', 
      "flat": '101', 
      "block": 'A'
    },
    {
      "_id": 2,
      "name": 'DSR Greenfields', 
      "flat": '203', 
      "block": 'c'
    },
    {
      "_id": 3,
      "name": 'Alpine Viva', 
      "flat": '402', 
      "block": 'B'
    }
  ]

  
  const society = [
    {"label": "1", "value": "DSR Greenfields"}, 
    {"label": "2", "value": "Alipne Viva"},
    {"label": "3", "value": "BM Magnolia Park"}
  ]
  
  

  //Color Scheme 
  const colorScheme = useColorScheme();
  const inputTextColor = {
    color: colorScheme === "dark" ? Colors.whitish : Colors.deepSeaBlue,
    borderColor: colorScheme === "dark" ? Colors.grey : Colors.deepSeaBlue,
  };

  //To make a dropdown
  const [selectedValue, setSelectedValue] = useState(''); 
  // const [societyName, setSocietyName] = useState('');

  // useEffect(() => {
  //   setSocietyName(flatDetails)
  // })

  //To remove Top Navigation that is turned on by default
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <ThemedView style={styles.header}>
      <Text style={[styles.headerText, inputTextColor]}>User Profile</Text>

      {/* Form Starts here */}

      <View style={{ paddingTop: 20 }}>
        <Text style={[inputTextColor]}>Full Name</Text>
        <TextInput
          placeholder="Anant Iyer"
          style={[styles.input, inputTextColor]}
        />
      </View>

      {/* TODO: Add checks for valid email */}

      <View style={{ paddingTop: 20 }}>
        <Text style={[inputTextColor]}>Email ID</Text>
        <TextInput
          placeholder="someone@example.com"
          style={[styles.input, inputTextColor]}
        />
      </View>

      <View style={{ paddingTop: 20 }}>
        <Text style={[inputTextColor]}>Phone Number</Text>
        <TextInput
          placeholder="XXXXXX6747"
          style={[styles.input, inputTextColor]}
          editable={false}
          value="8960646747"
          selectTextOnFocus={false}
        />
      </View>

      <View
        style={{
          paddingTop: 15,
          borderBottomColor: colorScheme === "dark" ? Colors.whitish : "#000",
          borderBottomWidth: StyleSheet.hairlineWidth,
        }}
      />

      <View style={{paddingTop: 20}}>
        <Text style={[styles.headerText, inputTextColor]}>Residence Details</Text>
      </View>

      <View style={{paddingTop: 20}}>
        <Text>
          Society Name
        </Text>
        <RNPickerSelect 
          onValueChange={
            (v) => {setSelectedValue(v)}}
            items = {society} 
            />
            {selectedValue ? (<Text style={[inputTextColor]}>Selected : {selectedValue}</Text>) : null}
      </View>
      

    </ThemedView>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 25,
    paddingTop: 80,
    marginTop: 50,
  },
  headerText: {
    fontFamily: "outfitBold",
    fontSize: 32,
  },
  headerSubText: {
    fontFamily: "outfitMedium",
    fontSize: 30,
    color: Colors.grey,
  },
  input: {
    padding: 15,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: Colors.grey,
  },
});
