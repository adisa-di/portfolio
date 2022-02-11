import React from 'react';
import './ProgressBar.css'

const Bar = ({ filled }) => {
  return (
    filled
      ? <div className='bar filled'></div>
        : <div className='bar empty'></div>
  )
}

const ProgressBar = () => {
  return (
    <div className='progress_bar'>
      <Bar filled={true}/>
      <Bar filled={true}/>
      <Bar/>
      <Bar/>
      <Bar/>
    </div>
  )
}

export { ProgressBar }