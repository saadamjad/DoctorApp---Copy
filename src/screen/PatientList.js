import React from 'react';
import {Dimensions,Text,View,ScrollView,ImageBackground} from 'react-native';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import RenderPatients from './RenderPatients';

export default class LoginScreen extends React.Component {
    constructor(props){
        super(props);
         this.state={
             patients:[
              {patientKey:1,patientName:"Saad", patientPhoto:require('./photos/burger1.jpg')},
              {patientKey:2,patientName:"Saad", patientPhoto:require('./photos/burger2.jpg')},
              {patientKey:3,patientName:"Saad", patientPhoto:require('./photos/burger3.jpg')},
              {patientKey:4,patientName:"Saad", patientPhoto:require('./photos/burger4.jpg')},
              {patientKey:5,patientName:"Saad", patientPhoto:require('./photos/burger5.jpg')},
              {patientKey:6,patientName:"Saad", patientPhoto:require('./photos/pizza1.jpg')},
              {patientKey:7,patientName:"Saad", patientPhoto:require('./photos/pizza2.jpg')},
              {patientKey:8,patientName:"Saad", patientPhoto:require('./photos/pizza3.jpg')},
              ],
            }
          }
    

  render() {
    const screenWidth = Dimensions.get('window').width;
    return (

 <View style={{flex:1}}>
   
{/* Header Image */}
<View style={{height:150}}>
   <ImageBackground source={require('./photos/headerColor.jpg')} style={{width: '100%',height:96}} >
       
       <View style={{flexDirection:"row",alignItems:"center",flex:1}}>
       <Text style={{color:"#58aec7",fontSize:22,marginLeft:20}}>Doctor </Text>
       <Text style={{color:"#446f7f",fontSize:22,fontWeight:"bold"}} >Remainder</Text>
</View>

<MaterialIcons name="add-circle"  size={45} color="#55a0c3" style={{position:"absolute",marginTop:75,marginLeft:screenWidth-65}} 
onPress={() => this.props.navigation.navigate('PatientInfo')}/>

       </ImageBackground>
       <View style={{flex:1,marginLeft:screenWidth-85}}>
       <Text style={{color:"#55a0c3",marginTop:20,fontSize:15}}>Add Patient</Text>
       </View>
</View>

{ this.state.patients === undefined || this.state.patients.length === 0 ?
   
   <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
    <MaterialCommunityIcons name="delete-empty"  size={80}   />
    <Text style={{fontSize:15}}>No Submitions Yet</Text>
    </View>
:

    <View style={{backgroundColor:"#f2f2f2",flex:1,marginLeft:10,marginRight:10}}>
     
      <View style={{width:"100%",backgroundColor:"#cccccc",justifyContent:"center",height:40,borderRadius:5}}>
            <Text style={{marginLeft:10,color:"black",fontSize:20,fontWeight:"bold"}}>Your Patients</Text>
      </View>
         
      <ScrollView style={{marginBottom:10,marginTop:10}}>

        {this.state.patients.map((patients)=>{
          //  sending data to RenderItems
              return (<RenderPatients navigation={this.props.navigation} key={patients.patientKey} patientName={patients.patientName}  patientPhoto={patients.patientPhoto} />)
          })
        }
       
      </ScrollView>
     
    </View>
}
</View>
 
    )
  }
}

  
  