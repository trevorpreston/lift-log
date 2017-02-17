import React, { Component } from 'react';
import { 
	AppRegistry, 
	StyleSheet, 
	View,
	ListView,
	Text,
	TouchableOpacity
} from 'react-native';
import ExerciseListItem from './ExerciseListItem'



export default class ExerciseSelectionForm extends Component {
	render() {
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		let exercises = ds.cloneWithRows(this.props.availableExercises)

		console.log('Exercises are here! ' + exercises)
		return (
			<View style={[styles.scene]}>
	      <ListView
	        dataSource={exercises}
	        renderRow={(rowData) => {
      			{console.log('check out this row data ' + rowData)}
	        	return(
		        		<ExerciseListItem exName={rowData} value={rowData}/>
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