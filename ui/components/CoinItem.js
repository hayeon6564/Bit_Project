import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

class CoinItem extends React.Component {
  render() {
    let date = new Date();
    let now = date.toLocaleString();

    return (
      <View style={styles.container}>
        <Image
          style={styles.itemLeft}
          source={ require('../../lib/danal.png') }
        />
        <View style={styles.itemRight}>
          <Text style={[styles.title, { flex: 1 }]}>
            {this.props.name || 'Name'}
          </Text>
          <Text style={[styles.text, { flex: 1 }]}>
            {(this.props.Text || 0)}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 70,
    flexDirection: 'row',
    backgroundColor: 'skyblue',
    alignItems: 'center',
    justifyContent: 'space-around', // center, space-around
    marginTop: 2,
    marginBottom: 1
  },
  itemLeft: {
    flex: 0.5,
    height:'100%',
    width:'20%',
    resizeMode:'contain',
    marginLeft: 5,
    marginRight: 10
  },
  itemRight: {
    flex: 2,
    flexDirection: 'column'
  },
  title:{
    fontWeight: 'bold',
    marginBottom: -20
  },
  text: {
   
  }
});

export default CoinItem;