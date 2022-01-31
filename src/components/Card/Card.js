import React from 'react';
import './Card.css';
import icon_skills from '../../assets/images/card-icon-skills.png';

const Card = () => {
  return (
    <div className='card_container'>
      <img src={icon_skills} alt='skills' className='skills_icon'/>
      Content goes here
      Content goes here
      Content goes here
      Content goes here
      Content goes here
    </div>
  );
}

export { Card };
