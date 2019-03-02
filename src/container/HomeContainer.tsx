import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import HeaderHome from '../screen/view/Home/Header.Home';
import TodoList from '../screen/view/Home/TodoList.Home';
import PushNotification from 'react-native-push-notification';

export class HomeContainer extends Component {
  componentDidMount() {
    console.log("schedule");
    PushNotification.localNotificationSchedule({
      //... You can use all the options from localNotifications
      message: "My Notification Message", // (required)
      date: new Date(Date.now() + (5 * 1000)), // in 60 secs
      playSound: true, // (optional) default: true
      soundName: 'default', // (optional) Sound to play when the notification is shown. Value of 'default' plays the default sound. It can be set to a custom sound such as 'android.resource://com.xyz/raw/my_sound'. It will look for the 'my_sound' audio file in 'res/raw' directory and play it. default: 'default' (default sound is played)

    });
  }
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