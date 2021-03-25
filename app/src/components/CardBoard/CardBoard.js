import React from 'react';
import Card from '../Card/Card';
import './CardBoard.css';
import contains from '../../utils/contains';

export default class CardBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      guessedCards: [],
      comparingCards: [],
    };
    this.selectCard = this.selectCard.bind(this);
  }

  selectCard(index) {
    this.setState((prevState) => ({
      guessedCards: [...prevState.guessedCards, index],
    }));
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
              onclick={() => this.selectCard(index)}
              isFlipped={contains(state.guessedCards, index)}
            />
          ))
        }
      </div>
    );
  }
}
