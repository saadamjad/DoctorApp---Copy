import React from 'react';
import {StyleSheet,TextInput,Text,View,Image,ScrollView,TouchableOpacity,KeyboardAvoidingView} from 'react-native';
import Entypo from "react-native-vector-icons/Entypo";
import Octicons from "react-native-vector-icons/Octicons";

export default class LoginScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          userName:"",
          password:"",
          error:"",
        };
      }
    
      userNameChange=(name)=>{
        this.setState({ userName: name });
      }
    
      passwordChange=(password)=>{
        this.setState({ password: password });
      }
    
      handleSubmit=(event)=> {
        event.preventDefault();
        
        if(this.state.userName==="" || this.state.password===""){
        this.setState({error:"Kindly Fill All The Fields"})
        }
        else{
        this.setState({error:""})
        this.props.navigation.navigate('PatientList')
        }
      }
    


  render() {
    return (

<KeyboardAvoidingView style={{flex:1}}  > 

 <View style={{flex:1}}>
   
{/* Header Image */}
   <Image source={require('./photos/headerColor.jpg')} style={{width: '100%',height:96}} />

{/* Icon Image */}
 <View style={{justifyContent:"center",alignItems:"center",marginBottom:20}}>
    
    <Image
      style={{ width: 90, height: 90,marginTop:10,backgroundColor:"white"}}
      source={require('./photos/splashScreenIcon.jpg')} />

    <Text style={{fontSize:15,color:"#549dba",fontWeight:"bold"}}>Doctor</Text>
    <Text style={{fontSize:15,color:"#244d62",fontWeight:"bold"}}>Remainder</Text>
  
 </View>

  <ScrollView>

{/* UserName TEXTINPUT */}
    <View style={{height:40,marginTop:10,marginLeft:"10%",width:"80%",borderColor:"#cfd8dc",borderWidth:2,borderBottomWidth:0,flexDirection:"row",alignItems:"center",borderTopRightRadius:5,borderTopLeftRadius:5}}>
       <Entypo name="v-card" size={25} style={{marginLeft:15,marginRight:10}} />
              
       <TextInput 
            onChangeText = {this.userNameChange} 
            placeholder="Username" style={{width:"100%"}} /> 
    </View>
    
    <View style={styles.hr} />

{/* Password TEXTINPUT */}
    <View style={{height:40,marginTop:10,marginLeft:"10%",width:"80%",borderColor:"#cfd8dc",borderWidth:2,borderBottomWidth:0,flexDirection:"row",alignItems:"center",borderTopRightRadius:5,borderTopLeftRadius:5}}>  
       <Octicons name="key" size={25} style={{marginLeft:15,marginRight:10}} />
              
       <TextInput 
            onChangeText = {this.passwordChange} 
            placeholder="Password" style={{width:"100%"}}
            secureTextEntry={true} /> 
    </View>
    
    <View style={styles.hr} />

{/* Login Button */}
<View style={{justifyContent:"center",alignItems:"center",marginTop:20}}>

    <TouchableOpacity style={{backgroundColor:"#56a0c5",width:150,alignItems:"center",height:40,justifyContent:"center",borderRadius:20}} onPress={this.handleSubmit} >
    <Text style={{fontSize:15,color:"white"}}>Login</Text>
    </TouchableOpacity>

    {/* Text for create and forget account */}
    <TouchableOpacity style={{marginTop:10}}><Text style={{color:"#56a0c5"}}>Create an account</Text></TouchableOpacity>
    <TouchableOpacity style={{marginTop:10}}><Text style={{color:"#56a0c5"}}>Forget your password</Text></TouchableOpacity>

</View>

{/* Error Text */}
<View style={{justifyContent:"center",alignItems:"center",marginTop:20}}>
    <Text style={{color:"red"}}>{this.state.error}</Text>
</View>

</ScrollView>
   
</View>
</ KeyboardAvoidingView > 

    )
  }
}

const styles = StyleSheet.create({
      hr:{
          borderBottomColor: '#73aeca',
          borderBottomWidth: 2,
          width:"80%",
          marginLeft:"10%"
         }
   });
  
  