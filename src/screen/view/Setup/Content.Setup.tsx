import { View, Image, Text, StyleSheet } from "react-native";
import React from "react";
import { moderateScale } from "react-native-size-matters";
import commonStyles from "../../theme/commonStyles";
import * as Animatable from "react-native-animatable";

export default function ContentSetup() {
    return (
        <Animatable.View 
        animation="fadeIn"
        style={styles.container}>
            <Text style={commonStyles.defaultText}>
                Reminders made simple
            </Text>
            <Text style={[commonStyles.textNote, {textAlign : 'center'}]}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pellentesque erat in blandit luctus.
            </Text>
        </Animatable.View>
    )
}

const styles = StyleSheet.create({
    container : {
        // flex : 1,
        // justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: moderateScale(20),
    }
})