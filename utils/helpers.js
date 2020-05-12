import React from 'react';
import { AsyncStorage } from 'react-native';

import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';

const NOTIFICATION_KEY = 'MobileFlashCard:notifications';

export const DECK_STORAGE_KEY = 'MOBILE_CARD';

export const decks = {
  HTML: {
    title: 'HTML',
    questions: [
      { question: '<header>', answer: 'header area tag' },
      { question: 'what is this?', answer: 'this is nothing' },
    ],
  },
  CSS: {
    title: 'CSS',
    questions: [
      { question: 'overflow:hidden', answer: 'overflow hidden' },
      { question: 'what is this?', answer: 'this is nothing' },
    ],
  },
};

export const setStorage = () => {
  AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(decks));
};

export function getDailyReminderValue() {
  return {
    today: "Don't forget Quiz!",
  };
}

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
