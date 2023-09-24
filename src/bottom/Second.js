import { View, Text } from 'react-native';
import React from 'react';

const Second = ({navigation}) => {
  return (
    <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
      <Text style={{color:"red",fontSize:30}} onPress={()=>navigation.openDrawer()}>Second</Text>
    </View>
  )
}

export default Second;