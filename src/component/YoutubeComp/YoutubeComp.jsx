import React from 'react';
import './YoutubeComp.css';

const YoutubeComp = (p) => {
  return  <div className="card">
            <div className="img">
              <p className="time">{p.time}</p>
            </div>
            <p className="title">{p.title}</p>
            <p className="date">{p.date}</p>
          </div>
}

// Memberikan nilai default
 YoutubeComp.defaultProps = {
   time: '00.00',
   title: 'Title here',
   date: 'date here'
 }
export default YoutubeComp;