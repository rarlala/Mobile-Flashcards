import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  StyleSheet,
} from 'react-native';
// import { getDesksInfo } from '../utils/helpers';

function SubmitBtn({ onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={{ color: 'white' }}>Submit</Text>
    </TouchableOpacity>
  );
}

class AddCard extends Component {
  state = {
    question: '',
    answer: '',
  };

  // question = (decks, value) => {
  //   const { deck } = getDesksInfo(decks);

  //   this.setState(() => ({
  //     ...state,
  //     [decks]: value,
  //   }));
  // };

  // submit = () => {
  //   this.setState(() => ({
  //     question: '',
  //     answer: '',
  //   }));

  //   //  Navigate to home

  //   // Clear local notification
  // };

  render() {
    return (
      <KeyboardAvoidingView style={styles.container}>
        <TextInput
          style={[styles.input, { marginTop: 50 }]}
          placeholder="question"
        ></TextInput>
        <TextInput style={styles.input} placeholder="answer"></TextInput>
        <SubmitBtn />
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
