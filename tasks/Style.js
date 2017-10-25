import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class LotsOfStyles extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Text style={styles.red}>Red</Text>
        <Text style={styles.bigblue}>Bigblue</Text>
        <Text style={[styles.bigblue, styles.red]}>Blue, Red</Text>
        <Text style={[styles.red, styles.bigblue]}>Red, Blue</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    bigblue: {
      color: 'blue',
      fontWeight: 'bold',
      fontSize: 30,
    },
    red: {
      color: 'red',
    },
});