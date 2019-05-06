import React, { Component } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { buttonStyle, titleStyle, title } = this.props;
    return (
      <TouchableOpacity
        style={titleStyle || styles.buttonContainer}
        {...this.props}
      >
        <Text style={buttonStyle || styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
  },
  buttonText: { alignSelf: 'center' },
});

export default Button;
