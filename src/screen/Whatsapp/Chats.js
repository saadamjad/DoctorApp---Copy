import React, {Component} from 'react';
import {Modal, Text, TouchableHighlight, View, Alert} from 'react-native';

class ModalExample extends Component {
  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      <View style={{marginTop: 22}}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={{marginTop: 22}}>
            <View>
              <Text>Hello World!</Text>

              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
          }}>
          <Text>Show Modal</Text>
        </TouchableHighlight>
      </View>
    );
  }
}








// import React from 'react';
// import { Text, View, Image, TouchableOpacity, Dimensions, Buttonm, ScrollView } from 'react-native';


// export default class Chat extends React.Component {

// state={

//    Press1:true,
//    press2:false,
//    press3:false,
//    press4:false,
//    press1Text:"this is press 1",
//    press2Text:"this is press 2",
//    press3Text:"this is press 3",
//    press4Text:"this is press 4",
//    Welcome:"please press any button",



//   //  Press1:"",
//   //  press2:"",
//   //  press3:"",
//   //  press4:"",

// }
// // handleSubmit=(event)=> {
  
// //    if( this.state.userName==="" || this.state.password===""){
// //      this.setState({error:'please fill inputs'})

// //    }
  

// // }



//   render() {
      


//     return (


//       <View>
//         <Text>this is call Chat </Text>


//         {/* submit Button */}

//         <View style={{ flexDirection: "row", width: '100%', marginTop: 30 , justifyContent:"space-around" }}>
//           <TouchableOpacity style={{ backgroundColor:this.state.press1? "blue":'white', width: 150, alignItems: "center", height: 40, justifyContent: "center", borderRadius: 20, borderWidth: 1, borderColor: 'black' }}  

//             onPress={()=> {this.setState({
//               press1:true , press2:false,press3:false,press4:false

//             });
//           } }

//           >
//             <Text style={{ fontSize: 15, color:this.state.press1? "white":'black' }}> Press 1 </Text>

//             {/* onPress={() => this.props.navigation.navigate('ObjCamera')}  */}
       
//           </TouchableOpacity>


//           <TouchableOpacity style={{  backgroundColor: this.state.press2 ? "green":'white', width: 150, alignItems: "center", height: 40, justifyContent: "center", borderRadius: 20, borderWidth: 1, borderColor: 'black' }}
          
//            onPress={()=> { this.setState({
//              press2:true ,press1:false,press3:false,press4:false
//            })} }
          
//           >
//             <Text style={{ fontSize: 15, color:this.state.press2?"white":'black' }}>press 2</Text>

//           </TouchableOpacity>
          




//         </View>
        
//         <View style={{ flexDirection: "row", width: '100%', marginTop: 10,justifyContent:"space-around"  }}>
//           <TouchableOpacity style={{ backgroundColor:this.state.press3? "yellow": "white", width: 150, alignItems: "center", height: 40, justifyContent: "center", borderRadius: 20, borderWidth: 1, borderColor: 'black' }} 
//           onPress={()=>{this.setState({
//             press3:true ,press2:false,press1:false,press4:false
//           }

//           )}}
          
          
//           >
//             <Text style={{ fontSize: 15, color: this.state.press3?'black' :"black" }}>press 3</Text>
         
//           </TouchableOpacity>


//           <TouchableOpacity style={{ backgroundColor:this.state.press4? "black":'white', width: 150, alignItems: "center", height: 40, justifyContent: "center", borderRadius: 20, borderWidth: 1, borderColor: 'black' }} 
          
//           onPress={()=>{this.setState({
//             press4:true,press1:false,press2:false,press3:false
//           })}}
          
//           >
//             <Text style={{ fontSize: 15, color:this.state.press4?"white": "black" }}> press 4</Text>

//           </TouchableOpacity>

//         </View>
//         <View style={{height:200,borderWidth:1, justifyContent:"center",alignItems:"center",
//         backgroundColor:this.state.press1 ? "blue" : this.state.press2 ? "green" :this.state.press3 ?"yellow" : this.state.press4 ? "black":"white"
      
      
      
//       }}>

//           { this.state.press1 ?(
//             <Text style={{fontSize:20,color:'white'}}>  {this.state.press1Text} </Text>
//           ) : this.state.press2 ?(
//             <Text style={{fontSize:20,color:'white'}} > { this.state.press2Text} </Text>
//           ): this.state.press3? (
//             <Text  style={{fontSize:20,color:'black'}}> {this.state.press3Text} </Text>
//           ) :this.state.press4? (
//             <Text style={{fontSize:20,color:'white'}}> {this.state.press4Text} </Text>
//           ):null}

//         </View>


//         {/* <TouchableOpacity style={{width: 150, alignItems: "center", height: 40, justifyContent: "center", borderRadius: 20, borderWidth: 1, borderColor: 'black' }} 
        
          
//           > */}

// {/* onPress={()=>{this.setState({
//             press4:true,press1:false,press2:false,press3:false
//           })}} */}


            
//             <Text        
            
//             onPress={()=>{this.props.navigation.navigate('ObjCamera')}}
//             style={{  fontSize:40 }}>  {this.state.press1Text} </Text>

//           {/* </TouchableOpacity> */}







//       </View>

//     )
//   }
// }


