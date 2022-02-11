import React from 'react';
import { PlusButton } from '../Button/Button';
import './Card.css';

const Card = ({ title, icon, description, children }) => {
  return (
    <div className='card_container'>
      <div className='card_header'>
        <img src={icon} alt='skills' className='card_icon'/>
        <div class='card_title'>{title}</div>
      </div>
      <div className='description'>
        {description}
      </div>
      { children }
      <div className='learn_more'>
        <PlusButton/>
        <span>Learn More</span>
      </div>
    </div>
  );
}

export { Card };
