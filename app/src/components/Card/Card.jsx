import React from 'react';
import './Card.css';
import ReactCardFlip from 'react-card-flip';
import PropTypes from 'prop-types';
import CONSTANTS from '../../constants';

export default class Carta extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleClick(e) {
    const { props } = this;
    e.preventDefault();
    props.onclick();
  }

  handleKeyPress(e) {
    const { props } = this;
    if (e.code === 'Enter') {
      props.onclick();
    }
  }

  render() {
    const { props } = this;
    return (
      <div className="card" onClick={this.handleClick} role="button" tabIndex={0} onKeyDown={this.handleKeyPress}>
        <ReactCardFlip isFlipped={!props.isFlipped}>
          <div className="cardBack">
            <i className="fas fa-atom fa-5x" />
          </div>
          <div className="cardFront">
            <i className={`fas ${props.icon} fa-5x`} />
          </div>
        </ReactCardFlip>
      </div>
    );
  }
}

Carta.propTypes = {
  icon: PropTypes.oneOf(CONSTANTS.icons),
  isFlipped: PropTypes.bool,
  onclick: PropTypes.func,
};

Carta.defaultProps = {
  icon: 'fa-question',
  isFlipped: false,
  onclick() {},
};
