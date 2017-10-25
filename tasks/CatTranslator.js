import React, { Component } from 'react';
import { Text, TextInput, View, Button } from 'react-native';

export default class CatTranslator extends Component {
    constructor(props){
        super(props);
        this.state = {text : ''};
    }

    render() {
        return (
        <View style={{padding: 40}}>
            <TextInput 
            style={{height: 40}}
            placeholder="Tast her for at oversætte"
            onChangeText={(text) => this.setState({text})}
            />
            
            <Text style={{padding: 10, fontSize: 42}}>
                {this.state.text.split(' ').map((word) => word && '😺').join(' ')}
            </Text>
        </View>
        );
    }
};