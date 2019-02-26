import React, { Component } from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { moderateScale } from "react-native-size-matters";
import commonStyles from "../../theme/commonStyles";
export interface Props {
  item: any;
}
export class ItemTodo extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.icon}>
          <Image
            style={commonStyles.imageMedium}
            source={require("./../../../assets/images/unchecked.png")}
          />
        </View>
        <View style={styles.time}>
          <Text style={commonStyles.timeText}>{this.props.item.time}</Text>
        </View>
        <View style={styles.content}>
          <Text style={commonStyles.contentText}>
            {this.props.item.content}
          </Text>
        </View>
        <View style={styles.bell}>
          <Image
            style={commonStyles.imageSmall}
            source={require("./../../../assets/images/smallBell.png")}
          />
        </View>
      </View>
    );
  }
}

export default ItemTodo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    height: moderateScale(50),
    backgroundColor: "white",
    borderLeftColor: "yellow",
    borderLeftWidth: moderateScale(5),
    shadowColor: "#000",
    shadowOffset: { width: 5, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 4,
    marginHorizontal: moderateScale(10),
    borderRadius: moderateScale(5)
  },
  icon: {
    flex: 1 / 10,
    marginLeft: moderateScale(10)
  },
  time: {
    flex: 2 / 10
  },
  content: {
    flex: 6 / 10,
    flexWrap: "wrap"
  },
  bell: {
    flex: 1 / 10
  }
});
