import React from 'react';
import {createAppContainer, createStackNavigator} from 'react-navigation';
import Registration from './screen/Registration';
import Search from './screen/Search';

const stack = createStackNavigator(
  {
    registration: {screen: Registration},
    search: {screen: Search},
  },
  {
    initialRouteName: 'registration',
  },
);

export default stack;
