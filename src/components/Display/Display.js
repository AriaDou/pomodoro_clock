import React from 'react';
import './Display.css';

const Display = (props) => {
  const min = props.min < 10 ? ('0' + props.min) : props.min;
  const s = props.s < 10 ? ('0' + props.s) : props.s;
  const timer = min + ':' + s;
  return (
    <div id="display">
      <p id="timer-label">{props.isSession ? 'Session' : 'Break'}</p>
      <p id="time-left">{timer}</p>
    </div>
  );
}

export default Display;
