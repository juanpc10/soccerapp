import React, { useContext } from 'react';
import './AllPlayers.scss'
import IndividualPlayer from './individualPlayer';

import { GlobalContext } from '../context/globalState';


function AllPlayers(props) {
  const { allPlayers } = useContext(GlobalContext);
  console.log(allPlayers);
  // console.log(allPlayers);
  // let playerData = props.playerData;

  return (
    <div className="allPlayers">
      <h4>Players</h4>
      <div className="allPlayersArea">
        {allPlayers.map((item, index) => {
          return (
            <IndividualPlayer playerImage={item.image} playerName={item.name} index={index} />
          )
        })}
      </div>
    </div>
  );
}

export default AllPlayers;
