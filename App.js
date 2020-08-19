/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  AppState,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';

import LoginPage from './src/components/Login/login';
import Home from './src/components/Home/home';

export default class App extends React.Component {
  render() {
    /* In the root component we are rendering the app navigator */
    return (
     <AppContainer />
    )
  }
}


const AppNavigator = createSwitchNavigator({
  LoginPage: LoginPage,
  Home: Home
})

const AppContainer = createAppContainer(AppNavigator);






