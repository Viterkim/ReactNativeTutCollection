import React from 'react';
import { Text, View, Platform, TouchableOpacity, StyleSheet, Button, WebView, ScrollView } from 'react-native';
import { Constants, WebBrowser } from "expo";
import { StackNavigator } from 'react-navigation';
import ButtonShowcase from './tasks/ButtonShowcase';
import Props from './tasks/Props';
import State from './tasks/State';
import CatTranslator from './tasks/CatTranslator';
import Style from './tasks/Style';
import ScrollViewPage from './tasks/ScrollView';
import SectionListBasics from './tasks/SectionListBasics';
import Network from './tasks/Network';
import LinkToLayout from './tasks/LinkToLayout';
import AlignItems from './tasks/Layout/AlignItems';
import FixedDim from './tasks/Layout/FixedDim';
import FlexDim from './tasks/Layout/FlexDim';
import FlexDirection from './tasks/Layout/FlexDirection';
import JustifyContent from './tasks/Layout/JustifyContent';


const Touchable = (props) => (
  <TouchableOpacity style={styles.button} onPress={props.onPress}>
    <Text style={styles.buttonText}>{props.title}</Text>
  </TouchableOpacity>)


class HomeScreen extends React.Component {
  static navigationOptions = { title: 'Day1 Tutorial' };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView>
        <Text style={{ textAlign: "center", fontSize: 20 }}>Viktors(vc-33) Demoer</Text>
        <Touchable onPress={() => navigate('buttonShowcase')} title="Button Showcase" />
        <Touchable onPress={() => navigate('props')} title="Props" />
        <Touchable onPress={() => navigate('state')} title="State" />
        <Touchable onPress={() => navigate('cat')} title="Cat Translator / Text" />
        <Touchable onPress={() => navigate('style')} title="Style" />
        <Touchable onPress={() => navigate('scrollview')} title="Scroll View" />
        <Touchable onPress={() => navigate('sectionListBasics')} title="Section List Basics" />
        <Touchable onPress={() => navigate('network')} title="Network" />
        <Touchable onPress={() => navigate('linkToLayout')} title="Doesn't Work, Re Routing" />
        <Touchable onPress={() => navigate('alignItems')} title="Align Items" />
        <Touchable onPress={() => navigate('fixedDim')} title="Fixed Dim" />
        <Touchable onPress={() => navigate('flexDim')} title="Flex Dim" />
        <Touchable onPress={() => navigate('flexDirection')} title="Flex Direction" />
        <Touchable onPress={() => navigate('justifyContent')} title="Justify Content" />
      </ScrollView>
    )
  }
}

export default App = () => <RouteStack style={{ marginTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight / 2 }} />

const RouteStack = StackNavigator({
  Home: { screen: HomeScreen },
  buttonShowcase: { screen: ButtonShowcase },
  props: { screen: Props },
  state: { screen: State },
  cat: { screen: CatTranslator},
  style: { screen: Style},
  scrollview: { screen: ScrollViewPage},
  sectionListBasics: { screen: SectionListBasics},
  network: { screen: Network},
  linkToLayout: { screen: LinkToLayout},
  alignItems: { screen: AlignItems},
  fixedDim: { screen: FixedDim},
  flexDim: { screen: FlexDim},
  flexDirection: { screen: FlexDirection},
  justifyContent: { screen: JustifyContent},
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