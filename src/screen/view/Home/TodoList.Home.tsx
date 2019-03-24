import React, { Component } from 'react'
import { Text, View, FlatList, TouchableHighlight, SectionList, Animated, StyleSheet } from 'react-native'
import ItemTodo from '../Components/ItemTodo';
import commonStyles from '../../theme/commonStyles';
import { moderateScale } from 'react-native-size-matters';
import data from './data';
import util from '../../../commons/util';

export interface Props {
  loadTodos: Function;
  notifications : Array<any>
}

export class TodoList extends Component<Props> {
  constructor(props : Props) {
    super(props);
    this.renderSection = this.renderSection.bind(this);
  }
  renderItem({item, section}: any) {
    console.log("item", item);
    return (
      <ItemTodo item={item}/>
    )
  }
  checkAlarm(data : Array<any>, date : any) {
    console.log("data > ", data, date);
    if (new Date().getDate() === new Date(date.days).getDate() && new Date().getMonth() === new Date(date.days).getMonth()) {
      for (let index = 0; index < data.length; index++) {
        const element = data[index];
        let currentTime = `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`;
        console.log("time ", currentTime, element.time, element.time>currentTime);
        if (currentTime > element.time) {
          // schedule
        } else {
          // send request update isAlarm
        }
      }
    } else {
      // send request update isAlarm
    }
  }
  async componentDidMount() {
    let request = `http://localhost:8080/api/ext/get-notify?day=24-03-2019`;
    let todos = [];
    console.log("request", request);
    let res = await fetch(request);
    let json = await res.json();
    console.log(json.data);
    for (const key in json.data) {
      if (json.data.hasOwnProperty(key)) {
        const element = json.data[key];
        request = `http://localhost:8080/api/notifycation/${
          element.id
        }/infor_notify`;
        res = await fetch(request);
        let result = await res.json();
        console.log("reuslt", result.data);
        const day = `${util.getDayOfWeek(new Date(element.days))} (${new Date(element.days).getDate()} - ${new Date(element.days).getMonth()+1} - ${new Date(element.days).getFullYear()})`;
        console.log("day", day);
        let data = {
          title : day,
          day : element.days,
          data : result.data
        }
        console.log("data", data);
        if(!result.data[0].isAlarm) {
            this.checkAlarm(result.data, element);
            todos.push(data);
        } else {
          todos.unshift(data);
        }
       
      }
    }
    this.props.loadTodos(todos);
    // if (json.message === 'success') return json.data[0];
    // throw new Error(json.message);
  }
  renderSection({section} : any) {
    return (
      <View style={styles.section}>
        <Text style={commonStyles.contentText}>{section.title}</Text>
      </View>
    )
  }
  render() {
    console.log("render", this.props.notifications);
    return (
      <SectionList
        style={{flex : 4/10,}}
        renderItem={this.renderItem}
        renderSectionHeader={this.renderSection}
        sections={this.props.notifications}
        keyExtractor={(item, index) => item + index}
      />
    )
  }
}

const styles = StyleSheet.create({
  section : {
    marginLeft : moderateScale(10),
    marginVertical: moderateScale(10),
  }
});

export default TodoList;