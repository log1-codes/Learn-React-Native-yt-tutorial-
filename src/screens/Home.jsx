import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Home = ({navigation}) => {
  return (
    <View style={{justifyContent:"center" ,alignItems:"center" , width:"100%" , height:"100%"}}>
      <Text style={{fontSize:20 ,fontWeight:500 , marginBottom:10}}>Home</Text>
      <Button title='profile' onPress={()=>navigation.navigate("Profile" , {id:1 , name:"Anurag"})}/>
    </View>

  )
}

export default Home

const styles = StyleSheet.create({})