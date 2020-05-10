import React from 'react';
import { 
  View, 
  StyleSheet, 
  Text, 
  TextInput, 
  Image, 
  Alert,
} from 'react-native';
import { formStyles } from '../styles/form';
import { UIButton } from '../components/Button/button';
import { Store } from '../store/store';

export class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: '',
    }
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
      <View style={styles.container}>
        <View style={formStyles.formControlGroup}>
          <Image 
            source={require('../assets/user.png')}
            style={styles.img}
          ></Image>
          <TextInput 
            value={this.state.username} 
            placeholder="username"
            style={styles.textInput}
            onChangeText={this.handleChange('username')}
          ></TextInput>
        </View>
        <View style={formStyles.formControlGroup}>
          <Image 
            source={require('../assets/password.jpg')}
            style={styles.img}
          ></Image>
          <TextInput 
            value={this.state.password} 
            placeholder="password"
            style={styles.textInput}
            secureTextEntry={true}
            onChangeText={this.handleChange('password')}
          >
          </TextInput>
        </View>
        <View style={styles.formControlGroup, {flexDirection: "row"}}>
          <UIButton 
            title='Login'
            style={{flex: 0.9, marginTop: 10, marginBottom: 10,}}
            onPress={() => Alert.alert('simple button pressed')}
          />
        </View>
        <View>
          <Text style={{
            fontSize: 16,
          }}>
            <Text>Don't have an Account?  </Text>
            <Text>Sign up</Text>
          </Text>
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
    width: '90%',
    minHeight: 200,
    margin: 'auto',
    backgroundColor: 'white',
    shadowOffset: {width: 5, height: 5},
    shadowColor: 'grey',
    shadowOpacity: 1.0,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  img: {
    width: 20,
    height: 20,
    marginRight: 5,
    marginLeft: 10,
    marginTop: 4,
  },
  textInput: {
    flex: 1,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: 'gray',
    padding: 5,
    marginRight: 10,
    borderRadius: 5,
  }
});


