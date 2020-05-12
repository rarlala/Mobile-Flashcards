import { AsyncStorage } from 'react-native';
import { DECK_STORAGE_KEY, decks } from './helpers';

export function getDecks() {
  // return AsyncStorage.getItem(DECK_STORAGE_KEY).then((results) =>
  //   results === null ? decks : JSON.parse(results)
  // );
  return AsyncStorage.getItem(DECK_STORAGE_KEY).then((results) =>
    results.id === undefined ? decks : JSON.parse(results)
  );
}

export function getDeck(title) {
  return getDecks().then((decks) => decks[title]);
}

export const saveDeckTitle = (input) => {
  return AsyncStorage.mergeItem(
    DECK_STORAGE_KEY,
    JSON.stringify({
      [input]: {
        title: input,
        questions: [],
      },
    })
  );
};

export const removeDeckTitle = () => {
  return AsyncStorage.removeItem(DECK_STORAGE_KEY);
};

export function addCardToDeck(title) {
  return getDecks().then((decks) => decks[title]);
}
