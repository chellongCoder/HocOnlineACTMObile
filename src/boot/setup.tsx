import React from 'react'
import { Component } from 'react';
import { Text, View } from 'react-native'
import App from '../../App';
import { Provider } from "mobx-react/native";
import CounterStore from '../store/couter';
import stores from './configStore';
export default class Setup extends Component {
  componentDidMount() {
    console.disableYellowBox = true;
  }
    render() {
      return (
      <Provider {...stores()}>
          <App />
      </Provider> 
      )
    }
  }