import { View, Text, StyleSheet, TextInput, TouchableOpacity, useColorScheme } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { Colors } from '@/constants/Colors';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';

export default function Login() {

    const router = useRouter();

    const [phoneNumber, setPhoneNumber] = useState('');

    const colorScheme = useColorScheme();
    const inputTextColor = colorScheme === 'dark'? Colors.whitish : Colors.deepSeaBlue;

    const inputStyles = {
        
        color: colorScheme === 'dark'? Colors.whitish : Colors.deepSeaBlue,
    }
    
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
        router.push('/(tabs)/auth/oneTimeVerification');
        
    }


  return (
    <ThemedView style={styles.header}>
        <ThemedView style={{height: 120}}>
        <ThemedText style= {styles.headerText}>Let's Sign you in!</ThemedText>
        <ThemedText style= {styles.headerSubText}>Lorem ipsum dolor sit</ThemedText>
        </ThemedView>
      

      <View style={{
        marginTop: 120
      }}>
        <Text style={{paddingLeft: 5}}>Phone No.</Text>
        <TextInput 
        placeholder='Your Phone Number' 
        maxLength={10}
        placeholderTextColor={inputTextColor} 
        style={[styles.input, inputStyles]} 
        onChangeText={
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
    </ThemedView>
  )
}

const styles = StyleSheet.create({
    header: {
        padding: 25,
        paddingTop: 80,
        marginTop: 50,
        height: '100%'
    },
    headerText: {
        fontFamily: 'outfitBold', 
        fontSize: 30, 
        paddingTop: 30
    },
    headerSubText: {
        fontFamily: 'outfitLight',
        fontSize: 30,
        color: Colors.grey,
        paddingTop: 5, 

    },
    input: {
        padding: 15, 
        borderWidth: 1, 
        borderRadius: 15, 
        borderColor: Colors.grey
    }
})