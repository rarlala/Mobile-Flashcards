import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';

import NewDeck from './components/NewDeck';

export default function App() {
  return (
    <Provider store={createStore(reducer)}>
      <View style={styles.container}>
        <NewDeck />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 30,
  },
});
