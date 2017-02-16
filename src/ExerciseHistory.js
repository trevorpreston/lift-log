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
		const workouts = this.props.exerciseHistory
		console.log('THIS IS HISTORY ' + workouts)
		return(
			<View style={styles.scene}>
				<View style={styles.wrapper}>
				{workouts.map((workout, index)=>{
					return(
						<Text key={index} style={styles.entry}>{workout.date} {workout.name} {workout.weight} {workout.reps}</Text>
					)
			  })}
			  </View>
		  </View>
		)
	}	
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scene: {
    paddingTop: 74,
    flex: 1,
  },
  wrapper: {
  	backgroundColor: 'rgba(27, 129, 216, 1)',
  },
  entry: {
  	textAlign: 'center',
  	color: 'white',
  	fontSize: 15,
  	borderWidth: 0.5,
    borderColor: 'white',
    padding: 5
  }
})