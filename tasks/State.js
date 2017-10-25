import React, { Component } from 'react';
import { Text, View } from 'react-native';

class Blink extends Component{
  constructor(props){
    super(props);
    this.state = {showText: true};

    setInterval(() => {
    this.setState(previousState => {
      return {showText: !previousState.showText};
    })
    }, 1000);
}

  render(){
    let display = this.state.showText ? this.props.text : ' ';
    return(
      <Text>{display}</Text>
    );
  }
}

export default class State extends Component {
  render() {
    let pic = {uri: 'https://scontent-arn2-1.xx.fbcdn.net/v/t34.0-12/22835295_10214338929972810_274313661_n.jpg?oh=c45d00d7b3c3bda011e0c180245e007b&oe=59F30CBE'};
    return (
      <View style={{alignItems: 'center'}}>
        <Blink/>
        <Blink text="Bingo manden er på arbejde" />
        <Blink text="Det er tid" />
      </View>
    );
  }
}