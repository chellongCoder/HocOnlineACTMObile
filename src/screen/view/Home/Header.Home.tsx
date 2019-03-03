import { TouchableOpacity, View, Text, Image, ImageBackground, Animated, StyleSheet } from "react-native";
import React, { Component,  } from 'react'
import * as Animatable from "react-native-animatable";
import { moderateScale } from "react-native-size-matters";
import commonColor from "../../theme/commonColor";
import commonStyles from "../../theme/commonStyles";
import data from './data';
const HEADER_EXPANDED_HEIGHT = 300;
const HEADER_COLLAPSED_HEIGHT = 180;
export default function HeaderHome({scrollY} : any) {
    const headerTitleOpacity = scrollY.interpolate({
        inputRange: [0, HEADER_EXPANDED_HEIGHT - HEADER_COLLAPSED_HEIGHT],
        outputRange: [0, 1],
        extrapolate: 'clamp'
    });
    const paddingVertical = scrollY.interpolate({
        inputRange: [0, HEADER_EXPANDED_HEIGHT - HEADER_COLLAPSED_HEIGHT],
        outputRange: [20, 0],
        extrapolate: 'clamp'
    });
    let time = getTimeAlarm(data[0].data);
    return (
        <ImageBackground style={{ width: '100%', height: '100%', justifyContent : 'flex-end'}} source={require("./../../../assets/images/Rectangle_3.png")}>
            {/* <Image style={styles.header} /> */}
            <Image style={styles.elipse_11} source={require("./../../../assets/images/Ellipse_11.png")}/>
            <Image style={styles.elipse_12} source={require("./../../../assets/images/Ellipse_12.png")}/>
            <Animated.View style={[styles.reminder, {paddingVertical: paddingVertical,}]}>
                <Animated.View style={styles.left}>
                    <Animated.Text style={[commonStyles.textLarge]}>Today Reminder</Animated.Text>
                    <Text style={commonStyles.lightText}>{data[0].title}</Text>
                    <Text style={commonStyles.lightText}>{time}</Text>
                </Animated.View>
                <View style={styles.right}>
                    <Animated.Image source={require("./../../../assets/images/bell.png")}/>
                </View>
                <TouchableOpacity style={styles.close}>
                    <Image source={require("./../../../assets/images/close.png")}/>
                </TouchableOpacity>
            </Animated.View>
        </ImageBackground>  
    )
}
function getTimeAlarm(data : Array<any>) {
    for (let index = 0; index < data.length; index++) {
        const element = data[index];
        const time = convertTime12to24(element.time);
        console.log("time ", time);
        if (parseInt(time.hour) > new Date().getHours()) {
            return `${time.hour}:${time.minute} ${time.modifier}`
        } else if (parseInt(time.hour) === new Date().getHours()) {
            if (parseInt(time.minute) > new Date().getMinutes()) {
                return `${time.hour}:${time.minute}`;
            }
        } else {
            return "da bao thuc";
        }
    }
}
const convertTime12to24 = (time12h : string) => {
    const [time, modifier] = time12h.split(' ');

    let [hours, minutes] = time.split(':');

    if (hours === '12') {
        hours = '00';
    }

    if (modifier === 'PM') {
        hours = parseInt(hours, 10) + 12;
    }

    // return `${hours}:${minutes}`;
    return {
        hour : hours,
        minute : minutes,
        modifier : modifier
    }
}
const styles = StyleSheet.create({
    header : {
        position : 'absolute',
        top : 0
    },
    elipse_11 : {
        position : 'absolute',
        top : moderateScale(-100),
        left : moderateScale(-50)
    },
    elipse_12 : {
        position: 'absolute',
        right : moderateScale(-20),
        top : moderateScale(-20)
    },
    reminder : {
        flexDirection: 'row',
        backgroundColor: "rgba(255, 255, 255, 0.23)",
        marginBottom: moderateScale(20),
        marginHorizontal: moderateScale(20),
        paddingVertical: moderateScale(20),
        paddingHorizontal: moderateScale(20),
        borderRadius: moderateScale(10),
    },
    left : {
        flex : 7/10,
        alignItems: 'flex-start',
    },
    right : {
        flex : 3/10,
        alignItems: 'flex-end',
    },
    close : {
        marginTop : moderateScale(10)
    }
})