import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import TopBar from './ui/components/TopBar';
import CoinView from './ui/CoinView';


export default class App extends React.Component{
  render(){
    return (
        <View style={styles.container}>
          <View style={styles.statusBar} />
            <TopBar title="Show Me The Coin"/>
            <CoinView style={styles.coinView}/>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  statusBar: {
    height: Constants.statusBarHeight
  },
  container: {
    flex: 1
  },
  coinView: {
    width: '100%',
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    //alignItems: 'center',
    //justifyContent: 'flex-start'
  }
});
