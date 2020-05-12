import { RECEIVE_DECKS, ADD_DECK } from '../actions/index';

function entries(state = {}, action) {
  switch (action.type) {
    case RECEIVE_DECKS:
      return {
        ...state,
        ...action.decks,
        // ...JSON.parse(action.decks),
      };
    case ADD_DECK:
      return {
        ...state,
        [action.title]: {
          title: action.title,
          questions: [],
        },
      };
    default:
      return state;
  }
}

export default entries;