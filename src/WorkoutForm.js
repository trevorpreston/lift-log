import React, { Component } from 'react';
import { 
	AppRegistry, 
	StyleSheet, 
	View } from 'react-native';
import {
	Container,
	Content,
	Text,
	Card,
	CardItem,

} from 'native-base';


export default class WorkoutForm extends Component {

	render() {
		let workouts = this.props.availableWorkouts

		console.log('workouts are here! ' + workouts)

		return (
			<View>
				<Text>{this.props.greeting}</Text>
					{workouts.map((workout, index)=>{
						return <Text key={index}>{workout}</Text>
					})}
						
			</View>
		);
	}
}


const styles2 = StyleSheet.create({

});