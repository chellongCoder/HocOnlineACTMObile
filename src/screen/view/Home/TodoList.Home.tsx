import React, { Component } from 'react'
import { Text, View, FlatList, TouchableHighlight, SectionList, StyleSheet } from 'react-native'
import ItemTodo from '../Components/ItemTodo';
import commonStyles from '../../theme/commonStyles';
import { moderateScale } from 'react-native-size-matters';
import data from './data';

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