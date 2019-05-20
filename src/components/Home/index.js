import React, { Component } from 'react'
import { Text, View, TextInput, Button } from 'react-native'
import styles from './styles';

class Home extends Component {
  checkLogin() {

  }
  
  render() {
    const {heading, input, button, parent} = styles;
    return (
      <View style={parent}>
        <Text style={heading}>Login into the Application.</Text>
        <TextInput style={input} />
        <TextInput style={input} secureTextEntry={true} />

        <Button style={button} title={'Login'} onPress={_ => this.checkLogin} />
      </View>
    )
  }
}

export default Home;