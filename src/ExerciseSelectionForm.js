import React, { Component } from 'react';
import { 
	AppRegistry, 
	StyleSheet, 
	View,
	ListView,
	Text,
	TouchableOpacity
} from 'react-native';




export default class ExerciseSelectionForm extends Component {
	updateCurrentExercise(newExercise) {
		console.log('SELECTING NEW EXERCISE ')
	}
	render() {
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		let workouts = ds.cloneWithRows(this.props.availableWorkouts)

		console.log('workouts are here! ' + workouts)
		return (
			<View style={[styles.scene]}>
	      <ListView
	        dataSource={workouts}
	        renderRow={(rowData) => {
	        	return(
	        		<TouchableOpacity>
		        		<Text onPress={this.updateCurrentExercise} style={styles.exercise}>{rowData}</Text>
		        	</TouchableOpacity>	
	        	)
	        }}
	      />
				{/* <Text>{this.props.greeting}</Text>
					{workouts.map((workout, index)=>{
						return <ListView key={index}>{workout}</ListView>
					})}*/}
			</View>
		);
	}
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    scene: {
        padding: 10,
        flex: 1
    },
    exercise: {
	    color: 'white',
	    padding: 10,
	    backgroundColor: 'rgba(27, 129, 216, .9)',
	    marginTop: 10,
	    fontSize: 17,
	    textAlign: 'center',
    // borderRadius: 20,
    // borderWidth: 0.5,
    // borderColor: 'white',
  },
});