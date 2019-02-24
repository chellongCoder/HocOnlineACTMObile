import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { moderateScale } from "react-native-size-matters";
import commonStyles from "../../theme/commonStyles";
import * as Animatable from "react-native-animatable";

export default function ButtonSetup(props : any) {
    console.log('porps', props);
    return (
        <TouchableOpacity onPress={props.onPress}>
            <Animatable.Image 
            animation="fadeInUpBig"
            source={require('./../../../assets/images/buttonStart.png')}/>
        </TouchableOpacity>
    )
}
