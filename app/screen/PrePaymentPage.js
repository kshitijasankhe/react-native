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
  FlatList,
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

class PrePaymentPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    fetch(
      'https://5e991ed75eabe7001681c770.mockapi.io/search_spot/spotId/calculatePrice',
    )
      .then(response => response.json())
      .then(Responsejson => {
        this.setState({
          data: Responsejson.result,
        });
      })
      .catch(error => console.error(error))
      .finally(() => {
        this.setState({isLoading: false});
      });
  }

  render() {
    const {data, isLoading} = this.state;

    return (
      <View style={[styles.registrationDetails, {flexDirection: 'column'}]}>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={data}
            keyExtractor={({id}, index) => id}
            renderItem={({item}) => (
              <View style={styles.item}>
                <Text style={styles.item}>Spot Name:{item.spotName} </Text>
                <Text style={styles.item}>Price per hour:{item.price} </Text>
                <Text style={styles.item}>Taxes:{item.Tax} </Text>
                <Text style={styles.item}>
                  Total Proce:{item.calculatedPrice}{' '}
                </Text>
                <Text style={styles.item}>Address:{item.address} </Text>
                <CustomButton
                  title="Reserve Now"
                  functionOnClick={() => {
                    this.props.navigation.navigate('payment');
                    //this.props.navigation.navigate('tabScreen');
                  }}
                />
              </View>
            )}
          />
        )}
      </View>
    );
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
  input: {
    marginLeft: 20,
    marginRight: 20,
    textAlign: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'rgba(69,145,130,10)',
  },
  search_date_time_button: {
    width: '50%',
    height: '30%',
    textAlign: 'center',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: 'rgba(69,145,130,10)',
    justifyContent: 'center',
    paddingHorizontal: 5,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default PrePaymentPage;
