import React, { Component } from 'react';
import { 
  AppRegistry, 
  StyleSheet, 
  Text, 
  View,
  Navigator,
  NavigatorIOS,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';

export default class FirstTouchScene extends Component {

	render() {
	    return (
	      <View style={[styles.scene, {backgroundColor: '#FFF1E8'}]}>
	        <Text>HELLO</Text>
	      </View>
	    )
	  }
}	  

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    scene: {
        padding: 10,
        paddingTop: 74,
        flex: 1
    }
});