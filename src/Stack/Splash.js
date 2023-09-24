import { View, Text } from 'react-native'
import React,{useEffect} from 'react'

const Splash = ({navigation}) => {
    useEffect(()=>{
        setTimeout(()=>{
           navigation.navigate("Home");
        },2000);
    },[]);
  return (
    <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
      <Text style={{fontSize:30}}>Splash</Text>
    </View>
  )
}

export default Splash