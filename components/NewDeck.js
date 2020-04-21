import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  TextInput,
  KeyboardAvoidingView,
  StyleSheet,
} from 'react-native';

class NewDeck extends Component {
  state = {
    input: '',
  };

  render() {
    const { input } = this.state;
    return (
      <KeyboardAvoidingView style={styles.container}>
        <Text style={styles.title}>What is the title of your new deck?</Text>
        <TextInput
          value={input}
          style={styles.input}
          placeholder="Deck Title"
        ></TextInput>
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
  title: {
    marginTop: 100,
    marginBottom: 50,
    fontSize: 60,
    textAlign: 'center',
  },
  input: {
    alignSelf: 'stretch',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    marginLeft: 20,
    marginRight: 20,
    padding: 5,
  },
  button: {
    width: 150,
    height: 60,
    marginTop: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
});

export default NewDeck;
