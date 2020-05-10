import React from 'react';
import { StyleSheet, Platform, View, StatusBar } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';

import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import DeskList from './components/DeskList';
import AddCard from './components/AddCard';
import NewDeck from './components/NewDeck';
import Quiz from './components/Quiz';
import Individual from './components/Individual';

const Tabs =
  Platform.OS === 'ios'
    ? createBottomTabNavigator()
    : createMaterialTopTabNavigator();

export default function App() {
  return (
    <Provider store={createStore(reducer)}>
      <View style={styles.container}>
        <NavigationContainer>
          <Tabs.Navigator initialRouteName="DeckList">
            <Tabs.Screen name="DeckList" component={DeskList} />
            <Tabs.Screen name="AddCard" component={AddCard} />
            <Tabs.Screen name="NewDeck" component={NewDeck} />
            <Tabs.Screen name="Quiz" component={Quiz} />
            <Tabs.Screen name="Individual" component={Individual} />
          </Tabs.Navigator>
        </NavigationContainer>
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
