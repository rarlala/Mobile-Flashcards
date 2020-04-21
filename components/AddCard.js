import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableHighlight,
  KeyboardAvoidingView,
  StyleSheet,
} from 'react-native';

class AddCard extends Component {
  state = {
    question: '',
    answer: '',
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.container}>
        <TextInput
          style={[styles.input, { marginTop: 50 }]}
          placeholder="question"
        ></TextInput>
        <TextInput style={styles.input} placeholder="answer"></TextInput>
        <TouchableHighlight style={styles.button}>
          <Text style={{ color: 'white' }}>Submit</Text>
        </TouchableHighlight>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  input: {
    alignSelf: 'stretch',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 50,
    padding: 5,
  },
  button: {
    width: 150,
    height: 60,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
});

export default AddCard;
