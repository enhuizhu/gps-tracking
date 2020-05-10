import React, { useEffect } from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { Login } from './pages/Login';
import { Store, StoreProvider } from './store/store';

export default function App() {
  return (
    <ImageBackground 
      source={require('./assets/bg.jpg')}
      style={{width: '100%', height: '100%'}}
    >
      <StoreProvider>
        <View style={styles.container}>
          <Test></Test>
          <Login></Login>
        </View>
      </StoreProvider>
    </ImageBackground>  
  );
}

function Test() {
  const {state, dispatch} = React.useContext(Store);
  console.log('store is:', state);
  const fetchDataAction = async () => {
    const dimensions = (await fetch('https://ghoapi.azureedge.net/api/Dimension'))
    const dataJson = await dimensions.json();
    console.log('dataJson', dataJson);
    return dispatch({
      type: 'RECEIVE_COUNTRIES',
      payload: dataJson.value,
    })
  };

  useEffect(() => {
    fetchDataAction();
  }, []);
  
  return <View>
    <Text>list of department</Text>
    {
      state.countries.map((c, index) => {
        return <Text key={index}>{c.Title}</Text>;
      })
    }
  </View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
