import React from 'react';
import './Card.css';
import icon_skills from '../../assets/images/card-icon-skills.png';

const Card = () => {
  return (
    <div className='card_container'>
      <div className='card_header'>
        <img src={icon_skills} alt='skills' className='card_icon'/>
        <div class='card_title'>Skills</div>
      </div>
    </div>
  );
}

export { Card };
