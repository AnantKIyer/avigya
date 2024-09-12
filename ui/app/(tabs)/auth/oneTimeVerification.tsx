import { View, Text, StyleSheet, TextInput, TouchableOpacity, useColorScheme } from 'react-native';
import { useEffect, useState } from 'react';
import { useNavigation, useRouter } from 'expo-router';
import React from 'react';

import { Colors } from '@/constants/Colors';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';

export default function oneTimeVerificatoin() {

const colorScheme = useColorScheme(); 

const inputStyles = {
    color: colorScheme === 'dark' ?  Colors.whitish : Colors.grey
}
    
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
    const tempPass: String = '123456';
    if(!oneTimePass.trim()) {
        alert('OTP cannot be blank');
        return;
    }
    if(oneTimePass === tempPass) {
        router.push('/(tabs)/profile/EditUserProfile');
    } else {
        alert('Incorrect OTP. Please try again')
    }
}



  return (
    <ThemedView style={styles.header}>
      <ThemedText style= {styles.headerText}>Enter the OTP</ThemedText>

      <ThemedView style={{
        marginTop: 50
      }}>
        <ThemedText type='defaultSemiBold' style={{padding: 5}}>One Time Password</ThemedText>
        <TextInput placeholder='One Time Verification' style={[styles.input, inputStyles]} onChangeText={
            (value) => setOneTimePass(value)
        }/>
        <TouchableOpacity style={{
            width: '100%',
            alignItems: 'flex-end'
        }}>
            <ThemedText style={{
                fontFamily: 'outfitLight',
                paddingRight: 2
            }}>Resend OTP?</ThemedText>
            </TouchableOpacity>
      </ThemedView>
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
    </ThemedView>
  )
}

const styles = StyleSheet.create({
    header: {
        padding: 25,
        paddingTop: 80,
    },
    headerText: {
        paddingTop: 30,
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