import React from 'react';
import './AllPlayers.scss'
import IndividualPlayer from './individualPlayer';



function AllPlayers(props) {
  let playerData = props.playerData;
  return (
    <div className="allPlayers">
      <h4>Players</h4>
      <div className="allPlayersArea">
        {playerData.map(item => {
          return (
            <IndividualPlayer playerImage={item.image} playerName={item.name} />
          )
        })}
      </div>
    </div>
  );
}

export default AllPlayers;
