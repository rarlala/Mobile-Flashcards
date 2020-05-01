import { AsyncStorage } from 'react-native';

const STORAGE_KEY = 'mobile-flashcards:decks';

const getDecks = () => {
  return AsyncStorage.getItem(STORAGE_KEY).then((results) => {
    return results === null ? {} : JSON.parse(results);
  });
};

const getDeck = (id) => {
  return AsyncStorage.getItem(STORAGE_KEY).then((results) => {
    const obj = JSON.parse(results);
    return obj[id];
    // return results === null ? {} : JSON.parse(results);
  });
};

const saveDeckTitle = (deck) => {
  return AsyncStorage.mergeItem(
    STORAGE_KEY,
    JSON.stringify({
      [deck]: {
        deck: deck,
        questions: [],
      },
    })
  );
};

export { getDecks, getDeck, saveDeckTitle };

// export function submitEntry({ entry, key }) {
//   return AsyncStorage.mergeItem(JSON.stringify({ [key]: entry }));
// }
