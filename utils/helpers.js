import { AsyncStorage } from 'react-native';

import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';

const NOTIFICATION_KEY = 'MobileFlashCard:notifications';

export const DECK_STORAGE_KEY = 'MOBILE_CARD';

export const decks = {
  Nonsense: {
    title: 'Nonsense',
    questions: [
      {
        question: 'Why Was 6 Afraid Of 7?',
        answer: 'Because 789!',
      },
      {
        question: 'If You Say It You Break It. What Is It?',
        answer: 'Silence',
      },
    ],
  },
  React: {
    title: 'React',
    questions: [
      {
        question: 'How does react work?',
        answer:
          'React is a JavaScript library (not a framework) that creates user interfaces (UIs) in a predictable and efficient way using declarative code',
      },
      {
        question: 'Where is react used?',
        answer:
          'ReactJs is an open-source JavaScript library that is used to build user interfaces specifically. This is usually used for single-page applications. It is used to handle all views of an application for any web or mobile application. It is also used to reuse UI components.',
      },
    ],
  },
};

export const setStorage = () => {
  AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(decks));
};

export function clearLocalNotification() {
  return AsyncStorage.removeItem(NOTIFICATION_KEY).then(
    Notifications.cancelAllScheduledNotificationsAsync
  );
}

export function createLocalNotification() {
  return {
    title: 'Take a quiz!',
    body: "Don't forget to quiz today.",
    ios: {
      sound: true,
    },
    android: {
      sound: true,
      priority: 'high',
      sticky: false,
      vibrate: true,
    },
  };
}

export function setLocalNotification() {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS).then(({ status }) => {
          if (status === 'granted') {
            Notifications.cancelAllScheduledNotificationsAsync();

            let tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            tomorrow.setHours(20);
            tomorrow.setMinutes(0);

            Notifications.scheduleLocalNotificationAsync(
              createLocalNotification(),
              {
                time: tomorrow,
                repeat: 'day',
              }
            );
            AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true));
          }
        });
      }
    });
}
