import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  YellowBox,
  CheckBox,
  TextInput,
  Button,
  ImageBackground,
} from 'react-native';

class Host extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.buttonPressed = this.buttonPressed.bind(this);
  }
  buttonPressed() {
    //console.log(this._username,this._password)
    //const username= this._username._lastNativeText;
    //const password= this._password._lastNativeText
    //console.log(username,password)
    console.log(this.state.username, this.state.password);
  }
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('../assets/parkwayRegistration.jpg')}
          style={styles.image}>
          <Text>ID Proof</Text>
          <TextInput
            defaultValue={this.state.username}
            onChangeText={text => this.setState({username: text})}
          />
          <Text style={{backgroundColor: 'transparent'}}>Bank Name</Text>
          <TextInput
            defaultValue={this.state.username}
            onChangeText={text => this.setState({username: text})}
          />
          <Text style={{backgroundColor: 'transparent'}}>
            Bank Account Number
          </Text>
          <TextInput
            defaultValue={this.state.password}
            onChangeText={text => this.setState({password: text})}
          />
          <Text style={{backgroundColor: 'transparent'}}>Type of Account</Text>
          <View style={styles.checkboxContainer}>
            <CheckBox style={styles.checkbox} />
            <Text style={styles.label}>Saving</Text>
            <CheckBox
              center
              title="Saving"
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              checked={this.state.checked}
              style={styles.checkbox1}
            />

            <Text style={styles.label}>Checking</Text>
          </View>

          <Button title={'Submit'} onPress={this.buttonPressed} />
          <View style={styles.half1} />
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 20,
  },

  text: {
    color: 'black',
    fontSize: 30,
    opacity: 0.99,
  },
  image: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch',
    opacity: 0.6,
  },
  label: {
    margin: 8,
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: 'center',
  },
  checkbox1: {
    alignSelf: 'center',
  },
});

export default Host;
