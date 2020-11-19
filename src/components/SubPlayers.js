import React from 'react';
import './SubPlayers.scss'
import IndividualSubPlayer from './IndividualSubPlayer';



function SubPlayers(props) {
  let playerInfo = props.playerData;
  return (
    <div className="allPlayers">
      <h4>Sub Players</h4>
      <div className="allPlayersArea">
        {playerInfo.map(item => {
          return (
            <IndividualSubPlayer playerImage={item.image} playerName={item.name} />
          )
        })}
    </div>
  </div>
  );
}

export default SubPlayers;
