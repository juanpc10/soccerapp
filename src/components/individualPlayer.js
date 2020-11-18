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
          <p>Robert Lewandowski</p>
        </div>
        <div className="playerButtons">
          <button>Field</button>
          <button>Sub</button>
        </div>
      </div>

    </div>
  );
}

export default IndividualPlayer;
