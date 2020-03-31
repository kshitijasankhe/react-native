import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  ImageBackground,
  Button,
  TouchableOpacity,
} from 'react-native';

class CustomButton extends React.Component {
  render() {
    return (
      <TouchableOpacity
        onPress={this.props.functionOnClick}
        style={{
          backgroundColor: 'white',
          color: 'white',
          height: 30,
          width: 'auto',
          padding: 10,
        }}>
        <Text>{this.props.title}</Text>
      </TouchableOpacity>
    );
  }
}
export default CustomButton;
