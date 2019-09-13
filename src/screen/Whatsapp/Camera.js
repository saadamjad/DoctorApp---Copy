import React from 'react';
import {Text,View,Image,TouchableOpacity,Dimensions,Buttonm,ScrollView,TextInput,StyleSheet} from 'react-native';
import { throwStatement, isNoop } from '@babel/types';
// import { Input } from 'native-base';


export default class Camera extends React.Component {
 
  state={
    userName:"",
    pass:"",
    error:"",
    msg:""

  };
  getUsername=uName=>{
  this.setState({userName:uName});
  //console.log(uName)
  };
  getPassword=p=>{
    this.setState({pass:p});
   // console.log(p)
  };
  onSubmit=()=>{
    //this.props.navigation.navigate('Objsetting')
    // console.log("Ssssss")
      if(this.state.userName===""|| this.state.pass==="")
      {
        this.setState({msg:"fill all inputs"})
      }
      else if(this.state.userName==="saad" ||this.state.pass==="saad"){
            // this.props.navigation.navigate('Objsetting')
            //alert("hey")
            this.setState({msg:""})
            
      }
      else {
        this.setState({msg:"username or password wrong"})
      }
  };

  



  render() {

    

      return(
  
   
 <View>
<Text>this is call Camera </Text>
 
    
{/* submit Button */}
<View style={{justifyContent:"center",alignItems:"center",marginTop:20}}>

  <TextInput
  placeholder="enter username"
  style={styles.TextInput}
  onChangeText={this.getUsername}
   onSubmitEditing={()=>this.password.focus() }
   returnKeyType="next"
   blurOnSubmit={true}
   maxLength={10}
   clearTextOnFocus={true}
 />

<TextInput
  placeholder="Password"
  style ={styles.TextInput}
  secureTextEntry={true}
   ref={(input)=> this.password = input}
   onChangeText={this.getPassword}
  onSubmitEditing={()=>this.login.focus()}
  returnKeyType="next"
  blurOnSubmit={true}
   maxLength={40}
   clearTextOnFocus={true}
 />



  
<TouchableOpacity style={styles.button} 
onPress={this.onSubmit}


>
<Text style={{fontSize:15,color:"white"}}>Login</Text>
</TouchableOpacity>
<Text> {this.state.msg} </Text>
<Text>Don't have an account? Sign up  </Text>



</View>
 </View>
 

  )
  }
}
const styles = StyleSheet.create({

  TextInput:{
    borderWidth:1,width:'80%',borderRadius:40,marginTop:20,paddingLeft:20
  },
  button:{
    backgroundColor:"#56a0c5",width:'80%',alignItems:"center",height:40,justifyContent:"center",borderRadius:20,marginTop:20

  }
})

  
  