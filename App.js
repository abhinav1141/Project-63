
import * as React from 'react';
import {  Text, View } from 'react-native';
import HomeScreen from "./screens/HomeScreen"

export default class App extends React.Component {
  render(){
    return (
      <View>
       <Text style={{alignSelf:"center",fontSize:30,backgroundColor:"blue"}}>DictionaryApp</Text>
        <HomeScreen/>
      </View> 
     )
  }
 
}

