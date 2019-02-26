import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import HeaderHome from '../screen/view/Home/Header.Home';
import TodoList from '../screen/view/Home/TodoList.Home';

export class HomeContainer extends Component {
  render() {
    return (
      <View style={styles.container}>
          <HeaderHome/>
          <TodoList/>
      </View>
    )
  }
}

export default HomeContainer;

const styles = StyleSheet.create({
  container : {
    flex : 1
  }
})