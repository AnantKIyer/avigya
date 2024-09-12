import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from 'expo-router';
import React, { useEffect } from 'react';

import { Colors } from '@/constants/Colors';

export default function UserProfile() {

  const navigation  = useNavigation(); 

  useEffect(()=> {
    navigation.setOptions({
      headerShown: false
    })
  }, [])

  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>User Profile</Text>
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