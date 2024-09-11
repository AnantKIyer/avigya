import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';
import { useNavigation, useRouter } from 'expo-router';
import React from 'react';

import { Colors } from '@/constants/Colors';

export default function oneTimeVerificatoin() {
    
const navigation = useNavigation(); 
const router = useRouter()

useEffect(() => {
    navigation.setOptions({
        headerShown: false
    })
}, [])

const [oneTimePass, setOneTimePass] = useState('');

const validateOTP = () => {
    //TODO: write validation API and logic here
    const tempPass: String = '123456'
    if(!oneTimePass.trim()) {
        alert('OTP cannot be blank');
        return;
    }
    if(oneTimePass === tempPass) {
        router.push('/(tabs)/profile/UserProfile');
    } else {
        alert('Incorrect OTP. Please try again')
    }

    
}



  return (
    <View style={styles.header}>
      <Text style= {styles.headerText}>Enter the OTP</Text>

      <View style={{
        marginTop: 50
      }}>
        <Text style={{paddingLeft: 5}}>One Time Password</Text>
        <TextInput placeholder='One Time Verification' style={styles.input} onChangeText={
            (value) => setOneTimePass(value)
        }/>
        <TouchableOpacity style={{
            width: '100%',
            alignItems: 'flex-end'
        }}>
            <Text style={{
                fontFamily: 'outfitLight',
                color: Colors.deepSeaBlue, 
                paddingRight: 2
            }}>Resend OTP?</Text>
            </TouchableOpacity>
      </View>
      <TouchableOpacity style={{
        marginTop: 30,
         padding: 15, 
         backgroundColor: Colors.deepSeaBlue,
         borderRadius: 15, 
      }}
      onPress={validateOTP}
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