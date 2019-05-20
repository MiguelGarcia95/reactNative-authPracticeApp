import React, { Component } from 'react'
import { Text, View, TextInput, Button } from 'react-native'
import styles from './styles';

class Home extends Component {
  state = {username: '', password: ''}

  checkLogin = () => {
    const {username, password} = this.state;
    if (username === 'admin' && password === 'admin') {
      console.warn('login success');
    }
  }

  render() {
    const {heading, input, button, parent} = styles;
    return (
      <View style={parent}>
        <Text style={heading}>Login into the Application.</Text>
        <TextInput style={input}  placeholder='Username' onChangeText={text => this.setState({username: text})} />
        <TextInput style={input} secureTextEntry={true} placeholder='Password' onChangeText={text => this.setState({password: text})} />

        <Button style={button} title={'Login'} onPress={_ => this.checkLogin()} />
      </View>
    )
  }
}

export default Home;