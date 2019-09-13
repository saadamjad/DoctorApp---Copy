import React from 'react';
import {ImageBackground,TextInput,TouchableOpacity,Text,View,StyleSheet,KeyboardAvoidingView,ScrollView} from 'react-native';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Foundation from "react-native-vector-icons/Foundation";
import Entypo from "react-native-vector-icons/Entypo";
import DateTimePicker from "react-native-modal-datetime-picker";
import moment from "moment";
import Ionicons from "react-native-vector-icons/Ionicons";

export default class PatientInfo extends React.Component {

    constructor(props) {
    super(props);
    this.state = {
      isDateTimePickerVisible: true,
      date:"",
      validEmail:true,
      Email:"",
      patientName:"",
      facebookLink:"",
      phoneNo:"",
      error:"",
      emailError:""
    };
  }

    showDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: true });
  };

  hideDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: false });
  };

  handleDatePicked = date => {
    this.setState({ date: moment(date).format("MMMM, Do YYYY HH:mm") });
    console.log("A date has been picked: ", date);
    this.hideDateTimePicker();
  };


  handleEmailChange=(email)=> {
    const emailCheckRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    this.setState({ Email: email });

    if (!this.state.validEmail) {
      if (emailCheckRegex.test(email)) {
        this.setState({ validEmail: true });
      }
    } else if (!emailCheckRegex.test(email)) {
      this.setState({ validEmail: false });
    }
  }

  facbookLinkChange=(link)=>{
    this.setState({ facebookLink: link });
  }

  phoneNoChange=(phone)=>{
    this.setState({ phoneNo: phone });
  }

  patientNameChange=(name)=>{
    this.setState({ patientName: name });
  }

  handleSubmit=(event)=> {
    event.preventDefault();
    if(this.state.patientName==="" || this.state.phoneNo==="" || this.state.email==="" || this.state.facebookLink==="" || this.state.date===""){
    this.setState({error:"Kindly Fill All The Fields"})
    }
    else if(this.state.validEmail===false){
      this.setState({
        emailError:"Kindly Enter Right Email ",
        error:""   
      })   
    }
    else if(this.state.validEmail===true){
    this.setState({
      emailError:""
  })
      this.props.navigation.navigate('PatientList')
    }
  }

    render() {
    return (

<KeyboardAvoidingView style={{flex:1}}  > 

<View style={styles.container}>

{/* Header Image */}
<ImageBackground source={require('./photos/headerColor.jpg')} style={{width: '100%',height:96}} >
<Ionicons name="md-arrow-round-back" size={30}  color="black" style={{marginLeft:20,marginTop:20}} 
              onPress={() => this.props.navigation.goBack()}/>
  </ImageBackground>

{/* Patient Info Text */}
   <View style={{width:"100%",height:80,alignItems:"center",justifyContent:"center"}}>
        <Text style={{fontSize:25,color:"#89a0a9",fontWeight:"bold"}}>Patient Info</Text>
   </View>


<ScrollView>

  {/* Patient Name TEXTINPUT */}
  <View style={{height:40,marginTop:10,marginLeft:"10%",width:"80%",borderColor:"#cfd8dc",borderWidth:2,borderBottomWidth:0,flexDirection:"row",alignItems:"center",borderTopRightRadius:5,borderTopLeftRadius:5}}>
       <MaterialIcons name="person-outline" size={25} style={{marginLeft:15,marginRight:10}} />
    
    <TextInput 
              onChangeText = {this.patientNameChange} 
              placeholder="Patient Name" style={{width:"100%"}}/> 
  </View>
    
  <View style={styles.hr} />


{/* Date And Time Picker */}
  <View style={{height:40,marginTop:10,marginLeft:"10%",width:"80%",borderColor:"#cfd8dc",borderWidth:2,borderBottomWidth:0,flexDirection:"row",alignItems:"center",borderTopRightRadius:5,borderTopLeftRadius:5}}>   
       <FontAwesome name="calendar" size={25} style={{marginLeft:15,marginRight:10}}
       onPress={this.showDateTimePicker} />
       {
         this.state.date === "" ?
         <Text style={{fontSize:14}}>Click The Icon</Text>
:
         <Text style={{fontSize:14,color:"black"}}>{this.state.date}</Text>

       }
    </View>

    <View style={styles.hr} />
    
{/* Phone No Area */}
  <View style={{height:40,marginTop:10,marginLeft:"10%",width:"80%",borderColor:"#cfd8dc",borderWidth:2,borderBottomWidth:0,flexDirection:"row",alignItems:"center",borderTopRightRadius:5,borderTopLeftRadius:5}}>   
       <Foundation name="telephone" size={25} style={{marginLeft:15,marginRight:10}} />
            <TextInput 
              onChangeText = {this.phoneNoChange} 
              placeholder="phone number" 
              style={{width:"100%"}}
              keyboardType="phone-pad" />
    </View>

    <View style={styles.hr} />

{/* Email TEXTINPUT */}
  <View style={{height:40,marginTop:10,marginLeft:"10%",width:"80%",borderColor:"#cfd8dc",borderWidth:2,borderBottomWidth:0,flexDirection:"row",alignItems:"center",borderTopRightRadius:5,borderTopLeftRadius:5}}>       
       <MaterialCommunityIcons name="email-outline" size={25} style={{marginLeft:15,marginRight:10}} />
            <TextInput 
              onChangeText = {this.handleEmailChange} 
              placeholder="Email" 
              style={{width:"100%"}}
              keyboardType="email-address" />
    </View>

    <View style={styles.hr} />


{/* FaceBook Link TEXTINPUT */}
  <View style={{height:40,marginTop:10,marginLeft:"10%",width:"80%",borderColor:"#cfd8dc",borderWidth:2,borderBottomWidth:0,flexDirection:"row",alignItems:"center",borderTopRightRadius:5,borderTopLeftRadius:5}}>           
       <Entypo name="link" size={25} style={{marginLeft:15,marginRight:10}} />
            <TextInput 
              onChangeText = {this.facbookLinkChange} 
              placeholder="Facebook Link" 
              style={{width:"100%"}} />
    </View>

    <View style={styles.hr} />

{/* Submit Button */}
  <View style={{justifyContent:"center",alignItems:"center",marginTop:10}}>
    <TouchableOpacity style={{backgroundColor:"#56a0c5",width:150,alignItems:"center",height:40,justifyContent:"center",borderRadius:20}} onPress={this.handleSubmit}>
      <Text style={{fontSize:20,color:"white"}}>SUBMIT</Text>
    </TouchableOpacity>
  </View>

{/* Errors Area */}
  <View style={{justifyContent:"center",alignItems:"center",marginTop:10}}>
      <Text style={{color:"red"}}>{this.state.error}</Text>
  </View>

  <View style={{justifyContent:"center",alignItems:"center",marginTop:10}}>
      <Text style={{color:"red"}}>{this.state.emailError}</Text>
  </View>


<DateTimePicker
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this.handleDatePicked}
          onCancel={this.hideDateTimePicker}
          mode="datetime"
        />

  </ScrollView>
        
 </View>
</KeyboardAvoidingView> 
 
    );
  }
}

const styles = StyleSheet.create({

  container:{
    flex: 1,
},
       hr:{
          borderBottomColor: '#73aeca',
          borderBottomWidth: 2,
          width:"80%",
          marginLeft:"10%"
         }
 });
