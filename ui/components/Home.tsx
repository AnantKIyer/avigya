import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';
import { Colors } from '@/constants/Colors';

export default function Home() {
    
    const router = useRouter()

  return (
    <View>
        <Image source = {require('./../assets/images/buildings.jpg')} style={styles.heroImg} />
        
        <View style={styles.heroTextContainer}>
            <Text style={styles.heroText}>Welcome to Avigya</Text>
            <Text style={styles.heroSubText}>Let's elevate your housing experience</Text>

            <TouchableOpacity style={styles.getStarted}
                onPress={()=> router.push('/(tabs)/auth/Login')}
            >
                <Text style={{
                    color: Colors.whitish,
                    fontSize: 18,
                    fontFamily: 'outfitMedium',
                    textAlign: 'center'
                }}>Get Started!</Text>
            </TouchableOpacity>
        </View>
    </View>

  )
}

const styles = StyleSheet.create({
    heroImg: {
        width: '100%',
        height: 550
    },
 
    heroText: {
        fontSize: 34, 
        fontFamily: 'outfitBold',
        padding: 15,
        textAlign: 'center'
    },
    heroSubText: {
        textAlign: 'center',
        fontSize: 16, 
        fontFamily: 'outfitLight',
        marginTop: -8,
        fontStyle: 'italic'

    },
    heroTextContainer: {
        shadowColor: '#000', 
        shadowOffset: {
            width: 0, 
            height: 1, 
        },
        shadowOpacity: 0.8, 
        shadowRadius: 1,
        elevation: 5,
        backgroundColor: Colors.whitish,
        marginTop: -30, 
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35, 
        height: '100%',
    },
    getStarted: {
        padding: 15, 
        width: '80%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '35%',
        backgroundColor: Colors.deepSeaBlue,
        color: Colors.whitish,
        borderRadius: 100,
    }
})