import * as React from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native';
import dictionary from "../database";
export default class HomeScreen extends React.Component{

    constructor(){
        super();
        this.state={
            text:"",
            lexicalCategory:"",
            word:"LOADING",
            defination:"",
            isSearchPressed:true
        }
    }
    getWord=(text)=>{
var text=text.toLowerCase()
try{
    var word=dictionary[text]["word"]
     var lexicalCategory=dictionary[text]["lexicalCategory"]
     var definition=dictionary[text]["definition"]
     this.setState({
         word:word,
         lexicalCategory:lexicalCategory,
         definition:definition
     })
}
     catch(err){
         alert("Sorry this word is not available for now")
         this.setState({
             text:"",
             isSearchPressed:false
         })
     }   
    }

    render(){
        return(
            <View>
    
                 <TextInput
            style={{borderWidth:5}}
            onChangeText={text=>{
                this.setState({
                    text:text,
                    isSearchPressed:false,
                    word:"LOADING...",
                    lexicalCategory:"",
                    definition:""
                });
            }}
            value={this.state.text}/>
             <TouchableOpacity
             style={{alignSelf:"center",backgroundColor:"red",marginTop:10}}
             onPress={()=>{
                 this.setState({isSearchPressed:true});
                 this.getWord(this.state.text)
             }}><Text style={{fontSize:30}}>SEARCH</Text></TouchableOpacity>
             <View> <Text style={{fontSize:20}}>Word:{""}</Text>
             <Text>{this.state.word}</Text>
             </View>
             <View>
             <Text style={{marginTop:10,fontSize:20}}>Type:{""}</Text>
             <Text >{this.state.lexicalCategory}</Text>
             </View>
             <View>
              <Text style={{marginTop:10,fontSize:20}}>Definition:{""}</Text>
              <Text>{this.state.definition}</Text>
             </View>
             </View>
            
            
        )
    
   
           
           
}
}

