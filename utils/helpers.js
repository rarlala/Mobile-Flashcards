import { AsyncStorage } from 'react-native'

export const DECK_STORAGE_KEY = 'MOBILE_CARD'

export const decks = {
  'HTML': {
    title: 'HTML',
    questions: [
      { question: '<header>', answer: 'header area tag' },
      { question: 'what is this?', answer: 'this is nothing' },
    ],
  },
  'CSS': {
    title: 'CSS',
    questions: [
      { question: 'overflow:hidden', answer: 'overflow hidden' },
      { question: 'what is this?', answer: 'this is nothing' },
    ],
  },
}

export const setStorage = () => {
  AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(decks))
}

// export function generateUID() {
//   return (
//     Math.random().toString(36).substring(2, 15) +
//     Math.random().toString(36).substring(2, 15)
//   );
// }