import React, { Component } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { NavigationActions } from "react-navigation";
import * as Animatable from "react-native-animatable";
import CounterContainer from "./CounterContainer";
import NavbarContainer from "./NavbarContainer";

export interface Props {
  navigation: NavigationActions;
}
export interface State {
  hidden: boolean;
}
export class SetupContainer extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hidden: false
    };
    this.onPress = this.onPress.bind(this);
  }
  onPress() {
    this.setState({ hidden: true });
    // this.props.navigation.navigate("Home");
  }
  render() {
    //   if(!this.state.hidden) {
    return (
      <View style={{ flex: 1 }}>
        <Animatable.View
          animation={!this.state.hidden ? "zoomIn" : "zoomOut"}
          duration={1000}
          style={[styles.container, { flex: !this.state.hidden ? 1 : 0 }]}
        >
          <Text> textInComponent </Text>
          <TouchableOpacity onPress={this.onPress}>
            <Text>click me</Text>
          </TouchableOpacity>
        </Animatable.View>
        <Animatable.View
          animation={this.state.hidden ? "zoomIn" : ""}
          duration={1000}
          style={[styles.container2, { flex: this.state.hidden ? 1 : 0 }]}
        >
          <NavbarContainer />
        </Animatable.View>
      </View>
    );
    //   }
  }
}

export default SetupContainer;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  container2: {
    flex: 1
  }
});
