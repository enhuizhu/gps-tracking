import React from 'react';
import { View, Text, Alert } from 'react-native';
import MapView from 'react-native-maps';
// import Geolocation from '@react-native-community/geolocation';
import * as Location from 'expo-location';


export class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {
    console.log('component mount');
    // Geolocation.getCurrentPosition(info => console.log(info));
    try {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission to access location was denied');
        return ;
      }
      
      let location = await Location.getCurrentPositionAsync({});
      console.log('location', location);
    } catch(e) {
      console.log('geolocation error', e);
    }
    
    // Alert.alert(location);
    // Geolocation.getCurrentPosition(info => {
    //   console.log('info', info);
    // });
    // navigator.geolocation.getCurrentPosition((userLocation) => {
    //   console.log('user location', userLocation);
    // });
    

    // GetLocation.getCurrentPosition({
    //   enableHighAccuracy: true,
    //   timeout: 15000,
    // })
    // .then(location => {
    //     console.log('geo location',location);
    // })
    // .catch(error => {
    //     const { code, message } = error;
    //     console.warn(code, message);
    // })
  }

  getInitialState() {
    return {
      region: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
    };
  }
   
  onRegionChange = (region) => {
    console.log('region:', region);
    this.setState({ region });
  }

  render() {
    return (
      <MapView
        style={{flex: 1, width: '100%', height: '100%'}}
        region={this.state.region}
        onRegionChange={this.onRegionChange}
        showsUserLocation={true}
      />
    );
  }
}


