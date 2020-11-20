import React from 'react';
import './field.scss'
// import GoalKeeper from './goalKeeper';



function Field(props) {
  let playerData = props.playerData;
  console.log(playerData);

  return (
    <div className="fieldArea">
      <div className="fieldPlayerss">
        
        {playerData.map((item, index) => {
          return (
            <>
              
              <div className={"fieldPlayer" + index}>
                <div className="pictureXbutton">
                  <button>x</button>
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
