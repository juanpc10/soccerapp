import React from 'react';
import './IndividualSubPlayer.scss';



function IndividualPlayer(props) {
  return (
    <div className="individualPlayerArea">
      <div className="pictureSubXbutton">
        <button>x</button>
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

export default IndividualPlayer;
