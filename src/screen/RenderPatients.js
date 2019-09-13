import React from 'react';
import {Text,View,Image,TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default class LoginScreen extends React.Component {
  
  render() {
      return(
        <View style={{marginTop:10,width:"100%",height:100,flexDirection:"row",backgroundColor:"white"}}>
        
           <View style={{width:"70%"}}>
               <Text style={{marginLeft:10,marginTop:10,color:"black"}}>{this.props.patientName}</Text>
               
               <View style={{flex:1,justifyContent:"flex-end"}}>
                <TouchableOpacity style={{marginBottom:10,marginLeft:10,width:50,alignItems:"center"}}>
                    <Text style={{color:"#55a0c3"}}>Details</Text>
                </TouchableOpacity>
               </View>
           </View>

           <View style={{width:"30%"}}>
              <View style={{width:"100%",height:60,backgroundColor:"yellow",marginTop:10}}>
                <Image source={this.props.patientPhoto} style={{width: '100%',height:"100%",borderColor:"#cccccc",borderWidth:2}} />
              </View>
               <View style={{justifyContent:"center",alignItems:"center",flex:1,flexDirection:"row"}}>
                    <MaterialCommunityIcons name="timer-sand-empty" size={15} color="#55a0c3" />
                    <Text >19.47</Text>
               </View>
           </View>

        </View>
    )
  }
}

  
  