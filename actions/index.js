import { saveDeckTitle, getDecks } from '../utils/api';

// action
export const RECEIVE_DECKS = 'RECEIVE_DECKS';
export const ADD_DECK = 'ADD_DECK';

// action creator
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

export function handleReceiveDesks(){
  return (dispatch) => {
    return getDecks().then(data=>{
      dispatch(receiveDecks(data))
    })
  }
}

export function handleAddDeck(input) {
  return (dispatch) => { 
    return saveDeckTitle(input).then(() => dispatch(addDeck(input)));
  };
}
