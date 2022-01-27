import React, {Component} from 'react';
import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import * as data from '../../server/storeLocatorData/storeData';
import {showLocation} from 'react-native-map-link';
import styles from '../../styles/storeStyle';
class App extends Component {
  state = {
    lat: 0,
    lng: 0,
    curr: false,
    place: 'Maharastra',
    tolat: 0,
    tolng: 0,
    waiting: true,
  };
  componentDidMount() {
    Geolocation.getCurrentPosition(info => {
      this.setState({
        lat: info.coords.latitude,
        lng: info.coords.longitude,
        curr: true,
      });
    });
  }
  handlePress = (latitude: number, longitude: number) => {
    this.setState({
      tolat: latitude,
      tolng: longitude,
      waiting: false,
    });
    console.log(latitude, longitude);
  };
  getDirection = () => {
    showLocation({
      latitude: this.state.tolat,
      longitude: this.state.tolng,
      sourceLatitude: this.state.lat, // optionally specify starting location for directions
      sourceLongitude: this.state.lng, // not optional if sourceLatitude is specified
      //title: 'SabkaBazaar Store', // optional
      googleForceLatLon: false, // optionally force GoogleMaps to use the latlon for the query instead of the title  // optionally specify the google-place-id
      alwaysIncludeGoogle: true, // optional, true will always add Google Maps to iOS and open in Safari, even if app is not installed (default: false)
      cancelText: 'This is the cancel button text', // optional (default: 'Cancel')
      appsWhiteList: ['google-maps'], // optionally you can set which apps to show (default: will show all supported apps installed on device)
      naverCallerName: 'com.example.locatecurrent', // to link into Naver Map You should provide your appname which is the bundle ID in iOS and applicationId in android.
    });
  };

  render() {
    if (this.state.curr) {
      fetch(
        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${this.state.lat}&longitude=${this.state.lng}&localityLanguage=en%27`,
      )
        .then(response => response.json())
        .then(res => {
          this.setState({place: res.principalSubdivision, curr: false});
        });
    }
    return (
      <View style={styles.container}>
        <View style={{flex: 0.1}}>
          <Text style={styles.text}>
            {this.state.place}
            <Image
              source={{
                uri:
                  'https://raw.githubusercontent.com/AboutReact/sampleresource/master/location.png',
              }}
              style={styles.image}
            />
          </Text>
        </View>

        <View style={{flex: 0.9}}>
          <Text style={styles.text}>Select a store for pickup</Text>
          <GetStores place={this.state.place} handlePress={this.handlePress} />
          <Directions
            waiting={this.state.waiting}
            getDirection={this.getDirection}
          />
        </View>
      </View>
    );
  }
}

function GetStores(props: {
  place: string;
  handlePress: (arg0: number, arg1: number) => void;
}) {
  const selectedData = data.stores.filter(item => props.place === item.state);
  const remainingData = data.stores.filter(item => props.place !== item.state);
  return (
    <View style={{flex: 1}}>
      <View>
        <FlatList
          data={selectedData}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => props.handlePress(item.latitude, item.longitude)}>
              <Text style={styles.locationList} key={item.state}>{item.state}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
      <View>
        <FlatList
          data={remainingData}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => props.handlePress(item.latitude, item.longitude)}>
              <Text style={styles.locationList} key={item.state}>{item.state}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.state}
        />
      </View>
    </View>
  );
}
function Directions(props: {waiting: boolean; getDirection: () => void}) {
  if (props.waiting === true) {
    return <Text style={styles.errortext}>Please Select a Store</Text>;
  } else {
    return (
      <TouchableOpacity onPress={props.getDirection} style={styles.button}>
        <Text style={styles.directions}>Get Directions</Text>
      </TouchableOpacity>
    );
  }
}
export default App;
