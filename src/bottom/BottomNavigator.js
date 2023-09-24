import { View, Text } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { create } from 'react-test-renderer';
import First from './First';
import Second from './Second';
import Third from './Third';

const BottomNavigator = () => {
  const Bottom=createBottomTabNavigator();
  return (
   <Bottom.Navigator>
       <Bottom.Screen name="First" component={First} options={{headerShown:false}} />
       <Bottom.Screen name="Second" component={Second} options={{headerShown:false}}/>
       <Bottom.Screen name="Third" component={Third} options={{headerShown:false}} />
   </Bottom.Navigator>
  )
}

export default BottomNavigator;