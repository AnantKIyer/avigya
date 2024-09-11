import { 
  Image, 
  StyleSheet, 
  View, 
  Text,
  SafeAreaView,  
  Dimensions } from 'react-native';

import Home from '@/components/Home';

export default function HomeScreen() {
  return (
    <View>
      <View>
        <Home />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }, 
  title:{
    fontFamily: 'outfit-bd',
    fontSize: 34, 
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
