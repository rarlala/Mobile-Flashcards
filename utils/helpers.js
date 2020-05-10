import React from 'react';

export function getDesksInfo(deck) {
  const decks = {
    one: {
      title: 'one',
      questions: {
        one_question1: 'one_answer1',
        one_question2: 'one_answer2',
      },
    },
    two: {
      title: 'two',
      questions: {
        two_question1: 'two_answer1',
      },
    },
  };

  return typeof deck === 'undefined' ? decks : decks[deck];
}

export function timeToString(time = Date.now()) {
  const date = new Date(time);
  const todayUTC = new Date(
    Date.UTC(date.getFullYear(), date.getMonth(), date.getDate())
  );
  return todayUTC.toISOString().split('T')[0];
}
