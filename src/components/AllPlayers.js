import React from 'react';
import './AllPlayers.css'
import IndividualPlayer from './individualPlayer';



function AllPlayers(props) {
  return (
    <div className="allPlayers">
      <h4>Players</h4>
      <div className="allPlayersArea">
        {props.playerImages.map(item => {
          return (
            <IndividualPlayer playerImage={item} />
          )
        })}
      </div>
    </div>
  );
}

export default AllPlayers;
