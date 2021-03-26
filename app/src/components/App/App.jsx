import React from 'react';
import CardBoard from '../CardBoard/CardBoard';
import './App.css';
import buildDeck from '../../utils/buildDeck';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deck: buildDeck(),
    };
  }

  render() {
    const { state } = this;
    return (
      <div className="App">
        <CardBoard
          deck={state.deck}
        />
      </div>
    );
  }
}
