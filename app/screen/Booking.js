import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  ImageBackground,
  Button,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {createAppContainer, createStackNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';
import CustomButton from '../components/Button';
//import CustomTextInput from '../components/TextInput';

class Booking extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: null,
    };
  }

  componentDidMount() {
    return fetch('https://5e991ed75eabe7001681c770.mockapi.io/spotSearch')
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          isLoading: false,
          dataSource: responseJson,
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.registrationDetails}>
          <ActivityIndicator size="large" color="red" />
        </View>
      );
    } else {
      console.log('data', this.state.dataSource);
      const {result} = this.state.dataSource;

      return (
        <ImageBackground
          source={require('../assets/parkwayRegistration.jpg')}
          style={styles.backgroundImage}>
          <View style={[styles.registrationDetails, {flexDirection: 'column'}]}>
            {result.map(item => {
              return (
                <View style={{flexDirection: 'row'}}>
                  <Text>{item.address}</Text>
                  <Text>{item.spotName}</Text>
                  <Text>{item.price}</Text>
                </View>
              );
            })}
          </View>
        </ImageBackground>
      );
    }
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
    opacity: 80,
  },

  registrationDetails: {
    width: '80%',
    height: '80%',
    backgroundColor: 'rgba(255,255,255,.7)',
    alignSelf: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },

  welcome: {
    fontSize: 50,
    textAlign: 'center',
    margin: 10,
    color: 'rgba(69,145,130,10)',
  },

  appText: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'rgba(69,145,130,10)',
  },
});

export default Booking;
