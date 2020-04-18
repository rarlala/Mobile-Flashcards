import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DeskList from './components/DeskList';

export default function App() {
  return (
    <View style={styles.container}>
      <DeskList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 30,
  },
});
