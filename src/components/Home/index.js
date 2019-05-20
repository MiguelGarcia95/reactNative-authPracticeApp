import React, { Component } from 'react'
import { Text, View, TextInput, Button } from 'react-native'
import styles from './styles';

class Home extends Component {
  render() {
    const {heading, input, button} = styles;
    return (
      <View>
        <Text style={heading}>Login into the Application.</Text>
        <TextInput style={input} />
        <TextInput style={input} secureTextEntry={true} />

        <Button style={button} title={'Login'} />
      </View>
    )
  }
}

export default Home;