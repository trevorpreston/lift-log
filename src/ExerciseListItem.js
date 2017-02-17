import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity
} from 'react-native';


export default class ExerciseListItem extends Component {
	handlePressEvent() {
		console.log('*******'+ this.props.exName)
	}
  render() {
  	console.log('this is ExerciseListItem value: ' + this.props.value)
  	console.log('this is ExerciseListItem exName prop: ' + this.props.exName)
  	return (
		    	<Text onPress={ this.handlePressEvent.bind(this) } style={ [styles.exercise] }>{this.props.exName}</Text>
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