import React, {Component} from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from './src/components/Home';

const AppNavigator = createStackNavigator(
  {
    Home: Home,
  },
  {
    initialRouteName: "Home"
  }
);

export default createAppContainer(AppNavigator);
