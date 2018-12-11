import React from 'react';
import './Panel.css';

const Panel = (props) => {
  return (
    <div id="panel">
      <button id="start_stop" type="button" onClick={props.togglePlay}>
        <i className="fa fa-play"></i>
        <i className="fa fa-pause"></i>
      </button>
      <button id="reset" type="button" onClick={props.reset}>
        <i className="fa fa-refresh"></i>
      </button>
    </div>
  );
}

export default Panel;
