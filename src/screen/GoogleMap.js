import React from "react";
import { Text,View} from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

export default class App extends React.Component {

render() {

  
      return (

        <View style={{flex:1}}>
           
           <MapView
       provider={PROVIDER_GOOGLE} // remove if not using Google Maps
      
       region={{
         latitude: 37.78825,
         longitude: -122.4324,
         latitudeDelta: 0.015,
         longitudeDelta: 0.0121,
       }}
     >
     </MapView>
        </View>
      );
    }
  }
