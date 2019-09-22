import React,{Component} from 'react';
import {createStackNavigator,createAppContainer} from 'react-navigation';
import Whatsapplogin from './Whatsapp/Whatsapplogin'
import Camera from './Whatsapp/Camera'
// import Chats from './Whatsapp/Chats'
import Setting from './Whatsapp/Setting'
import Statusbar from './Whatsapp/Statusbar'
import Calls from './Whatsapp/Calls'
import facebookHome from './Whatsapp/FacebookHome'
import {Provider} from 'react-redux'
import store from '../saadRedux/store/store'
import GoogleMap from './GoogleMap'


const AppNavigator = createStackNavigator(  
    {
      Objwhatsapplogin: {
        screen: Whatsapplogin,
        
        navigationOptions: () => ({
          header:null
        })
    },
    ObjCamera :{
      screen : Camera,
      navigationOptions: () => ({
        header:null
      })
    },
  
    // Objchat :{
    //   screen : Chats,
    //   navigationOptions: () => ({
    //     header:null
    //   })
    // },
    Objsetting :{
      screen : Setting,
      navigationOptions: () => ({
        header:null
      })
    },
    Objstatusbar :{
      screen : Statusbar,
      navigationOptions: () => ({
        header:null
      })
    },
    Objcall :{
      screen : Calls,
      navigationOptions: () => ({
          header:null
        })
    },
    facebookHome :{
      screen : facebookHome,
      navigationOptions: () => ({
          header:null
        })
    },
    GoogleMap :{
      screen : GoogleMap,
      navigationOptions: () => ({
          header:null
        })
    },
    
    
    },
    {
      initialRouteName: 'GoogleMap'
    }
  );

const AppContainer = createAppContainer(AppNavigator);

export default class StackNavigator extends Component {  
  render() {
return(
        <Provider store={store}>
    <AppContainer />
    </Provider>
      )
  }
}
