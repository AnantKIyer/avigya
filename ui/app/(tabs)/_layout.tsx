import { Stack } from 'expo-router';
import React from 'react';

import {useFonts } from "expo-font";
export default function RootLayout() {
 useFonts({
    'outfit': require('../../assets/fonts/Outfit-Regular.ttf'),
    'outfit-md': require('../../assets/fonts/Outfit-Medium.ttf'),
    'outfit-lt': require('../../assets/fonts/Outfit-Light.ttf'),
    'outfit-bd': require('../../assets/fonts/Outfit-Bold.ttf'),
 })

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false
        }}
      />
    </Stack>
  );
}
