import React from 'react';

import {
  createBottomTabNavigator,
  createStackNavigator,
  View,
  Text,
  createAppContainer,
} from 'react-navigation';

import Icon from 'react-native-vector-icons/Ionicons';

import Host from './screen/Host';
import Profile from './screen/Profile';
import Registration from './screen/Registration';
import Search from './screen/Search';
import Welcome from './screen/WelcomePage';

/* const bottomTab2 = createMaterialBottomTabNavigator(
  {
    search: {screen: Search},
    host: {screen: Welcome},
    profile: {screen: Registration},
  },
  {
    initialRouteName: 'search',
    activeColor: '#f0edf6',
    inactiveColor: '#3e2465',
    barStyle: {backgroundColor: '#694fad'},
  },
); */

const TabNavigator = createBottomTabNavigator(
  {
    search: {
      screen: Registration,
      navigationOptions: {
        tabBarLabel: 'Search',
        tabBarIcon: ({tintColor}) => (
          <Icon style={[{color: tintColor}]} size={25} name={'ios-search'} />
        ),
      },
    },
    profile: {
      screen: Welcome,
      navigationOptions: {
        tabBarLabel: 'Profile',
        tabBarIcon: ({tintColor}) => (
          <Icon style={[{color: tintColor}]} size={25} name={'ios-person'} />
        ),
        activeColor: '#f60c0d',
        inactiveColor: '#f65a22',
        barStyle: {backgroundColor: '#f69b31'},
      },
    },

    host: {
      screen: Registration,
      navigationOptions: {
        tabBarLabel: 'Host',
        tabBarIcon: ({tintColor}) => (
          <Icon style={[{color: tintColor}]} size={25} name={'ios-person'} />
        ),
      },
    },
  },
  {
    initialRouteName: 'search',
    activeColor: '#f0edf6',
    inactiveColor: '#226557',
    barStyle: {backgroundColor: '#3BAD87'},
  },
);

//export default createAppContainer(TabNavigator);

const stack = createStackNavigator(
  {
    welcome: {screen: Welcome},
    registration: {screen: Registration},
    search: {screen: Search},
    tabScreen: {screen: TabNavigator},
  },
  {
    initialRouteName: 'tabScreen',
  },
);
export default stack;
//export default stack;
