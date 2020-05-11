import React, { Component } from 'react';
import {
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  StyleSheet,
} from 'react-native';
import { getDesksInfo, generateUID } from '../utils/helpers';
import { getDecks, saveDeckTitle } from '../utils/api';

import { connect } from 'react-redux';
import { handleAddDeck } from '../actions/index';

class NewDeck extends Component {
  state = {
    input: '',
  };

  handleTextChange = (input) => {
    this.setState(() => ({
      input,
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('NewDesk submit');

    const { deck } = this.state.input;
    const id = generateUID();

    if (deck === '') {
      return console.log('desk is none');
    }

    // Update Redux
    this.props.dispatch(handleAddDeck(id, deck));

    this.setState(() => ({
      input: '',
    }));
    // Navigate to home
    // Save to 'DB'

    // saveDeckTitle({ id, deck });

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
        <Text>{JSON.stringify(generateUID())}</Text>
        <TouchableOpacity onPress={this.handleSubmit} style={styles.button}>
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
  const key = generateUID();
  return {
    key,
  };
}

export default connect(mapStateToProps)(NewDeck);
