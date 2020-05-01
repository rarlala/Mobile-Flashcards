import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  StyleSheet,
} from 'react-native';
import { getDesksInfo } from '../utils/helpers';
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
    const { deck } = this.input;
    if (deck === '') {
      return;
    }

    // Update Redux
    this.props.dispatch(addDeck(deck));
    // Navigate to home
    // Save to 'DB'
    saveDeckTitle(deck);
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
        <Text>{this.state.input}</Text>
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

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(NewDeck);
