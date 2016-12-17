import React, { Component } from 'react';
import { 
	AppRegistry, 
	StyleSheet, 
	View,
	ListView,
	Text
} from 'react-native';



export default class ExerciseSelectionForm extends Component {
	render() {
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		let workouts = ds.cloneWithRows(this.props.availableWorkouts)

		console.log('workouts are here! ' + workouts)
		return (
			<View style={[styles.scene]}>
				<Text> PICK A WORKOUT </Text>
	      <ListView
	        dataSource={workouts}
	        renderRow={(rowData) => <Text>{rowData}</Text>}
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
        paddingTop: 74,
        flex: 1
    }
});