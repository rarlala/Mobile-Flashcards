export const RECEIVE_ENTRIES = 'RECEIVE_ENTRIES';
export const ADD_DECK = 'ADD_DECK';

export function receiveEntries(decks) {
  return {
    type: RECEIVE_ENTRIES,
    decks,
  };
}

export function addDeck(deck) {
  return {
    type: ADD_DECK,
    deck,
  };
}
