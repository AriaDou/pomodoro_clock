import React from 'react';
import './Settings.css';
import Set from '../Set/Set';

const Settings = (props) => {
  return (
    <div id="settings">
      <Set
        value="break"
        length={props.initBreak}
        onClick={props.setInitBreak} />
      <Set
        value="session"
        length={props.initSession}
        downInit={props.downInit}
        onClick={props.setInitSession} />
    </div>
  );
}

export default Settings;
