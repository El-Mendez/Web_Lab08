import React from 'react';
import './Header.css';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.props.counter.viewers.push(this);
    this.state = { tries: this.props.counter.count };
  }

  dataWasChanged() {
    this.setState(() => this.state = { tries: this.props.counter.count });
  }

  render() {
    return (
      <header className="Header">
        <h1>Juego de memoria</h1>
        <p>
          Intentos:
          {this.state.tries}
        </p>
      </header>
    );
  }
}
