import React from 'react';
import '../styles/Button.css';


const Button = ({ text, onClick, buttonStyle, buttonSize }) => {
  return (
    <button
      onClick={onClick} className={`btn ${buttonStyle} ${buttonSize}`}>{text}
    </button>
  );
};

export default Button