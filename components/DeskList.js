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
            <View>
              <Text>{title}</Text>
              <Text>{Object.keys(questions).length}</Text>
            </View>
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  deskBox: {
    backgroundColor: 'yellow',
  },
});

export default DeskList;
