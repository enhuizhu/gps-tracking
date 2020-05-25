import React from 'react';
import { formStyles } from '../styles/form';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
} from 'react-native';
import { UIButton } from '../components/Button/button';
import { Link } from 'react-router-native';

export class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      repeatPassword: '',
    };
  }

  register = () => {

  }

  handleChange(stateName) {
    return (e) => {
      this.setState({
        [stateName]: e,
      });
    }
  }

  render() {
    return (
      <View style={formStyles.container}>
        <View style={formStyles.formControlGroup}>
          <Image 
            source={require('../assets/user.png')}
            style={formStyles.img}
          ></Image>
          <TextInput 
            value={this.state.username} 
            placeholder="Email"
            style={formStyles.textInput}
            onChangeText={this.handleChange('email')}
          ></TextInput>
        </View>
        <View style={formStyles.formControlGroup}>
          <Image 
            source={require('../assets/password.jpg')}
            style={formStyles.img}
          ></Image>
          <TextInput 
            value={this.state.password} 
            placeholder="Password"
            style={formStyles.textInput}
            secureTextEntry={true}
            onChangeText={this.handleChange('password')}
          >
          </TextInput>
        </View>
        <View style={formStyles.formControlGroup}>
          <Image 
            source={require('../assets/password.jpg')}
            style={formStyles.img}
          ></Image>
          <TextInput 
            value={this.state.password} 
            placeholder="Repeat Password"
            style={formStyles.textInput}
            secureTextEntry={true}
            onChangeText={this.handleChange('repeatPassword')}
          >
          </TextInput>
        </View>
        <View style={formStyles.formControlGroup, {flexDirection: "row"}}>
          <UIButton 
            title='Register'
            style={{flex: 0.9, marginTop: 10, marginBottom: 10,}}
            onPress={this.register}
          />
        </View>
        <View>
          <Link to='/login'><Text>Login</Text></Link>

          <Text style={{
            fontSize: 16,
          }}>
            <Text>Already have an Account?</Text>
          </Text>
        </View>
      </View>)
  }
}
