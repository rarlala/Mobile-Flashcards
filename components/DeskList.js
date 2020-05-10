import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
// import { receiveDecks, addDesk } from '../actions';
import { timeToString, getDesksInfo } from '../utils/helpers';
import { AppLoading } from 'expo';

class DeskList extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
  }

  render() {
    const desks = getDesksInfo();

    return (
      <View>
        {Object.keys(desks).map((key) => {
          const { title, questions } = desks[key];
          return (
            <TouchableOpacity
              style={styles.deskBox}
              onPress={() => this.props.navigation.navigate('Individual')}
            >
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.card}>
                {Object.keys(questions).length} cards
              </Text>
            </TouchableOpacity>
          );
        })}
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

export default connect(mapStateToProps)(DeskList);
