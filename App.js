import React, {Component} from 'react';
import {MatiGlobalIdSdk} from 'react-native-mati-global-id-sdk';
import {
  NativeModules,
  NativeEventEmitter,
  Button,
  View
} from 'react-native';


export default class App extends Component {
  constructor() {
    super();
    console.log('Constructor Called.');	
  }

  componentDidMount() {

  //set listening callbacks
  const MatiVerifyResult = new NativeEventEmitter(NativeModules.MatiGlobalIdSdk)
  MatiVerifyResult.addListener('verificationSuccess', (data) => console.log(data))
  MatiVerifyResult.addListener('verificationCanceled', (data) => console.log(data))
  }

  //call showFlow when button is clicked
  handleMatiClickButton = () => {
	 //set 3 params clientId (cant be null), flowId, metadata
  	  var yourMetadata = { param1: "value1", param2: "value2" }
   	 MatiGlobalIdSdk.showFlow("YOUR_CLIENT_ID", "YOUR_FLOW_ID", yourMetadata);
  }

  //Add button to view graph
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'powderblue',
        }}>
        <Button onPress={this.handleMatiClickButton} title="Click here"/>
      </View>
    );
  }
}