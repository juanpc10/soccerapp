import React, { useContext } from 'react';
import { GlobalContext } from '../context/globalState';
import './individualPlayer.scss';




function IndividualPlayer(props) {

  // const [transaction, handleChangeTransaction] = useState('');
  const { addSub } = useContext(GlobalContext);

  let subObject = {};
  subObject.name = props.playerName;
  subObject.image= props.playerName;

  const clickHandler = e => {
    addSub(subObject);
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
          <button className="fieldButton">Field</button>
          <button className="subButton" onClick={clickHandler} >Sub</button>
        </div>
      </div>

    </div>
  );
}

export default IndividualPlayer;
