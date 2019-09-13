import React from 'react';
import {Text,TextInput,View,Image,TouchableOpacity,Dimensions,Buttonm,ScrollView} from 'react-native';

export default class Whatsapplogin extends React.Component {
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
     if( this.state.userName==="" || this.state.password===""){
       this.setState({error:'please fill inputs',})

     }
    

   else if(this.state.userName==="Saad" || this.state.password==="Saad"){
    this.setState({error:"Correct"})
    this.props.navigation.navigate('Objchat')
    }
    else{
    this.setState({error:" username or password is incorrect"})
    
    }
  }
  

  render() {

    

      return(
  
        <View style={{backgroundColor:'white',flex:1}}>
         
       <View style={{alignItems:"center",paddingTop:100}}>
           
           <Text style={{fontSize:40,color:'#0c6157'}}>Whatsapp</Text>
     </View>
         <ScrollView>

{/* UserName TEXTINPUT */}
    <View style={{padding:30}}>
    <TextInput  placeholder="enter your name " style={{ borderBottomWidth:3,borderColor:"#cfd8dc",}}   onChangeText = {this.userNameChange} />  
   
    <TextInput 
            onChangeText = {this.passwordChange} 
            placeholder="Password" style={{ borderBottomWidth:3,borderColor:"#cfd8dc",marginTop:20}}
            secureTextEntry={true} /> 
    </View>
    
    

{/* Password TEXTINPUT */}
    
              
   
   
    
{/* Login Button */}
<View style={{justifyContent:"center",alignItems:"center",marginTop:20}}>

    <TouchableOpacity style={{backgroundColor:"#56a0c5",width:150,alignItems:"center",height:40,justifyContent:"center",borderRadius:20}} onPress={this.handleSubmit} >
    <Text style={{fontSize:15,color:"white"}}>Login</Text>
    </TouchableOpacity>


</View>

{/* Error Text */}
<View style={{justifyContent:"center",alignItems:"center",marginTop:20}}>
    <Text style={{color:"red"}}>{this.state.error}</Text>
</View>

</ScrollView>
   
   
        </View>

  )
  }
}

  
  