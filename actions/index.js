import { saveDeckTitle, getDecks, removeDeckTitle } from '../utils/api';

// action
export const RECEIVE_DECKS = 'RECEIVE_DECKS';
export const ADD_DECK = 'ADD_DECK';
export const REMOVE_DECK = 'REMOVE_DECK';

// action creator
export function removeDeck(title) {
  return {
    type: REMOVE_DECK,
    title,
  };
}

export function receiveDecks(decks) {
  return {
    type: RECEIVE_DECKS,
    decks,
  };
}

function addDeck(title) {
  return {
    type: ADD_DECK,
    title,
  };
}

export function handleReceiveDesks() {
  return (dispatch) => {
    return getDecks().then((data) => {
      dispatch(receiveDecks(data));
    });
  };
}

export function handleAddDeck(input) {
  return (dispatch) => {
    return saveDeckTitle(input).then(() => dispatch(addDeck(input)));
  };
}

export function handleRemoveDeck(title) {
  return (dispatch) => {
    // return removeDeckTitle(title).then(() => removeDeck(title));
    return removeDeckTitle().then(() => dispatch(removeDeck(title)));
    // return removeDeckTitle(title);
  };
}
