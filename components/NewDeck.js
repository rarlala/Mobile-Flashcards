import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  StyleSheet,
} from 'react-native';
import { getDesksInfo, timeToString } from '../utils/helpers';
import { getDecks, saveDeckTitle } from '../utils/api';

import { connect } from 'react-redux';
import { addDeck } from '../actions/index';

class NewDeck extends Component {
  state = {
    input: '',
  };

  handleTextChange = (input) => {
    this.setState(() => ({
      input,
    }));
  };

  submit = () => {
    const key = timeToString();
    const { deck } = this.state.input;
    if (deck === '') {
      return;
    }

    // Update Redux
    this.props.dispatch(addDeck({ [key]: deck }));

    this.setState(() => ({
      input: '',
    }));
    // Navigate to home
    // Save to 'DB'
    saveDeckTitle({ key, deck });
    // Clear local notification
  };

  render() {
    const { input } = this.state;

    return (
      <KeyboardAvoidingView style={styles.container}>
        <Text style={styles.title}>What is the title of your new deck?</Text>
        <TextInput
          value={input}
          onChangeText={this.handleTextChange}
          style={styles.input}
          placeholder="Deck Title"
        ></TextInput>
        <Text>{JSON.stringify(getDesksInfo())}</Text>
        <TouchableOpacity onPress={this.submit} style={styles.button}>
          <Text style={{ color: 'white' }}>Submit</Text>
        </TouchableOpacity>
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
    marginTop: 150,
    marginBottom: 30,
    fontSize: 25,
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
    padding: 10,
  },
  button: {
    width: 200,
    height: 50,
    marginTop: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
});

function mapStateToProps(state) {
  const key = timeToString();
  return {
    key,
  };
}

export default connect(mapStateToProps)(NewDeck);
