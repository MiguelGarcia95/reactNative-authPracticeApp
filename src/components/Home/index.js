import React, { Component } from 'react'
import { Text, View, TextInput } from 'react-native'
import styles from './styles';

class Home extends Component {
  render() {
    const {heading, input} = styles;
    return (
      <View>
        <Text style={heading}>Login into the Application.</Text>
        <TextInput style={input} />
        <TextInput style={input} secureTextEntry={true} />
      </View>
    )
  }
}

export default Home;