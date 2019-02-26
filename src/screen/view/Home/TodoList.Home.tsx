import React, { Component } from 'react'
import { Text, View, FlatList, TouchableHighlight, SectionList, StyleSheet } from 'react-native'
import ItemTodo from '../Components/ItemTodo';
import commonStyles from '../../theme/commonStyles';
import { moderateScale } from 'react-native-size-matters';
const data = [
  { title: 'Thứ 5 (DD - MM - YYYY)', data: [
    {
      time: "07.00 AM",
      content: "Ngày mai là hạn cuối nộp bài tập về nhà. Bạn nhớ hoàn thành bài tập và đẩy lên Github nhé! 😈",
      isAlarm: true,
    },
  ] },
  {
    title: 'Thứ 6 (DD - MM - YYYY)', data: [
    {
      time : "07.00 AM",
      content : "Nhớ lịch học lớp chúng ta là 15h chiều mai (thứ 7) nhé bạn 😈",
      isAlarm : false
    },
    {
      time: "07.00 AM",
      content: "Bạn nhớ hoàn thành bài tập đầy đủ trước khi đến lớp nhé! 😈",
      isAlarm: false
    },
  ] },
  
  {
    title: 'Thứ 7 (DD - MM - YYYY)', data: [
      {
        time: "07.00 AM",
        content: "Nhớ lịch học lớp chúng ta là 15h chiều mai (chủ nhật) nhé bạn 😈",
        isAlarm: true,
      },
    ]
  },
  {
    title: 'Thứ 2 (DD - MM - YYYY)', data: [
      {
        time: "07.00 AM",
        content: "Nhớ làm bài tập đầy đủ và theo dõi thông báo trên group facebook của lớp nhé! 😈",
        isAlarm: true,
      },
    ]
  },
]
export interface Props {

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
  renderSection({section} : any) {
    return (
      <View style={styles.section}>
        <Text style={commonStyles.contentText}>{section.title}</Text>
      </View>
    )
  }
  render() {
    return (
      <SectionList
        style={{flex : 4/10,}}
        renderItem={this.renderItem}
        renderSectionHeader={this.renderSection}
        sections={data}
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