import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';

export default function Header(props) {
  const { tries } = props;
  return (
    <header className="Header">
      <h1>Juego de memoria</h1>
      <p>
        {`Intentos: ${tries}`}
      </p>
    </header>
  );
}

Header.propTypes = {
  tries: PropTypes.number.isRequired,
};
