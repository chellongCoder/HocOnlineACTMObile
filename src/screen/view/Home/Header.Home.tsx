import { TouchableOpacity, View, Text,Image,ImageBackground, StyleSheet } from "react-native";
import React, { Component,  } from 'react'
import * as Animatable from "react-native-animatable";
import { moderateScale } from "react-native-size-matters";
import commonColor from "../../theme/commonColor";
import commonStyles from "../../theme/commonStyles";

export default function HeaderHome() {
    
    return (
        <ImageBackground style={{width: '100%', height: '100%', flex : 5/10, justifyContent : 'flex-end'}} source={require("./../../../assets/images/Rectangle_3.png")}>
            {/* <Image style={styles.header} /> */}
            <Image style={styles.elipse_11} source={require("./../../../assets/images/Ellipse_11.png")}/>
            <Image style={styles.elipse_12} source={require("./../../../assets/images/Ellipse_12.png")}/>
            <View style={styles.reminder}>
                <View style={styles.left}>
                    <Text style={commonStyles.textLarge}>Today Reminder</Text>
                    <Text style={commonStyles.lightText}>Today Reminder</Text>
                    <Text style={commonStyles.lightText}>Today Reminder</Text>
                </View>
                <View style={styles.right}>
                    <Image source={require("./../../../assets/images/bell.png")}/>
                </View>
                <TouchableOpacity>
                    <Image source={require("./../../../assets/images/close.png")}/>
                </TouchableOpacity>
            </View>

        </ImageBackground>    
    )
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
    }
})