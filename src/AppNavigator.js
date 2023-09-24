import { View, Text } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Splash from './Stack/Splash';
import Home from "./Stack/Home";

const AppNavigator = () => {
  const Stack=createStackNavigator();
 
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={Splash}  options={{headerShown:false}} />
        <Stack.Screen name="Home" component={Home} options={{headerShown:false}}  />
      </Stack.Navigator>
    </NavigationContainer>
     
  )
}

export default AppNavigator;