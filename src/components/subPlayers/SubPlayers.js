import React, { useContext } from 'react';
import './SubPlayers.scss'
import IndividualSubPlayer from './IndividualSubPlayer';

import { GlobalContext } from '../../context/globalState';



function SubPlayers(props) {
  let playerInfo = props.playerData;

  // const { items, deleteSingleEvent, editSingleEvent } = useContext(GlobalContext);
  const { subs } = useContext(GlobalContext);

  

  return (
    <div className="subPlayers">
      <h4>Sub Players</h4>
      <div className="allPlayersArea">

        {subs.map((item, index) => {
          return (
            <IndividualSubPlayer playerImage={item.image} playerName={item.name} index={index} />
          )
        })}

    </div>
  </div>
  );
}

export default SubPlayers;
