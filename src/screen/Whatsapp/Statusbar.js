import React from 'react';
import {Text,View,Image,TouchableOpacity,Dimensions,Buttonm,ScrollView} from 'react-native';


export default class Statusbar extends React.Component {
 
  
  

  render() {

    

      return(
  
   
 <View>
<Text>this is class Statusbar </Text>
    
{/* submit Button */}
<View style={{justifyContent:"center",alignItems:"center",marginTop:20}}>
{/* onPress={() => this.props.navigation.navigate(' ObjCamera ')} */}
<TouchableOpacity style={{backgroundColor:"#56a0c5",width:150,alignItems:"center",height:40,justifyContent:"center",borderRadius:20}}  
onPress={()=>this.props.navigation.navigate('Objcall') }
>
<Text style={{fontSize:15,color:"white"}}>submit</Text>
</TouchableOpacity>                                                                                           


</View>

 </View>

  )
  }
}

  
  