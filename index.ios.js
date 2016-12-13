import React, { Component } from 'react';
import { 
  AppRegistry, 
  StyleSheet, 
  Text, 
  View } from 'react-native';
import {
  Header,
  Title,
  Container,
  Content
} from 'native-base';
import WorkoutForm from './src/WorkoutForm'

export default class AwesomeProject extends Component {
  constructor() {
    super();
    this.state = {
      message : 'HEY FRIENDS!!!',
      category: 'arms',
      group: 'biceps',
      availableWorkouts: [
        'dumbell curl',
        'ez-bar preacher',
        'barbell curl',
        'hammer curl'
      ]
    }
  }
  render() {
    return (
      <View>
        <Header> 
          <Title>
            THIS IS A REAL HEADER 
          </Title>
        </Header>
        <WorkoutForm greeting={this.state.message} availableWorkouts={this.state.availableWorkouts}/>
        <Text style={styles.welcome}>
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  // wrapper: {
  //   flex: 1,
  //   // justifyContent: 'center',
  //   // alignItems: 'center',
  //   backgroundColor: '#F5FCFF',
  // },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
