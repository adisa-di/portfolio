import React from 'react';
import './Typewriter.css';

const TypeWriter = ({ text }) => {
  return (
    <div className='typing_container'>
      <div className="typewriter"> { text } </div>
    </div>
  );
}

export { TypeWriter };