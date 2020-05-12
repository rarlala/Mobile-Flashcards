import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { handleReceiveDesks } from '../actions/index';
import { connect } from 'react-redux';

class DeskList extends Component {
  // handleRemove() {
  //   const { title } = this.props.route.params;
  //   console.log('delete 실행');
  //   this.props.dispatch(handleRemoveDeck(title));
  //   this.props.navigation.goBack();
  // }

  render() {
    const { title } = this.props.route.params;
    const questions = this.props.decks[title].questions;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.card}>{questions.length} cards</Text>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate('AddCard', {
              title,
              questions,
            })
          }
          style={[styles.button, styles.addCard]}
        >
          <Text>Add Card</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate('Quiz', {
              title,
              questions,
            })
          }
          style={[styles.button, styles.startQuiz]}
        >
          <Text style={{ color: 'white' }}>Start Quiz</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity
          style={styles.delete}
          onPress={(title) => this.handleRemove(title)}
        >
          <Text style={{ color: 'red' }}>Delete Deck</Text>
        </TouchableOpacity> */}
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

function mapStateToProps(decks) {
  return { decks };
}

function mapDispatchProps(dispatch) {
  return {
    initilizeData: () => {
      dispatch(handleReceiveDesks());
    },
  };
}

export default connect(mapStateToProps, mapDispatchProps)(DeskList);
