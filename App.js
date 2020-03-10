import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { Login } from './components/login/Login';
import LinearGradient from 'react-native-linear-gradient';

export default function App() {
  return (
    <ImageBackground 
      source={require('./assets/bg.jpg')}
      style={{width: '100%', height: '100%'}}
    >
      <View style={styles.container}>
        <Login></Login>
      </View>
    </ImageBackground>  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
