import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity
} from 'react-native';


export default class ExerciseListItem extends Component {
	updateCurrentExercise() {
		console.log('SELECTING NEW EXERCISE')
	}
  render() {
  	return (
	  	  <TouchableOpacity>
	    		<Text onPress={this.updateCurrentExercise} style={styles.exercise}>asfja;slfjasdf;a</Text>
	    	</TouchableOpacity>	
  	)
  }
}

const styles = StyleSheet.create({
	exercise: {
		color: 'white',
		padding: 10,
		backgroundColor: 'rgba(27,129,216,.9)',
		marginTop: 10,
		fontSize: 17,
		textAlign: 'center'
	}
})