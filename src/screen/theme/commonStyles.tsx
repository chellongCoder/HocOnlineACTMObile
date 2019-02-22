import commonColor from "./commonColor";
import { moderateScale, verticalScale } from "react-native-size-matters";
import { Platform, StatusBar, View } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

const STATUSBAR_HEIGHT =
    Platform.OS === "ios"
        ? moderateScale(getStatusBarHeight())
        : moderateScale(20);
const APPBAR_HEIGHT = Platform.OS === "ios" ? 44 : 56;

export default {
    statusBar: {
        height: STATUSBAR_HEIGHT
    },
    appBar: {
        backgroundColor: "#79B45D",
        height: APPBAR_HEIGHT
    },
    choiceButton: {
        flexDirection: "row",
        flexWrap: "wrap",
        padding: moderateScale(10)
    },
    inputStyle: {
        backgroundColor: "transparent",
        borderColor: commonColor.cardBorderColor,
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth: 1,
        height: moderateScale(40),
        borderRadius: 5,
        marginBottom: moderateScale(10),
    },

    cardHeader: {
        // marginTop: moderateScale(10),
    },
    defaultText: {
        fontSize: moderateScale(commonColor.DefaultFontSize),
        color: commonColor.defaultTextColor,
        lineHeight: moderateScale(20)
    },
    boldText: {
        fontSize: moderateScale(commonColor.DefaultFontSize),
        color: commonColor.defaultTextColor,
        lineHeight: moderateScale(20),
        fontWeight: "bold",
    },
    buttonText: {
        fontSize: moderateScale(commonColor.DefaultFontSize),
        color: commonColor.textButton,
        lineHeight: moderateScale(20)
    },
    lightText: {
        fontSize: moderateScale(commonColor.DefaultFontSize),
        color: commonColor.textColorWhite
    },
    dangerText: {
        fontSize: moderateScale(commonColor.DefaultFontSize),
        color: commonColor.textDanger
    },
    textLarge: {
        fontSize: moderateScale(commonColor.fontSizeH2),
        color: commonColor.defaultTextColor
    },
    textButton: {
        fontSize: verticalScale(commonColor.DefaultFontSize),
        paddingTop: 5,
        color: commonColor.textButton
    },
    textNote: {
        fontSize: verticalScale(commonColor.DefaultFontSize),
        color: commonColor.textNote,
        lineHeight: moderateScale(20)
    },
    textTag: {
        fontSize: verticalScale(commonColor.DefaultFontSize),
        backgroundColor: commonColor.textButton,
        color: commonColor.defaultTextColor
    },
    imageSmall: {
        width: moderateScale(commonColor.iconSizeSmall),
        height: moderateScale(commonColor.iconSizeSmall),
        resizeMode: "contain"
    },
    imageNormal: {
        width: moderateScale(commonColor.iconSizeNormal),
        height: moderateScale(commonColor.iconSizeNormal),
        resizeMode: "contain"
    },
    imageMedium: {
        width: moderateScale(commonColor.iconSizeMedium),
        height: moderateScale(commonColor.iconSizeMedium),
        resizeMode: "contain"
    },
    imageLarge: {
        width: moderateScale(commonColor.iconSizeLarge),
        height: moderateScale(commonColor.iconSizeLarge),
        resizeMode: "contain"
    },
    imageHuge: {
        width: moderateScale(commonColor.iconSizeHuge),
        height: moderateScale(commonColor.iconSizeHuge),
        resizeMode: "contain"
    },
    commonButton: {
        height: moderateScale(40)
    }
};
