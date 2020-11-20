import React, { useContext} from 'react';
import './field.scss'

import { GlobalContext } from '../../context/globalState';



function Field(props) {

  // let playerData = props.playerData;
  const { fieldPlayers, deleteFieldPlayer, addToAllPlayers } = useContext(GlobalContext);

  const clickDelete = (index, obj) => {
    addToAllPlayers(obj);
    deleteFieldPlayer(index);
  }
  
  return (
    <div className="fieldArea">
      <div className="fieldPlayerss">
        
        {fieldPlayers.map((item, index) => {
          return (
            <>
              
              <div className={"fieldPlayer" + index}>
                <div className="pictureXbutton">
                  <button onClick={() => clickDelete(index, item)}>x</button>
                </div>
                <div className="fieldPictureArea">
                  <img src={item.image}></img>
                </div>
              </div>
     
            </>
          )
        })}

      </div>
    </div>
  );
}

export default Field;
