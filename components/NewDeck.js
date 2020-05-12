import React, { Component } from 'react';
import {
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  StyleSheet,
} from 'react-native';

import { connect } from 'react-redux';
import { handleAddDeck } from '../actions/index';
import { saveDeckTitle } from '../utils/api';

class NewDeck extends Component {
  state = {
    input: '',
  };

  handleTextChange = (input) => {
    this.setState(() => ({
      input,
    }));
  };

  handleSubmit = async (e) => {
    const { input } = this.state;

    if (input === '') {
      return console.log('desk is none');
    } else {
      this.props.dispatch(handleAddDeck(input));
      await saveDeckTitle(input);

      this.props.navigation.navigate('Individual', {
        title: this.state.input,
      });

      this.setState(() => ({
        input: '',
      }));
    }
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

function mapStateToProps(desks) {
  return desks;
}

export default connect(mapStateToProps)(NewDeck);
