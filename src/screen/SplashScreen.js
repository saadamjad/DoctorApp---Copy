import React from 'react';
import {Text,View,Animated,Image} from 'react-native';

export default class SplashScreen extends React.Component {
  constructor(){
    super();
    this.springValue=new Animated.Value(0.4);
}

componentWillMount(){
this.spring();      
}

spring () {
  Animated.spring(
    this.springValue,
    {
      toValue: 1,
      friction: 1
    }
  ).start()
}
  render() {
    
    return (
<View style={{flex:1}}>
   
   <Image source={require('./photos/headerColor.jpg')} style={{width: '100%',height:96}} />

 <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
  
    <Animated.Image
      style={{ width: 100, height: 100, transform: [{scale: this.springValue}] }}
      source={require('./photos/splashScreenIcon.jpg')}/>

    <Text style={{fontSize:25,color:"#549dba",fontWeight:"bold"}}>Doctor</Text>
    <Text style={{fontSize:25,color:"#244d62",fontWeight:"bold"}}>Remainder</Text>
  
  </View>

    <Image source={require('./photos/headerColor.jpg')} style={{width: '100%',height:96}} /> 

</View>
    )
  }
}