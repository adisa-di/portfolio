import React, { useState } from 'react';
import './Item.css';

const DISPLAY_LIM = 3;

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

const Item = ({ experience, date, contents }) => {
  return (
    <div className='item_container'>
      <div className='outer_circle'></div>
      <div>
        <div className='experience'>
          { experience } 
        </div>
        <div className='date'>
          { date } 
        </div>
      </div>
      <div className='content'> 
          {/* { contents.map((content, idx) => 
              <div key={idx} style={{ marginBottom : "10px" }}>
                {content}
              </div> 
          )}  */}
          <Contents items={contents}/>
      </div>
    </div>
  );
}

export { Item };