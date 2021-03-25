import React from 'react';
import Card from '../Card/Card';
import './CardBoard.css';
import contains from '../../utils/contains';
import itemsAreSame from '../../utils/itemsAreSame';
import PropTypes from 'prop-types';
import CONSTANTS from '../../constants';

export default class CardBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      guessedCards: [],
      selectedCards: [],
      isComparing: false,
    };
    this.trySelectCard = this.trySelectCard.bind(this);
    this.selectCard = this.selectCard.bind(this);
    this.unselectCards = this.unselectCards.bind(this);
    this.guessCards = this.guessCards.bind(this);
    this.comparedAreEqual = this.comparedAreEqual.bind(this);
  }

  trySelectCard(index) {
    const { state } = this;

    if (state.isComparing) {
      return;
    }

    if (state.selectedCards.length < 2) {
      this.selectCard(index);
    }

    if (state.selectedCards.length >= 2) {
      if (this.comparedAreEqual()) {
        this.guessCards();
      } else {
        this.unselectCards();
      }
    }
  }

  selectCard(index) {
    this.setState((prevState) => ({
      selectedCards: [...prevState.selectedCards, index],
    }));
  }

  unselectCards() {
    this.setState({
      selectedCards: [],
    });
  }

  guessCards() {
    this.setState((prevState) => ({
      guessedCards: [...prevState.guessedCards, prevState.selectedCards],
      selectedCards: [],
    }));
  }

  comparedAreEqual() {
    const { state, props } = this;
    const symbols = state.selectedCards.map((cardIndex) => props.deck[cardIndex]);
    console.log(symbols);
    return itemsAreSame(symbols);
  }

  render() {
    const { props } = this;
    const { state } = this;

    return (
      <div className="cardBoard">
        {
          props.deck.map((card, index) => (
            <Card
              key={index}
              icon={card}
              onclick={() => this.trySelectCard(index)}
              isFlipped={
                contains(state.guessedCards, index) || contains(state.selectedCards, index)
              }
            />
          ))
        }
      </div>
    );
  }
}

CardBoard.propTypes = {
  deck: PropTypes.arrayOf(PropTypes.oneOf(CONSTANTS.icons)).isRequired,
};
