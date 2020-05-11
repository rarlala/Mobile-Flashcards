export function getDesksInfo() {
  return {
    '1zarxzbt8054moyp60e1pr': {
      id: '1zarxzbt8054moyp60e1pr',
      title: 'HTML',
      questions: [
        { question: '<header>', answer: 'header area tag' },
        { question: 'what is this?', answer: 'this is nothing' },
      ],
    },
    '1wl8dk7vwzpp7s9b4wdacp': {
      id: '1wl8dk7vwzpp7s9b4wdacp',
      title: 'CSS',
      questions: [
        { question: 'overflow:hidden', answer: 'overflow hidden' },
        { question: 'what is this?', answer: 'this is nothing' },
      ],
    },
  };
}

export function generateUID() {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
}
