import React from 'react';
import './Set.css';

const Set = (props) => {
  const value = props.value;
  return (
    <div id={value + '-set'}>
      <p id={value + '-label'} className="label">
        {value.slice(0, 1).toUpperCase() + value.slice(1) + ' Length'}
      </p>
      <button id={value + '-decrement'} value="down" type="button" onClick={props.onClick}>
        <i className="fa fa-arrow-down" onClick={() => false}></i>
      </button>
      <span id={value + '-length'}>{props.length}</span>
      <button id={value + '-increment'} value="up" type="button" onClick={props.onClick}>
        <i className="fa fa-arrow-up"></i>
      </button>
    </div>
  );
}

export default Set;
