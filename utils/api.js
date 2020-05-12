import { AsyncStorage } from 'react-native';
import { DECK_STORAGE_KEY, decks } from './helpers';

export function getDecks() {
  return AsyncStorage.getItem(DECK_STORAGE_KEY).then((results) =>
    results === null ? decks : JSON.parse(results)
  );
}

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

export const removeDeckTitle = () => {
  return AsyncStorage.removeItem(DECK_STORAGE_KEY);
};
