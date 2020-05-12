import { AsyncStorage } from 'react-native';
import { DECK_STORAGE_KEY, decks } from './helpers'

export function getDecks() {
  // return AsyncStorage.getItem(DECK_STORAGE_KEY).then(results=> results === null ? data : JSON.parse(results) );
  return AsyncStorage.getItem(DECK_STORAGE_KEY).then(results=> results.id === undefined ? decks : JSON.parse(results));
};

// const getDeck = (id) => {
  // return AsyncStorage.getItem(STORAGE_KEY).then((results) => {
  //   const obj = JSON.parse(results);
  //   return obj[id];
  // });
//   const desk = getDecks()
//   return desk[id]
// };

// const getDeck = (id) => {
//   const desk = getDecks()
//   return desk[id]
// };

export const saveDeckTitle = (input) => {
  return AsyncStorage.mergeItem(
    DECK_STORAGE_KEY,
    JSON.stringify({
      input: {
        title: input,
        questions: [],
      },
    })
  );
};