import React, { Component } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { NavigationActions, SafeAreaView} from "react-navigation";
import * as Animatable from "react-native-animatable";
import CounterContainer from "./CounterContainer";
import NavbarContainer from "./NavbarContainer";
import ImageSetup from "../screen/view/Setup/Image.Setup";
import ContentSetup from "../screen/view/Setup/Content.Setup";
import ButtonSetup from "../screen/view/Setup/Button.Setup";
import { moderateScale } from "react-native-size-matters";

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
    return (
      <View style={{ flex: 1 }}>
        <Animatable.View
          style={[styles.container]}
        >
         {!this.state.hidden ? <View style={[styles.container, {marginTop: moderateScale(30),}]}>
             <ImageSetup/>
            <ContentSetup/>
            <ButtonSetup onPress={this.onPress}/>
         </View> : null}
        </Animatable.View>
        <Animatable.View
          animation={this.state.hidden ? "zoomIn" : ""}
          duration={1000}
          style={[styles.container2, {flex : this.state.hidden ? 1 : 0}]}
        >
          <NavbarContainer />
        </Animatable.View>
      </View>
    );
  }
}

export default SetupContainer;
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    // marginTop: moderateScale(30),
  },
  container2: {
      flex : 1,
  }
});
