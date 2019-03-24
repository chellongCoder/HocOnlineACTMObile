import HomeContainer from "./HomeContainer";
import { createDrawerNavigator, createAppContainer } from "react-navigation";
import CounterContainer from "./CounterContainer";
import React,{ Component } from "react";
import ChatContainer from "./ChatContainer";
import DrawerContentComponents from "../screen/view/Components/DrawerCustom";


const Drawer = createDrawerNavigator(
  {
    Home: CounterContainer,
    Settings: ChatContainer
  },
  {
    initialRouteName: "Settings",
    drawerWidth: 270,
    contentComponent: DrawerContentComponents
  }
);

const Draw = createAppContainer(Drawer);

export default class DrawContainer extends Component {
    render() {
        return (
            <Draw/>
        );
    }
}