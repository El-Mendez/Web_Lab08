import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import './CardBoard.css';
import Header from '../Header/Header';
import contains from '../../utils/contains';
import CONSTANTS from '../../constants';

export default class CardBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      guessedCards: [],
      selectedCards: [],
      isComparing: false,
      tries: 0,
    };

    this.trySelectCard = this.trySelectCard.bind(this);
    this.selectCard = this.selectCard.bind(this);
    this.canSelect = this.canSelect.bind(this);
    this.selectAndCompare = this.selectAndCompare.bind(this);
    this.checkIfWon = this.checkIfWon.bind(this);
  }

  trySelectCard(index) {
    const { state } = this;
    if (this.canSelect(index)) {
      if (state.selectedCards.length > 0) {
        this.selectAndCompare(index);
      } else {
        this.selectCard(index);
      }
    }
  }

  canSelect(index) {
    const { state } = this;
    return !contains(state.selectedCards, index)
        && !contains(state.guessedCards, index)
        && !state.isComparing;
  }

  selectCard(index) {
    this.setState((prevState) => ({
      selectedCards: [...prevState.selectedCards, index],
    }));
  }

  selectAndCompare(index) {
    this.setState((prevState) => ({
      isComparing: true,
      selectedCards: [...prevState.selectedCards, index],
      tries: prevState.tries + 1,
    }), () => {
      this.compareCards();
    });
  }

  compareCards() {
    const { state, props } = this;
    // Si los dos tienen símbolos iguales
    if (props.deck[state.selectedCards[0]] === props.deck[state.selectedCards[1]]) {
      this.setState((prevState) => ({
        selectedCards: [],
        guessedCards: [...prevState.guessedCards, ...prevState.selectedCards],
        isComparing: false,
      }), () => { this.checkIfWon(); });
    } else {
      setTimeout(() => {
        this.setState({
          selectedCards: [],
          isComparing: false,
        });
      }, CONSTANTS.comparisonDelay);
    }
  }

  checkIfWon() {
    const { state, props } = this;
    if (state.guessedCards.length === props.deck.length) {
      setTimeout(() => {
        alert('ganaste :D');
      }, CONSTANTS.comparisonDelay);
    }
  }

  render() {
    const { props } = this;
    const { state } = this;

    return (
      <div>
        <Header tries={state.tries} />
        <div className="cardBoard">
          {
          props.deck.map((card, index) => (
            <Card
               /* Según la documentación de React, es correcto usar key=index
               en tres situaciones diferentes:

               1. Los items son estáticos y no cambian
               2. Los items no tienen id
               3. La lista nunca es ordenada ni filtrada.
               Este es el caso 3, por lo que se puede usar key=index */
            /* eslint-disable-next-line react/no-array-index-key */
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
      </div>
    );
  }
}

CardBoard.propTypes = {
  deck: PropTypes.arrayOf(PropTypes.oneOf(CONSTANTS.icons)).isRequired,
};
