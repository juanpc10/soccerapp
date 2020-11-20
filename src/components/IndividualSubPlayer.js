import React, { useContext } from 'react';
import { GlobalContext } from '../context/globalState';
import './IndividualSubPlayer.scss';



function IndividualSubPlayer(props) {

  const { addToAllPlayers, deleteSub } = useContext(GlobalContext);

  let allPlayersObj = {};
  allPlayersObj.name = props.playerName;
  allPlayersObj.image= props.playerImage;

  let i = props.index;

  const clickDelete = (index, obj) => {
    deleteSub(index);
    addToAllPlayers(obj);
  }

  return (
    <div className="individualPlayerArea">
      <div className="pictureSubXbutton">
        <button onClick={() => clickDelete(i, allPlayersObj)   }>x</button>
      </div>
      <div className="subPlayerPictureArea">
        <img src={props.playerImage}></img>
      </div>

      <div className="playerInfo">
        <div className="playerName">
          <p>{props.playerName}</p>
        </div>
        <div className="playerButtons">
          {/* <button>Field</button>
          <button>Sub</button> */}
        </div>
      </div>

    </div>
  );
}

export default IndividualSubPlayer;
