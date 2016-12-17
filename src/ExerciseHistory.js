import React, { Component } from 'react';
import { 
	AppRegistry, 
	StyleSheet, 
	View,
	ListView,
	Text
} from 'react-native';

export default class ExcerciseHistory extends Component {
	render() {
		return (
			<Text style={styles.scene}> THIS IS HISTORY </Text>
		)	
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scene: {
    padding: 10,
    paddingTop: 74,
    flex: 1,
  },
})