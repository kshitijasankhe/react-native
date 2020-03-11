/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
  TextInput
} from 'react-native/Libraries/NewAppScreen';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      showDisplay: false, 
      count: 0,
      color: 'red',
    };
  }
  componentDidMount() {
    setInterval(() => {
      const color = this.state.color;
      if (color === 'red') {
        this.setState({
          color: 'green',
        });
      } else if (color === 'green') {
        this.setState({
          color: 'blue',
        });
      }
      else if(color==='blue'){
        this.setState({
          color:'red',
        });
      }
    }, 1000);
  }
  increaseCount = ()=>{
    const currentcount = this.state.count;
    this.setState({
      count: currentcount + 1,
    })
  }
  mickeySaysHi = ()=>{
    const hicount= this.state.count;
    this.setState({count:hicount+1})
  }
  render() {
    const count = this.state.count;
    return (
      <View style={{justifyContent:'center'}}>
        <Text style={[styles.welcome, {color: this.state.color}]}>
          {' '}
          Mickey said hi {count} times.{' '}
        </Text>
        <TouchableOpacity onPress={this.mickeySaysHi}>
          <Image style={styles.mickeyalign} source={{uri:'https://lh3.googleusercontent.com/proxy/eg0SiQzmpehrP4o57-WrpJJ9zyO1AqeJoch_KYNJGl9jPXXD_SKCzIQB9TpxL1VjaCZbgyBHTrimhSaXIeeOlMHpqKno_0U'}}/>
        </TouchableOpacity>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },

  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'blue',
  },
  mickeyalign:{
    alignSelf: 'center',
    width:400,
    height:400,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
