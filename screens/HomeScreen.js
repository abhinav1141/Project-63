import * as React from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native';
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

        var searchkeyword=text.toLowerCase()
        var url="https://rupinwhitehatjr.github.io/dictionary/"+searchkeyword+".json"
        return fetch(url)
        .then((data)=>{
            if(data.status===200){
                return data.json()
            }
            else{
                return null
            }
        })
        .then((response)=>{
            var responseobject=response
            if(responseobject){
                var wordData=responseobject.definitions[0]
                var definition=wordData.description
                var lexicalCategory=wordData.wordtype
                this.setState({
                    word:this.state.text,
                    definition:definition,
                    lexicalCategory:lexicalCategory
                })
            }
            else{
                this.setState({
                    word:this.state.text,
                    definition:"NOT FOUND",
                })
            }
        })

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
             <View> <Text style={{fontSize:20}} >Word:{""}</Text>
             <Text >{this.state.word}</Text>
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

