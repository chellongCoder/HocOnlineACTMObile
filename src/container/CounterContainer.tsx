import React, { Component, PropTypes } from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";
import { observer, inject } from "mobx-react/native";
import CounterStore from "../store/couter";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  }
});

export interface Props {
  couterStore : CounterStore;
}
@inject("couterStore")
@observer
export default class CounterContainer extends Component<Props> {
  increment = () => {
    this.props.couterStore.increment();
  };

  decrement = () => {
    this.props.couterStore.decrement();
  };

  incrementIfOdd = () => {
    this.props.couterStore.incrementIfOdd();
  };

  incrementAsync = () => {
    this.props.couterStore.incrementAsync();
  };

  render() {
    const { couterStore } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Clicked: {couterStore.counter} times</Text>
        <TouchableHighlight onPress={this.increment}>
          <Text style={styles.text}>+</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.decrement}>
          <Text style={styles.text}>-</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.incrementIfOdd}>
          <Text style={styles.text}>Increment if odd</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.incrementAsync}>
          <Text style={styles.text}>Increment async</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
