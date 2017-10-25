import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';
import AlignItems from './Layout/AlignItems';

const Touchable = (props) => (
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
      <Text style={styles.buttonText}>{props.title}</Text>
    </TouchableOpacity>);

export default class LinksToLayout extends Component {
    static navigationOptions = { title: 'Links to the Layout exc' };
    render() {
        const { navigate } = this.props.navigation;
        return (
        <View style={{alignItems: 'center'}}>
            <Touchable onPress={() => navigate('alignItems')} title="Align Items" />
        </View>
        );
    }
}

const RouteStack = StackNavigator({
    alignItems: { screen: AlignItems },
  });

const styles = StyleSheet.create({
    button: {
      margin: 3,
      alignItems: 'center',
      backgroundColor: '#2196F3'
    },
    buttonText: {
      padding: 7,
      fontSize: 18,
      fontWeight: "bold",
      color: 'white'
    }
  })