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
      currentExercise: 'alternating curl',
      availableWorkouts: [
        'dumbell curl',
        'ez-bar preacher',
        'barbell curl',
        'hammer curl'
      ]
    }
  }

  onRightButtonPress() {
    this.refs.nav.push({
      title: 'History',
      component: ExerciseHistory,
      passProps: {
        // availableWorkouts: this.state.availableWorkouts,
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
          title: 'Add New Set',
          passProps: {
            currentExercise: this.state.currentExercise,
            availableWorkouts: this.state.availableWorkouts,
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
