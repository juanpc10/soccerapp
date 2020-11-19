import React from 'react';
import './individualPlayer.scss';



function IndividualPlayer(props) {
  return (
    <div className="individualPlayerArea">

      <div className="playerPictureArea">
          <img src={props.playerImage}></img>
      </div>

    </div>
  );
}

export default IndividualPlayer;
