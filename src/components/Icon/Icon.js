import React from "react";
import './Icon.css';

const styleSheet = (fontSize="24px") => {
  return (
    {
      fontSize,
    }
  );
}

const Icon = ({ link, children }) => {
  return (
    <a href={link} style={styleSheet()} className="icon_container">
      {children}
    </a>
  )
}

export { Icon };