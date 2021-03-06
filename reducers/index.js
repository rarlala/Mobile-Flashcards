import {
  RECEIVE_DECKS,
  ADD_DECK,
  REMOVE_DECK,
  ADD_CARD,
} from '../actions/index';

function entries(state = [], action) {
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
    case REMOVE_DECK:
      // console.log('=================================');
      // console.log('state', state);
      // console.log('delete state', delete state[action.title]);
      // console.log('state', state);
      // console.log('=================================');
      delete state[action.title];
      return state;
    case ADD_CARD:
      return {
        ...state,
        [action.title]: {
          title: action.title,
          questions: [...state[action.title].questions, action.card],
        },
      };
    default:
      return state;
  }
}

export default entries;
