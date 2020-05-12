import React, { Component } from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  StyleSheet,
} from 'react-native';

import { connect } from 'react-redux';
import { handleAddCard } from '../actions/index';

class AddCard extends Component {
  state = {
    question: '',
    answer: '',
  };

  handleQuestionChange = (question) => {
    this.setState(() => ({
      question,
    }));
  };

  handleAnswerChange = (answer) => {
    this.setState(() => ({
      answer,
    }));
  };

  handleSubmit = () => {
    const { question, answer } = this.state;

    const title = this.props.route.params['title'];
    const card = { question, answer };

    if (question !== '' && answer != '') {
      this.props.createCard(title, card);
    }

    this.setState(() => ({
      question: '',
      answer: '',
    }));

    this.props.navigation.goBack();
  };

  render() {
    const { question, answer } = this.state;
    return (
      <KeyboardAvoidingView style={styles.container}>
        <TextInput
          value={question}
          onChangeText={this.handleQuestionChange}
          placeholder="question"
          style={[styles.input, { marginTop: 50 }]}
        ></TextInput>
        <TextInput
          value={answer}
          onChangeText={this.handleAnswerChange}
          placeholder="answer"
          style={styles.input}
        ></TextInput>
        <TouchableOpacity style={styles.button} onPress={this.handleSubmit}>
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
  input: {
    alignSelf: 'stretch',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 50,
    padding: 10,
    fontSize: 20,
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

function mapStateToProps(desks) {
  return desks;
}

const mapDispatchToProps = (dispatch) => ({
  createCard: (title, card) => dispatch(handleAddCard(title, card)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddCard);
