import { ADD_DECK } from '../actions';

function entries(state = {}, action) {
  switch (action.type) {
    case ADD_DECK:
      return {
        ...state,
        ...action.deck,
      };
    default:
      return state;
  }
}

export default entries;
