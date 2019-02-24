import { View, Image } from "react-native";
import React from "react";
import * as Animatable from "react-native-animatable";

export default function ImageSetup() {
    return (
        <Animatable.View
            animation="bounceIn"
        >
            <Image source={require('./../../../assets/images/start.png')}/>
        </Animatable.View>
    )
}