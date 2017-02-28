import React from 'react';
import './Spinner.css';
import SpinnerImage from './spinner.jpg';

function Spinner() {
  return (
    <div>
      <div className="Spinner">
        <div className="Spinner__image" style={{ backgroundImage: `url(${SpinnerImage})` }} />
        <div className="Spinner__text">Laster...</div>
      </div>
    </div>
  );
}

export default Spinner;
