import React, { useContext } from 'react';
import { GlobalContext } from '../../context/globalState';
import './individualPlayer.scss';




function IndividualPlayer(props) {

  const { addFieldPlayer, addSub, deleteFromAllPlayers } = useContext(GlobalContext);

  let allPlayersObj = {};
  allPlayersObj.name = props.playerName;
  allPlayersObj.image= props.playerImage;

  let i = props.index;


  const clickAddFieldPlayer = (index, obj) => {
    addFieldPlayer(obj);
    deleteFromAllPlayers(index);
  }

  const clickAddSub = (index, obj) => {
    addSub(obj);
    deleteFromAllPlayers(index);
  }

  return (
    <div className="individualPlayerArea">

      <div className="playerPictureArea">
          <img src={props.playerImage}></img>
      </div>

      <div className="playerInfo">
        <div className="playerName">
          <p>{props.playerName}</p>
        </div>
        <div className="playerButtons">
          <button className="fieldButton" onClick={() => clickAddFieldPlayer(i, allPlayersObj)} >Field</button>
          <button className="subButton" onClick={() => clickAddSub(i, allPlayersObj)} >Sub</button>
        </div>
      </div>

    </div>
  );
}

export default IndividualPlayer;
