import React from 'react';
import { StyleSheet, Platform, View, StatusBar } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import middleware from './middleware';

import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import DeskList from './components/DeskList';
import AddCard from './components/AddCard';
import NewDeck from './components/NewDeck';
import Quiz from './components/Quiz';
import Individual from './components/Individual';

const Tabs = createBottomTabNavigator();

const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Desks" component={DeskList} />
      <HomeStack.Screen name="Individual" component={Individual} />
      <HomeStack.Screen name="Quiz" component={Quiz} />
      <HomeStack.Screen name="AddCard" component={AddCard} />
    </HomeStack.Navigator>
  );
}

export default function App() {
  return (
    <Provider store={createStore(reducer, middleware)}>
      <View style={styles.container}>
        <NavigationContainer>
          <Tabs.Navigator>
            <Tabs.Screen name="DECKS" component={HomeStackScreen} />
            <Tabs.Screen name="New Deck" component={NewDeck} />
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
  },
});
