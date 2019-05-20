import React, { Component } from 'react'
import { Text, View, TextInput } from 'react-native'

class Home extends Component {
  render() {
    return (
      <View>
        <Text>Login into the Application.</Text>
        <TextInput />
        <TextInput />
      </View>
    )
  }
}

export default Home;