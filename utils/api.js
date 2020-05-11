import { AsyncStorage } from 'react-native';

export const STORAGE_KEY = 'mobile-flashcards:decks';

const getDecks = () => {
  return AsyncStorage.getItem(STORAGE_KEY).then((results) => {
    return results === null ? {} : JSON.parse(results);
  });
};

const getDeck = (id) => {
  return AsyncStorage.getItem(STORAGE_KEY).then((results) => {
    const obj = JSON.parse(results);
    return obj[id];
  });
};

const saveDeckTitle = ({ id, deck }) => {
  return AsyncStorage.mergeItem(
    STORAGE_KEY,
    JSON.stringify({
      [id]: {
        id: id,
        title: deck,
        questions: [],
      },
    })
  );
};

export { getDecks, getDeck, saveDeckTitle };
