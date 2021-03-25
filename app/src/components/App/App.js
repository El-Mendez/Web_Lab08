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
    return (
      <div className="App">
        <CardBoard
          deck={this.state.deck}
        />
      </div>
    );
  }
}
