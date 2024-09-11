import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { Colors } from '@/constants/Colors';

export default function Login() {

    const router = useRouter();

    const [phoneNumber, setPhoneNumber] = useState('');
    

    const navigation = useNavigation(); 

    useEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [])

    const checkValidNumber = () => {
        if(!phoneNumber.trim()) {
            alert('Phone Number is empty! Please enter a number');
            return;
        } 
        if(phoneNumber.trim().length > 10 || phoneNumber.trim().length <10 || !/^\d+$/.test(phoneNumber.trim())) {
            alert("Please enter a valid phone number!");
            return;
        } 
        //TODO: Write the authentication API function here
        router.push('/(tabs)/auth/oneTimeVerificatoin');
        
    }


  return (
    <View style={styles.header}>
      <Text style= {styles.headerText}>Let's Sign you in!</Text>
      <Text style= {styles.headerSubText}>Lorem ipsum dolor sit amet</Text>

      <View style={{
        marginTop: 50
      }}>
        <Text style={{paddingLeft: 5}}>Phone No.</Text>
        <TextInput placeholder='Your Phone Number' style={styles.input} onChangeText={
            (value) => setPhoneNumber(value)
        }/>
      </View>
      <TouchableOpacity style={{
        marginTop: 30,
         padding: 15, 
         backgroundColor: Colors.deepSeaBlue,
         borderRadius: 15, 
      }}
      onPress={checkValidNumber}
      >
        <Text style={{
            color: Colors.whitish,
            textAlign: 'center',
            fontSize: 18
        }}>Sign In</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    header: {
        padding: 25,
        paddingTop: 80,
        marginTop: 50
    },
    headerText: {
        fontFamily: 'outfitBold', 
        fontSize: 32, 
    },
    headerSubText: {
        fontFamily: 'outfitMedium',
        fontSize: 30,
        color: Colors.grey
    },
    input: {
        padding: 15, 
        borderWidth: 1, 
        borderRadius: 15, 
        borderColor: Colors.grey
    }
})