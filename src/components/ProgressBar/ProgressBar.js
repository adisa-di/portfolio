import React from 'react';
import './ProgressBar.css'

const Bar = ({ filled=false }) => {
  return (
    filled
      ? <div className='bar filled'></div>
        : <div className='bar empty'></div>
  )
}

const ProgressBar = ({ progress=0 }) => {

  const empty = 5 - progress;
  return (
    <div className='progress_bar'>
      {
        Array(progress).fill(0).map(idx => <Bar filled={true}/>)
      }
      {
        Array(empty).fill(0).map(idx => <Bar/>)
      }
    </div>
  )
}

export { ProgressBar }