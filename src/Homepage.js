import React from 'react'
import Sidenav from './navigation/Sidenav';
import Timeline from './timeline/Timeline';
import './Homepage.css';

function Homepage() {
  return (
    <div className='homepage'>
    <div className='homepage__nav'>
      <Sidenav/>
    </div>
    <div className='timeline__nav'>
      <Timeline/>
    </div>
    </div>
  )
}

export default Homepage