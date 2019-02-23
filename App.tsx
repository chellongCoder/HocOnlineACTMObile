/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React from 'react'
import { Component } from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, } from 'react-native';
import Counter from './src/container/CounterContainer';
import CounterStore from './src/store/couter';
import { StackActions, NavigationActions, createStackNavigator, createAppContainer, StackNavigator } from 'react-navigation';
import CounterContainer from './src/container/CounterContainer';

export interface Props {
  
}
/**
 * TODO: stack navigator
 */
const Stack = createStackNavigator({
  Home: { screen: CounterContainer }
},
  {initialRouteName : "Home"}
);
/**
 * Appcontainer for createStackNavigator
 */
const AppContainer = createAppContainer(Stack);

export default class App extends Component<Props> {
  render() {
    console.log("navigation ", StackActions);
    return (
        <AppContainer />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
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
