import React from 'react';
import './Header.css';

const Header = ({ text }) => {
  return (
    <div className='header'>{ text } </div>
  );
}

export { Header }