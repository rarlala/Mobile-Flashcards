import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { handleReceiveDesks } from '../actions';

class DeskList extends Component {
  componentDidMount() {
    this.props.initilizeData();
  }

  render() {
    const desk = Object.values(this.props.decks);

    return (
      <View>
        {Object.keys(desk).map((key) => {
          const { title, questions } = desk[key];
          return (
            <TouchableOpacity
              style={styles.deskBox}
              onPress={() =>
                this.props.navigation.navigate('Individual', {
                  title,
                  questions,
                })
              }
            >
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.card}>
                {Object.keys(questions).length} cards
              </Text>
            </TouchableOpacity>
          );
        })}
        <Text>{JSON.stringify(desk)}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  deskBox: {
    marginTop: 10,
    marginRight: 10,
    marginLeft: 10,
    backgroundColor: 'yellowgreen',
    borderRadius: 10,
  },
  title: {
    marginTop: 30,
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  card: {
    marginBottom: 30,
    textAlign: 'center',
    fontSize: 15,
    color: 'green',
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
