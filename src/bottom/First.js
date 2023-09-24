import { View, Text } from 'react-native';
import React from 'react';

const First = ({navigation}) => {
  return (
    <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
      <Text style={{fontSize:40,color:"blue"}} onPress={()=>navigation.openDrawer()}>First</Text>
    </View>
  )
}

export default First;