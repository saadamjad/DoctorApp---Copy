// import React from 'react';
// import { Text, View, Image, TouchableOpacity, Dimensions, Buttonm, ScrollView ,TextInput} from 'react-native';
// import {connect } from 'react-redux'

//  class TodoApp extends React.Component {

//     state={
//         text:''
//     }
//     addTodo=(text)=>{
               
//         this.props.dispatch({type:'ADD_TODO',text})
//         this.setState({text:''})
//     }
//     render() {

//         return (
//             <View style={{flex:1,borderWidth:2}}>
                
//                 <TextInput
//                 style={{borderWidth:1}}
                    
//                 onChangeText={(text)=>this.setState({text}) }
//                 value={this.state.text}
//                 placeholder="please enter your name"
//                 >

//                 </TextInput>

//                     <TouchableOpacity style={{width:'100%',height:50,backgroundColor:'grey',marginTop:20}}
                    
//                     onPress={()=> this.addTodo(this.state.text)}
                    
//                     >
                                
//                     </TouchableOpacity>

//             </View>


//         )
//     }
// }

// export default connect()(TodoApp);

