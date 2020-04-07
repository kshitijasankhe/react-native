import React from 'react';
import {
  createBottomTabNavigator,
  createStackNavigator,
  View,
  Text,
  createAppContainer,
} from 'react-navigation';
import Registration from './screen/Registration';
import Search from './screen/Search';
import Welcome from './screen/WelcomePage';
import Host from './screen/Host';
import Profile from './screen/Profile';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

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

const TabNavigator = createMaterialBottomTabNavigator(
  {
    search: {
      screen: Search,
      navigationOptions: {
        tabBarLabel: 'Search',
        tabBarIcon: ({tintColor}) => (
          <View>
            <Icon style={[{color: tintColor}]} size={25} name={'ios-search'} />
          </View>
        ),
      },
    },
    profile: {
      screen: Profile,
      navigationOptions: {
        tabBarLabel: 'Profile',
        tabBarIcon: ({tintColor}) => (
          <View>
            <Icon style={[{color: tintColor}]} size={25} name={'ios-person'} />
          </View>
        ),
        activeColor: '#f60c0d',
        inactiveColor: '#f65a22',
        barStyle: {backgroundColor: '#f69b31'},
      },
    },

    host: {
      screen: Host,
      navigationOptions: {
        tabBarLabel: 'Host',
        tabBarIcon: ({tintColor}) => (
          <View>
            <Icon style={[{color: tintColor}]} size={25} name={'ios-person'} />
          </View>
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
export default TabNavigator;

const stack = createStackNavigator(
  {
    welcome: {screen: Welcome},
    registration: {screen: Registration},
    search: {screen: Search},
    tabScreen: {screen: TabNavigator},
  },
  {
    initialRouteName: 'welcome',
  },
);

//export default stack;
