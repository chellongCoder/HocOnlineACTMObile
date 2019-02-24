import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-navigation';

export default class DemoContainer extends Component {
  render() {
    return (
        <SafeAreaView >
            <Text >
                This is top text.
        </Text>
            <Text >
                This is bottom text.
        </Text>
        </SafeAreaView>
    )
  }
}