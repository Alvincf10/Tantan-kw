import React from 'react';
import {
  View,
  Button,
  TouchableHighlight,
  TouchableOpacity,
  Text,
  Image,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Registrasionscreen from './screens/Registrasionscreen';
import WelcomeScreen from './screens/Welcomescreen';

const Stack = createStackNavigator();

export default function App({props,navigation}){
  return(
    <NavigationContainer>
      <Stack.Navigator
       initialRouteName="Home"
       screenOptions={{headerShown:false}}
       >
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Registrasion" component={Registrasionscreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
