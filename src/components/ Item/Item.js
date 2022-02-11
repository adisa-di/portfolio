import React, { useState } from 'react';
import './Item.css';

import { FaGithubAlt, FaLinkedinIn } from 'react-icons/fa';

const DISPLAY_LIM = 2;

const Contents = ({ items }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      { !toggle
          ? items.map((content, idx) => {
            if (idx > DISPLAY_LIM - 1) return;
            return (
              <div key={idx} style={{ marginBottom : "10px" }}>
                {content}
              </div>
            )})
          : items.map((content, idx) => 
              <div key={idx} style={{ marginBottom : "10px" }}>
                {content}
              </div>
            )
      }
      {
        items.length <= DISPLAY_LIM
          ? <></>
          : (!toggle) 
            ? <div onClick={() => setToggle(!toggle)} className="see_more">See More</div>
            : <div onClick={() => setToggle(!toggle)} className="see_more">See Less</div>
      }
    </div>
  )
}

const Item = ({ experience, date, contents, note=null }) => {
  return (
    <div className='item_container'>
      <div>
        <div className='outer_circle'>
          {/* <FaGithubAlt/> */}
        </div>
        <div className='line'></div>
      </div>
      <div>
        <div className='experience'>
          { experience } 
        </div>
        <div className='date'>
          { date } 
          <div className='note'>
            { note }
          </div>
        </div>
      </div>
      <div className='content'> 
          <Contents items={contents}/>
      </div>
    </div>
  );
}

export { Item };