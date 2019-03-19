import React, { Component } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { moderateScale } from "react-native-size-matters";
import commonStyles from "../../theme/commonStyles";
import commonColor from "../../theme/commonColor";
import util from "../../../commons/util";
export interface Props {
  item: any;
}
export interface State {
  isShow: boolean;
}
export class ItemTodo extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isShow: false
    };
    this.onPress = this.onPress.bind(this);
  }
  onPress() {
    this.setState({isShow : !this.state.isShow});
  }
  render() {
    if (!this.state.isShow) {
      return (
        <TouchableOpacity 
        onPress={this.onPress}
        style={[styles.container, {
          borderLeftColor: this.props.item.isAlarm ? commonColor.borderLeftAlarm : commonColor.borderLeftAlarmed
        }]}>
          <View style={styles.icon}>
            <Image
              style={commonStyles.imageMedium}
              source={this.props.item.isAlarm ? require("./../../../assets/images/unchecked.png") : require("./../../../assets/images/checked.png")}
            />
          </View>
          <View style={styles.time}>
            <Text style={commonStyles.timeText}>{util.convertTime(this.props.item.time)}</Text>
          </View>
          <View style={styles.content}>
            <Text style={commonStyles.contentText}>
              {this.props.item.content.slice(0,25)+"..."}
            </Text>
          </View>
          <View style={styles.bell}>
            <Image
              style={commonStyles.imageSmall}
              source={!this.props.item.isAlarm ? require("./../../../assets/images/smallBell.png") : require("./../../../assets/images/bellActive.png")}
            />
          </View>
        </TouchableOpacity>
      );
    }
    return (
      <TouchableOpacity 
      onPress={this.onPress}
      style={[styles.container2, {
        borderLeftColor: this.props.item.isAlarm ? commonColor.borderLeftAlarm : commonColor.borderLeftAlarmed
      }]}>
        <View style={styles.foo}>
          <View style={styles.icon}>
            <Image
              style={commonStyles.imageMedium}
              source={this.props.item.isAlarm ? require("./../../../assets/images/unchecked.png") : require("./../../../assets/images/checked.png")}
            />
          </View>
          <View style={styles.time}>
            <Text style={commonStyles.timeText}>{this.props.item.time}</Text>
          </View>
          <View style={styles.bell2}>
            <Image
              style={commonStyles.imageSmall}
              source={!this.props.item.isAlarm ? require("./../../../assets/images/smallBell.png") : require("./../../../assets/images/bellActive.png")}
            />
          </View>
        </View>
        <View style={styles.content2}>
          <Text style={commonStyles.contentText}>
            {this.props.item.content}
          </Text>
        </View>
      </TouchableOpacity>
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
    // height: moderateScale(100),
    backgroundColor: "white",
    borderLeftColor: "yellow",
    borderLeftWidth: moderateScale(5),
    shadowColor: "#000",
    shadowOffset: { width: 5, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 4,
    marginHorizontal: moderateScale(10),
    paddingVertical: moderateScale(10),
    borderRadius: moderateScale(5)
  },
  container2: {
    flex: 1,
    flexDirection: "column",
    marginBottom: 10,
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
  foo: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
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
  content2: {
    flexWrap: "wrap",
    marginHorizontal: moderateScale(10)
  },
  bell: {
    flex: 1 / 10
  },
  bell2: {
    flex: 7 / 10,
    alignItems: "flex-end",
    marginRight: moderateScale(10)
  }
});
