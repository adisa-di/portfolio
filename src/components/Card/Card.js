import React, { useState } from 'react';
import { ToggleButton } from '../Button/Button';
import './Card.css';

const Card = ({ title, icon, description, height="100%", children }) => {

  const [toggle, setToggle] = useState(false);

  return (
    <div className='card_container'>
      <div className='card_header'>
        <img src={icon} alt='skills' className='card_icon'/>
        <div className='card_title'>{title}</div>
        <div className='description'>{description}</div>
      </div>
      {
        toggle && 
          <div className='card_body' style={{ height }}>
            { children }
          </div>
      }
      <div className='learn_more'>
        { <ToggleButton onClick={() => setToggle(prev => !prev)} open={toggle} />}
        <span>{toggle ? 'Learn Less' : 'Learn More'}</span>
      </div>
    </div>
  );
}

export { Card };
