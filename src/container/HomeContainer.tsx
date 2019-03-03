import React, { Component } from 'react'
import { Text, View, StyleSheet, Animated, ScrollView } from 'react-native'
import HeaderHome from '../screen/view/Home/Header.Home';
import TodoList from '../screen/view/Home/TodoList.Home';
import PushNotification from 'react-native-push-notification';
import commonColor from '../screen/theme/commonColor';
const HEADER_EXPANDED_HEIGHT = 300;
const HEADER_COLLAPSED_HEIGHT = 150;
export interface Props {

}
export interface State {
  scrollY : Animated.Value
}
export class HomeContainer extends Component<Props, State> {
  constructor(props : Props) {
    super(props);
    this.state = {
      scrollY : new Animated.Value(0)
    }
  }
  componentDidMount() {
    console.log("schedule");
    PushNotification.localNotificationSchedule({
      //... You can use all the options from localNotifications
      message: "My Notification Message", // (required)
      // date: new Date(Date.now() + (5 * 1000)), // in 60 secs
      date: new Date("03/04/2019 00:05:00"), // in 30 secs
      playSound: true, // (optional) default: true
      soundName: 'default', // (optional) Sound to play when the notification is shown. Value of 'default' plays the default sound. It can be set to a custom sound such as 'android.resource://com.xyz/raw/my_sound'. It will look for the 'my_sound' audio file in 'res/raw' directory and play it. default: 'default' (default sound is played)

    });
    PushNotification.localNotificationSchedule({
      //... You can use all the options from localNotifications
      message: "My Notification Message", // (required)
      // date: new Date(Date.now() + (5 * 1000)), // in 60 secs
      date: new Date("03/04/2019 00:06:00"), // in 30 secs
      playSound: true, // (optional) default: true
      soundName: 'default', // (optional) Sound to play when the notification is shown. Value of 'default' plays the default sound. It can be set to a custom sound such as 'android.resource://com.xyz/raw/my_sound'. It will look for the 'my_sound' audio file in 'res/raw' directory and play it. default: 'default' (default sound is played)

    });
  }
  render() {
    const headerHeight = this.state.scrollY.interpolate({
      inputRange : [0, HEADER_EXPANDED_HEIGHT - HEADER_COLLAPSED_HEIGHT],
      outputRange : [HEADER_EXPANDED_HEIGHT, HEADER_COLLAPSED_HEIGHT],
      extrapolate: 'clamp'
    })
    const headerTitleOpacity = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_EXPANDED_HEIGHT - HEADER_COLLAPSED_HEIGHT],
      outputRange: [0, 1],
      extrapolate: 'clamp'
    });
    return (
      <View style={styles.container}>
        <Animated.View style={[styles.header, { height: headerHeight }]}>
          <HeaderHome scrollY={this.state.scrollY} />
          {/* <Animated.Text style={{ textAlign: 'center', fontSize: 18, color: 'black', marginTop: 28, opacity: headerTitleOpacity }}>hello</Animated.Text> */}
        </Animated.View>
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          onScroll={Animated.event(
            [{
              nativeEvent: {
                contentOffset: {
                  y: this.state.scrollY
                }
              }
            }])
          }
          scrollEventThrottle={16}>
          <TodoList />
        </ScrollView>
      </View>
    )
  }
}

export default HomeContainer;

const styles = StyleSheet.create({
  container : {
    flex : 1
  },
  header: {
    backgroundColor: 'lightblue',
    position: 'absolute',
    width: commonColor.deviceWidth,
    top: 0,
    left: 0,
    zIndex: 9999
  },
  scrollContainer: {
    paddingTop: HEADER_EXPANDED_HEIGHT
  },
})