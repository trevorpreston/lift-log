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
    		<Text onPress={this.updateCurrentExercise}>HI</Text>
    	</TouchableOpacity>	
  	)
  }
}