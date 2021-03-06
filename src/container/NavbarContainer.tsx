import React, { Component } from "react";
import { Text, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import CounterContainer from "./CounterContainer";
import SetupContainer from "./SetupContainer";
import ChatContainer from "./ChatContainer";
import HomeContainer from "./HomeContainer";
import DrawContainer from "./DrawerContainer";
import ChatStack from "./ChatContainer";
const Navbar = createBottomTabNavigator(
  {
    Home: HomeContainer,
    Settings: DrawContainer,
  },
  {
    defaultNavigationOptions: ({ navigation }: any) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }: any) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === "Home") {
          iconName = `ios-information-circle${focused ? "" : "-outline"}`;
        } else {
          iconName = `${focused ? "ios-settings" : "md-settings"}`;
        }

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: "tomato",
      inactiveTintColor: "gray"
    },
    headerMode: "none"
  }
);
const AppContainer = createAppContainer(Navbar);
export class NavbarContainer extends Component {
  render() {
    return <AppContainer />;
  }
}

export default NavbarContainer;
