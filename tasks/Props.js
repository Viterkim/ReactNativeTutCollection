import React, { Component } from 'react';
import { Text, Image, View } from 'react-native';

class Hilsen extends Component{
  render(){
    return(
      <Text>Bingo tid med {this.props.name}</Text>
    );
  }
}

export default class Props extends Component {
  render() {
    let pic = {uri: 'https://scontent-arn2-1.xx.fbcdn.net/v/t34.0-12/22835295_10214338929972810_274313661_n.jpg?oh=c45d00d7b3c3bda011e0c180245e007b&oe=59F30CBE'};
    return (
      <View style={{alignItems: 'center'}}>
        <Text>Bingo Tid!</Text>
        <Hilsen name="Viktor" />
        <Hilsen name="Bingomanden" />
        <Image source={pic} style={{width: 193, height: 110}}/>
      </View>
    );
  }
}