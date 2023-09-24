import { View, Text } from 'react-native';
import React from 'react';

const Third = ({navigation}) => {
  return (
    <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
      <Text style={{fontSize:30,color:"orange"}} onLongPress={()=>navigation.openDrawer()}>Third</Text>
    </View>
  )
}

export default Third;