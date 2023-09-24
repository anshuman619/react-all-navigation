import { View, Text } from 'react-native';
import React from 'react';
import {createDrawerNavigator} from "@react-navigation/drawer";
import Main from "./Main";
import Second from './Second';

const DrawerNavigator = () => {
    const Drawer=createDrawerNavigator();
  return (
      <Drawer.Navigator>
        <Drawer.Screen name='Main' component={Main} />
        <Drawer.Screen name="Second" component={Second} />
      </Drawer.Navigator>
  )
}

export default DrawerNavigator;