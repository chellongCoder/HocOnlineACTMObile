import React, { Component } from "react";
import { Text, View, Animated, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-navigation";
import { HEADER_EXPANDED_HEIGHT, HEADER_COLLAPSED_HEIGHT } from "./HomeContainer";
import HeaderHome from "../screen/view/Home/Header.Home";
import commonColor from "../screen/theme/commonColor";


export interface Props {
  navigation : any
}
export interface State {
  scrollY: Animated.Value
}

export default class ChatContainer extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      scrollY: new Animated.Value(0)
    }
  }
  componentDidMount() {

  }
  render() {
    const headerHeight = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_EXPANDED_HEIGHT - HEADER_COLLAPSED_HEIGHT],
      outputRange: [HEADER_EXPANDED_HEIGHT, HEADER_COLLAPSED_HEIGHT],
      extrapolate: 'clamp'
    })
    const headerTitleOpacity = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_EXPANDED_HEIGHT - HEADER_COLLAPSED_HEIGHT],
      outputRange: [0, 1],
      extrapolate: 'clamp'
    });
    return (
      <SafeAreaView>
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
          <View>
            <Text>ok</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
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
