import React from 'react';
import Field from './field';
import './InitialPlayers.scss'



function InitialPlayers(props) {
  return (
    <div className="initialPlayers">
      <h4>Initial Players</h4>
      <Field playerData={props.playerData} />
    </div>
  );
}

export default InitialPlayers;
