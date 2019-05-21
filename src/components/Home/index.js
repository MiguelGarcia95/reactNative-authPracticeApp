import React, { Component } from 'react'
import { Text, View, TextInput, Button, Alert } from 'react-native'
import styles from './styles';

class Home extends Component {
  state = {username: '', password: ''}

  static navigationOptions = {
    header: null
  }

  checkLogin = () => {
    const {username, password} = this.state;
    // here it's authenticated. It could be done with php, or any other backend. even firebase
    fetch('http:localhost:9000', {method: 'POST', body: JSON.stringify({username,password})})
      .then(res => {
        return res.text()
      }).then(res => {
        if (res === '1') {
          this.props.navigation.navigate('Dashboard')
        } else {
          Alert.alert('Error', 'Username/Password mismatch', [{
            text: 'Okay'
          }])
        }
      })
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