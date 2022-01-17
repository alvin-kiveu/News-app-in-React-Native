import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {enableScreens} from 'react-native-screens';

enableScreens();

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Headlings from './android/screens/headlines';
import Story from './android/screens/story';
import Search from './android/screens/search';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Headlings"
          options={{headerShown: false}}
          component={Headlings}
        />
        <Stack.Screen
          name="Story"
          component={Story}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Search"
          component={Search}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
