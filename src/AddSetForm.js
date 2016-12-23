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
  _onPress() {
    this.props.navigator.push({
      title: 'Select an Exercise',
      component: ExerciseSelectionForm,
      passProps: {availableWorkouts: this.props.availableWorkouts}
    })
  }
  render() {
    return (
      <View style={styles.scene}>
        <TouchableOpacity onPress={this._onPress.bind(this)}>
          <View style={styles.currentExButton}>
            <Text style={styles.currentExercise}>{this.props.currentExercise}</Text>
          </View>  
        </TouchableOpacity>
        <View style={styles.inputWrapper}>
          <Text style={styles.header}>Weight</Text>
          <View style={styles.inputContainer}>
            <TouchableOpacity style={styles.hitbox}><View style={styles.button}><Text style={styles.symbol}>+</Text></View></TouchableOpacity>
            <TextInput
              style={styles.input}
              onChangeText={(text) => this.setState({text})}
              value={this.props.newSet.weight.toString()}
            />
            <TouchableOpacity style={styles.hitbox}><View style={styles.button}><Text style={styles.symbol}>-</Text></View></TouchableOpacity>
          </View>
          <Text style={styles.header2}>Reps</Text>
          <View style={styles.inputWrapper}>
            <View style={styles.inputContainer}>
              <TouchableOpacity style={styles.hitbox}><View style={styles.button}><Text style={styles.symbol}>+</Text></View></TouchableOpacity>
              <TextInput
                style={styles.input}
                onChangeText={(text) => this.setState({text})}
                value={this.props.newSet.reps.toString()}
              />
              <TouchableOpacity style={styles.hitbox}><View style={styles.button}><Text style={styles.symbol}>-</Text></View></TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
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
  currentExButton: {
    backgroundColor: 'rgb(89, 169, 223)',
    borderRadius: 100,
    borderColor: '#e6e6e6',
    borderWidth: .4
  },
  currentExercise: {
    color: 'white',
    padding: 10,
    fontSize: 22,
    textAlign: 'center',
    backgroundColor: 'transparent'
    // borderRadius: 20,
    // borderWidth: 0.5,
    // borderColor: 'white',
  },
  header: {
    textAlign: 'center',
    fontSize: 18,
    color: '#fafafa',
    marginTop: 10,
    marginBottom: 7
  },
  header2: {
    textAlign: 'center',
    fontSize: 18,
    color: '#fafafa',
    marginTop: 70,
    marginBottom: -4
  },
  input: {
    height: 60,
    width: 80,
    backgroundColor: 'white',
    textAlign: 'center'
  },
  inputWrapper: {
    alignItems: 'center',
    marginTop: 10
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  button: {
    height: 50,
    width: 50,
    justifyContent: 'center',
    backgroundColor: 'rgb(89, 169, 223)',
    // backgroundColor: 'transparent',
    borderWidth: .4,
    borderColor: '#e6e6e6',
    marginTop: 5,
    marginLeft: 15,
    marginRight: 15,
    borderRadius: 100
  },
  scene: {
    backgroundColor: 'rgba(27, 129, 216, 1)',
    padding: 10,
    paddingTop: 74,
    flex: 1,
  },
  hitbox: {
    height: 60,
  },
  symbol: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
    backgroundColor: 'transparent',
    marginTop: -4
  }
})