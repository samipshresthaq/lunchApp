import React, { Component } from 'react';
import { Text, View, SafeAreaView, StatusBar, StyleSheet, BackHandler } from 'react-native';

export default class Homepage extends Component {
    static navigationOptions = {
        headerLeft: null,
        title: 'LUNCH'
    };

    componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', function() {
            // this.onMainScreen and this.goBack are just examples, you need to use your own implementation here
            // Typically you would use the navigator here to go to the last state.
          
            return true;
        });
    }

    render() {
        return (
          <SafeAreaView style={styles.container}>
            <View style={styles.container}>
              <StatusBar backgroundColor="#303f9f" barStyle="light-content" />
                <Text>Home Screen</Text>
            </View>
          </SafeAreaView>
        );
      }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
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