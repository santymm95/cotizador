import React from 'react';
import '../assets/stylesCSS/botones.css';

const BotonesColor = ({ onChangeImage }) => {
  return (
    <div>
      <span className="red" onClick={() => onChangeImage('red')}></span>
      <span className="green" onClick={() => onChangeImage('green')}></span>
      <span className="blue" onClick={() => onChangeImage('blue')}></span>
    </div>
  );
};

export default BotonesColor;
