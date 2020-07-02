import React from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  Image, 
  Alert,
} from 'react-native';
import { Link } from 'react-router-native';
import { formStyles } from '../styles/form';
import { UIButton } from '../components/Button/button';
import { receiveUserInfo, receiveUserToken } from '../actions/user.action';
import { AuthorizationService } from '../services/AuthorizationService';
import { ApiErrorHandler } from '../utils/AppUitl';
import { store } from '../store/store';
import { PersistService } from '../services/PersistService';
import { LoaderService } from '../services/LoaderService';


export class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    }
  }

  componentDidMount() {
    console.log('this props', this.props);


  }

  handleChange(stateName) {
    return (e) => {
      this.setState({
        [stateName]: e,
      });
    }
  }

  login = () => {
    if (this.state.password === '' || this.state.email === '') {
      Alert.alert('password or email can not be empty!');
      return ;
    }

    LoaderService.show();
    console.log('authorizing')
    AuthorizationService.login(this.state.email, this.state.password)
      .then(result => {
        console.log('result', result);
        if (!result.error) {
          PersistService.setToken(result);
          store.dispatch(receiveUserInfo(this.state.email));
        } else {
          ApiErrorHandler(result);
        }
      }).catch(ApiErrorHandler)
      .finally(() => {
        LoaderService.hide();
      });
  }
  
  render() {
    console.log('hello, everything is here')
    return (
      <View style={formStyles.container}>
        <View style={formStyles.formControlGroup}>
          <Image 
            source={require('../assets/user.png')}
            style={formStyles.img}
          ></Image>
          <TextInput 
            value={this.state.email} 
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
            placeholder="password"
            style={formStyles.textInput}
            secureTextEntry={true}
            onChangeText={this.handleChange('password')}
          >
          </TextInput>
        </View>
        <View style={formStyles.formControlGroup, {flexDirection: "row"}}>
          <UIButton 
            title='Login'
            style={{flex: 0.9, marginTop: 10, marginBottom: 10,}}
            onPress={this.login}
          />
        </View>
        <View>
          <Link 
            to='/register'
            underlayColor="#f0f4f7"
          >
            <Text>Sign up</Text>
          </Link>
          <Text style={{
            fontSize: 16,
          }}>
            
            {/* <Text>Don't have an Account?</Text> */}
           
          </Text>
        </View>
      </View>
    );
  }
}

