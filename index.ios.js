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
import {
  Header,
  Title,
  Container,
  Content
} from 'native-base';

import LinearGradient from 'react-native-linear-gradient';
import ExerciseSelectionForm from './src/ExerciseSelectionForm'
import AddSetForm from './src/AddSetForm'
import FirstTouchScene from './src/FirstTouchScene'
import ExerciseHistory from './src/ExerciseHistory'

export default class AwesomeProject extends Component {
  constructor() {
    super();
    this.state = {
      message : 'HEY FRIENDS!!!',
      category: 'arms',
      group: 'biceps',
      currentExercise: 'exercise name from state',
      availableExcercises: [
        'dumbell curl',
        'ez-bar preacher',
        'barbell curl',
        'hammer curl'
      ],
      exerciseHistory: [
        {date: '2016/12/22', name: 'ex 1', weight: 55, reps: 7},
        {date: '2016/12/22', name: 'ex 1', weight: 55, reps: 7},
        {date: '2016/12/23', name: 'ex 1', weight: 45, reps: 8},
        {date: '2016/12/25', name: 'ex 1', weight: 55, reps: 9},
        {date: '2016/12/26', name: 'ex 1', weight: 40, reps: 10},
        {date: '2016/12/26', name: 'ex 1', weight: 50, reps: 8},
        {date: '2016/12/26', name: 'ex 1', weight: 45, reps: 9},
        {date: '2016/12/26', name: 'ex 1', weight: 40, reps: 11},
        {date: '2016/12/28', name: 'ex 1', weight: 45, reps: 8},
        {date: '2016/12/30', name: 'ex 1', weight: 60, reps: 8},
      ],
      newExercise: 'I AM NEW EX from STATE',
      newSet:{
        date: undefined, 
        name: undefined, 
        weight: 45, 
        reps: 8
      },
      
    }
  }
  onRightButtonPress() {
    this.refs.nav.push({
      title: 'History',
      component: ExerciseHistory,
      passProps: {
        exerciseHistory: this.state.exerciseHistory,
      }
    })
  }


    // _onRightButtonPress() {
    //   console.log('CHECK OUT DA PROPS ' + this.refs)
    //   // this.props.refs.nav.push({
    //   //   title: "From Right",
    //   //   component: FirstRightScene
    //   // })
    // }

  render () {
    return (
      <NavigatorIOS ref="nav" style={styles.container} initialRoute={{
        component: AddSetForm,
        title: 'New Set',
        barTintColor: '#fafafa',
        tintColor: 'rgba(27, 129, 216, 1)',
        passProps: {
          newSet: this.state.newSet,
          currentExercise: this.state.currentExercise,
          availableExercises: this.state.availableExcercises,
          newExercise: this.state.newExercise
        },
        rightButtonTitle: 'history',
        onRightButtonPress: this.onRightButtonPress.bind(this)
      }} />

    )
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
  scene: {
    padding: 10,
    paddingTop: 74,
    flex: 1,
  },
  linearGradient: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 15,
    paddingBottom: 15,
    borderRadius: 5
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    backgroundColor: 'transparent',
  },
  brand: {
    backgroundColor: '#fafafa',
    marginBottom: 20
  },
  header: {
    marginTop: 20,
    marginBottom: 20,
    fontSize: 40
  },
  subheader: {
    fontSize: 20,
    textAlign: 'center'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },

});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
