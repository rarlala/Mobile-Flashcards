import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { getDesksInfo } from '../utils/helpers';

class DeskList extends Component {
  render() {
    const desks = getDesksInfo();

    return (
      <View>
        <Text>DeskList</Text>
        {Object.keys(desks).map((key) => {
          const { title, questions } = desks[key];
          return (
            <View style={styles.deskBox}>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.card}>
                {Object.keys(questions).length} cards
              </Text>
            </View>
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  deskBox: {
    marginTop: 3,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'pink',
  },
  title: {
    marginTop: 30,
    textAlign: 'center',
    fontSize: 20,
  },
  card: {
    marginBottom: 30,
    textAlign: 'center',
    fontSize: 12,
    color: 'gray',
  },
});

export default DeskList;
