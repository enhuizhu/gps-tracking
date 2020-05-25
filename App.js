import React, { useEffect } from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { Login } from './pages/Login';
import { store } from './store/store';
import { NativeRouter } from "react-router-native";
import { Register } from './pages/Register';
import { Home } from './pages/Home';
import PrivateRoute  from './components/PrivateRoute/PrivateRoute';
import PublicRoute from './components/PublicRoute/PublicRoute';
import { Provider } from 'react-redux';
import { PersistService } from './services/PersistService';
import Loader from './components/Loader/Loader';

export default function App() {
  useEffect(() => {
    PersistService.syncWithStore();
  }, [])
  
  return (
    <NativeRouter>
      <ImageBackground 
        source={require('./assets/bg.jpg')}
        style={{width: '100%', height: '100%'}}
      >
        <Provider store={store}>
          <View style={styles.container}>
            <PrivateRoute exact path='/' component={Home}></PrivateRoute>
            <PrivateRoute exact path='/home' component={Home}></PrivateRoute>
            <PublicRoute exact path='/login' component={Login}></PublicRoute>
            <PublicRoute exact path='/register' component={Register}></PublicRoute>
          </View>
          <Loader/>
        </Provider>
      </ImageBackground>  
    </NativeRouter>
  );
}

// function Test() {
//   const {state, dispatch} = React.useContext(Store);
//   console.log('store is:', state);
//   const fetchDataAction = async () => {
//     const dimensions = (await fetch('https://ghoapi.azureedge.net/api/Dimension'))
//     const dataJson = await dimensions.json();
//     console.log('dataJson', dataJson);
//     return dispatch({
//       type: 'RECEIVE_COUNTRIES',
//       payload: dataJson.value,
//     })
//   };

//   useEffect(() => {
//     fetchDataAction();
//   }, []);
  
//   return <View>
//     <Text>list of department</Text>
//     {
//       state.countries.map((c, index) => {
//         return <Text key={index}>{c.Title}</Text>;
//       })
//     }
//   </View>;
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
