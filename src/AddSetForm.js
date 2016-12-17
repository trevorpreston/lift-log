import React, { Component } from 'react';
import { 
  AppRegistry, 
  StyleSheet, 
  Text, 
  View,
  Navigator,
  NavigatorIOS,
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
      <View style={[styles.scene, {backgroundColor: '#FAFAFA'}]}>
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
    textAlign: 'center',
  },
  scene: {
    padding: 10,
    paddingTop: 74,
    flex: 1,
  }
})