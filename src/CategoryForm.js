import React, { Component } from 'react';
import { 
	StyleSheet, 
	View,
	ListView,
	Text
} from 'react-native';



export default class WorkoutForm extends Component {
	render() {
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		let exercises = ds.cloneWithRows(this.props.availableExercises)

		console.log('exercises are here! ' + exercises)
		return (
			<View>
	      <ListView
	        dataSource={exercises}
	        renderRow={(rowData) => <Text>{rowData}</Text>}
	      />
				{/* <Text>{this.props.greeting}</Text>
					{exercises.map((workout, index)=>{
						return <ListView key={index}>{workout}</ListView>
					})}*/}
			</View>
		);
	}
}


const styles2 = StyleSheet.create({

});


    const routes = [
      {title: 'First Scene', index: 0, contents: <Text>Select an exercise</Text>},
      {title: 'Second Scene', index: 1, contents: <WorkoutForm greeting={this.state.message} availableExercises={this.state.availableExercises}/>},
    ];

    return (
    
    <Navigator
      initialRoute={routes[0]}
      initialRouteStack={routes}
      renderScene={(route, navigator) =>
        <TouchableOpacity onPress={() => {
          if (route.index === 0) {
            navigator.push(routes[1]);
          } else {
            navigator.pop();
          }
        }}>
        <View>{route.contents}</View>
        </TouchableOpacity>
      }
      style={{padding: 100}}
           configureScene={(route, routeStack) =>
          Navigator.SceneConfigs.FadeAndroid}
    />
