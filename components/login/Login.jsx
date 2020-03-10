import React from 'react';
import { View, StyleSheet, Text, TextInput, Image} from 'react-native';

export class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: '',
    }
  }
  
  
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Image source={require('../../assets/user.png')}></Image>
          <TextInput value={this.state.username} placeholder="username"></TextInput>
        </View>
        <View>
          <Image source={require('../../assets/password.jpg')}></Image>
          <TextInput value={this.state.password} placeholder="password"></TextInput>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'grey',
    width: '80%',
    minHeight: '50%',
    margin: 'auto',
    backgroundColor: 'white',
    shadowOffset: {width: 5, height: 5},
    shadowColor: 'grey',
    shadowOpacity: 1.0,
    alignItems: 'center',
    justifyContent: 'center',
  }
});


