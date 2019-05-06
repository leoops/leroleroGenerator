import React, { Component } from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { colors } from '../utils/colos';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { multiline } = this.props;
    return (
      <TextInput
        style={multiline ? styles.multiLineInput : styles.simpleLine}
        multiline={multiline}
        {...this.props}
      />
    );
  }
}

const styles = StyleSheet.create({
  multiLineInput: {
    borderColor: colors.BLACK,
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
    paddingLeft: 12,
    paddingTop: 12,
    justifyContent: 'center',
  },
  simpleLine: {
    borderColor: colors.BLACK,
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
    paddingLeft: 10,
    paddingTop: 10,
    justifyContent: 'center',
  },
});

export default Input;
