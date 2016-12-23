import React, { Component } from 'react';
import { 
  AppRegistry, 
  StyleSheet, 
  Text, 
  Button,
  View,
  Navigator,
  NavigatorIOS,
  TextInput,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';
import FirstTouchScene from './FirstTouchScene'
import ExerciseSelectionForm from './ExerciseSelectionForm'


export default class AddSetForm extends Component {
  _onPress2() {
    this.props.navigator.push({
      title: 'Select an Exercise',
      component: ExerciseSelectionForm,
      passProps: {availableWorkouts: this.props.availableWorkouts}
    })
  }
  render() {
    return (
      <View style={styles.scene}>
        <TouchableOpacity onPress={this._onPress2.bind(this)}>
          <Text style={styles.currentExercise}>{this.props.currentExercise}</Text>
        </TouchableOpacity>
      </View>
    )
  }
  //from the original example
  _onPress() {
    this.props.navigator.push({
      title: 'First touch scene',
      component: FirstTouchScene,
      passProps: {showLable: "First touch"}
    })
  }

}

const styles = StyleSheet.create({
  // wrapper: {
  //   flex: 1,
  //   // justifyContent: 'center',
  //   // alignItems: 'center',
  //   backgroundColor: '#F5FCFF',
  // },
  container: {
    flex: 1,
  },
  currentExercise: {
    color: 'white',
    padding: 10,
    backgroundColor: 'rgba(143, 193, 233, .5)',
    fontSize: 20,
    textAlign: 'center',
    // borderRadius: 20,
    // borderWidth: 0.5,
    // borderColor: 'white',
  },
  scene: {
    backgroundColor: 'rgba(27, 129, 216, 1)',
    padding: 10,
    paddingTop: 74,
    flex: 1,
  }
})