import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { getDesksInfo } from '../utils/helpers';

class DeskList extends Component {
  addCard({}) {}
  startQuiz({}) {}

  render() {
    const key = 'one';
    const desk = getDesksInfo(key);

    return (
      <View style={styles.container}>
        <Text style={styles.title}>{desk['title']}</Text>
        <Text style={styles.card}>
          {Object.keys(desk['questions']).length} cards
        </Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('AddCard')}
          style={[styles.button, styles.addCard]}
        >
          <Text>Add Card</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Quiz')}
          style={[styles.button, styles.startQuiz]}
        >
          <Text style={{ color: 'white' }}>Start Quiz</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.delete}>
          <Text style={{ color: 'red' }}>Delete Deck</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: {
    marginBottom: 20,
    fontSize: 30,
    fontWeight: 'bold',
  },
  card: {
    marginBottom: 100,
    fontSize: 15,
    color: 'gray',
  },
  button: {
    width: 200,
    height: 60,
    marginBottom: 15,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addCard: {
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 1,
  },
  startQuiz: {
    backgroundColor: 'black',
  },
  delete: {
    color: 'red',
    marginTop: 30,
  },
});

export default DeskList;
