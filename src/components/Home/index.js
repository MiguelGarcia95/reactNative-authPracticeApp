import React, { Component } from 'react'
import { Text, View, TextInput, Button } from 'react-native'
import styles from './styles';

class Home extends Component {
  state = {username: '', password: ''}

  checkLogin = () => {
    const {username, password} = this.state;
    console.log(username);
    console.log(password);
  }

  render() {
    const {heading, input, button, parent} = styles;
    return (
      <View style={parent}>
        <Text style={heading}>Login into the Application.</Text>
        <TextInput style={input}  placeholder='Username' onChangeText={text => this.setState({username: text})} />
        <TextInput style={input} secureTextEntry={true} placeholder='Password' />

        <Button style={button} title={'Login'} onPress={this.checkLogin} />
      </View>
    )
  }
}

export default Home;