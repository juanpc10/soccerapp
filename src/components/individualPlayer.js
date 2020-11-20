import React from 'react';
import './individualPlayer.scss';



function IndividualPlayer(props) {
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
          <button className="fieldButton">Field</button>
          <button className="subButton">Sub</button>
        </div>
      </div>

    </div>
  );
}

export default IndividualPlayer;
