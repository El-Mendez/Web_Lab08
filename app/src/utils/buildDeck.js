import CONSTANTS from '../constants';
import shuffle from './shuffle';

export default () => {
  const cards = [];
  const icons = shuffle([...CONSTANTS.icons]);

  while (cards.length < CONSTANTS.cardNumber) {
    const card = icons[cards.length];
    cards.push(card);
    cards.push(card);
  }

  return shuffle(cards);
};
