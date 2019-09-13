import React from 'react';
import {StyleSheet,TextInput,Text,View,Image,ScrollView,TouchableOpacity,KeyboardAvoidingView} from 'react-native';
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import Album from './Calls'

export default createMaterialBottomTabNavigator({
     Album: { screen: Album },
     Album: { screen: Album },
     Album: { screen: Album },
     Album: { screen: Album },
     Album: { screen: Album },
     Library: { screen: Album  },
    History: { screen: Album  },
    // Cart: { screen: Cart },
  }, {
    initialRouteName: 'Album',
    activeColor: '#00000',
    inactiveColor: '#3e2465',
    barStyle: { backgroundColor: '#694fad' },
  });

// export default class LoginScreen extends React.Component {


//   render() {
//     return (

// <KeyboardAvoidingView style={{flex:1}}  > 

// <Text>ssadasad</Text>
// </ KeyboardAvoidingView > 

//     )
//   }
// }

// const styles = StyleSheet.create({
//       hr:{
//           borderBottomColor: '#73aeca',
//           borderBottomWidth: 2,
//           width:"80%",
//           marginLeft:"10%"
//          }
//    });
  
  