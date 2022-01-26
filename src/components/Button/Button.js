import React, { useState } from 'react';
import './Button.css';

const buttonStyle = (backgroundColor, borderColor, color) => {
  return ({
    backgroundColor,
    color,
    border: `2px solid ${borderColor}`,
  });
}

const hoverStyle = (backgroundColor, borderColor, color) => {
  return ({
    color,
    backgroundColor,
    border: `2px solid ${borderColor}`,
    boxShadow: "rgba(0, 0, 0, 0.25) 0 8px 15px",
    transform: "translateY(2px)",
  });
}

const Button = ({ 
    width,
    text,
    buttonBackground,
    buttonBorder,
    buttonColor,
    hoverBackground,
    hoverBorder,
    hoverColor
  }) => {

  const [isHover, setHover] = useState(false);

  return (
    <div 
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}>
      <button className="button-1"
              style={
                isHover 
                  ? hoverStyle(buttonBackground, buttonBorder, buttonColor) 
                  : buttonStyle(hoverBackground, hoverBorder, hoverColor)}>
          {text}
      </button>
    </div>
  );
}

export { Button };