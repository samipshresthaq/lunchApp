import React, { Component } from 'react';
import {View,Text,Image, StyleSheet, SafeAreaView,StatusBar, FlatList} from 'react-native';
import {createStackNavigator} from 'react-navigation';

// Import components
import Splash from './app/components/SplashScreen/Splash';
import Homepage from './app/pages/HomePage/Homepage';

class LunchApp extends Component {
  componentDidMount(){
    return fetch('https://facebook.github.io/react-native/movies.json')
    .then((response) => response.json())
    .then((data) => {
      this.setState({
        isLoading: false,
        dataSource: data.movies,
      }, function(){

      });
    }).catch((error) => {
      console.error(error);
    });
  }
}

export default createStackNavigator({
  Home: {
    screen: Splash
  },
  HomePage: {
    screen: Homepage
  }

});
