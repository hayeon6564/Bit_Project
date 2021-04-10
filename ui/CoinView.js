import React from 'react'
import { StyleSheet, Text, View, ScrollView} from 'react-native';
import CoinItem from './components/CoinItem'

class CoinView extends React.Component {
    render() {
      let coinItems = sampleData.map( (data, index) => {
        const {name, text} = data; // Destructuring
        return (
          <CoinItem
            key={index}
            name={name}
            Text={text}
          />
        );
    });
    return (
        <ScrollView style={[styles.container, this.props.style]}>
            {coinItems}
        </ScrollView>
    );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'skyblue',
        //justifyContent: 'center',
        //alignItems: 'center',
    },
});

const sampleData = [
    {
          "id": "bitcoin",
          "name": "Bitcoin",
          "symbol": "BTC",
          "text": "뫄뫄뫄",
    },
    {
          "id": "ethereum",
          "name": "Ethereum",
          "symbol": "ETH",
          "text": "뫄뫄뫄",
    },
    {
        "id": "ethereum",
        "name": "Ethereum",
        "symbol": "ETH",
        "text": "뫄뫄뫄",
    },
    {
        "id": "bitcoin",
        "name": "Bitcoin",
        "symbol": "BTC",
        "text": "뫄뫄뫄",
    },
    {
        "id": "ethereum",
        "name": "Ethereum",
        "symbol": "ETH",
        "text": "뫄뫄뫄",
    },
    {
      "id": "ethereum",
      "name": "Ethereum",
      "symbol": "ETH",
      "text": "뫄뫄뫄",
    },
    {
        "id": "ethereum",
        "name": "Ethereum",
        "symbol": "ETH",
        "text": "뫄뫄뫄",
    },
    {
        "id": "bitcoin",
        "name": "Bitcoin",
        "symbol": "BTC",
        "text": "뫄뫄뫄",
    },
    {
        "id": "ethereum",
        "name": "Ethereum",
        "symbol": "ETH",
        "text": "뫄뫄뫄",
    },
    {
      "id": "ethereum",
      "name": "Ethereum",
      "symbol": "ETH",
      "text": "뫄뫄뫄",
    },
  ];

export default CoinView;