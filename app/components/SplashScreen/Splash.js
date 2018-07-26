import React, { Component } from 'react';
import { Text, Image, View, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default class Splash extends Component {

  static navigationOptions = {
    header: null
  };

  componentWillMount() {
    setTimeout(() => {
      this.props.navigation.navigate('HomePage');
    }, 2000);
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <LinearGradient style={styles.container} colors={['#303f9f', '#3949ab', '#5c6bc0']} >
          <View style={styles.logoContainer}>
            <StatusBar backgroundColor="#303f9f" barStyle="light-content" />
            <Image style={styles.logo} source={require('../../assets/logo-white.png')} />
            <Text style={styles.text}>LUNCH APP</Text>
          </View>
        </LinearGradient>
        </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  logoContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo:{
    width: 240,
    height: 177
  },
  text:{
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginTop: 10,
    opacity: 0.9
  }

});