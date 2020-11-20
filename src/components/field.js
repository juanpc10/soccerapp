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
          
            // <div className="goalKeeperArea">
            //   <div>
            //     <div className="pictureXbutton">
            //       <button>x</button>
            //     </div>
            //     <div className="fieldPictureArea">
            //       <img src="https://s.hs-data.com/bilder/spieler/gross/119750.jpg"></img>
            //     </div>
            //   </div>
            // </div>

            // <div className="defenseArea">
            //   <div>
            //       <div className="pictureXbutton">
            //         <button>x</button>
            //       </div>
            //       <div className="fieldPictureArea">
            //         <img src="https://s.hs-data.com/bilder/spieler/gross/119750.jpg"></img>
            //       </div>
            //     </div>
            //     <div>
            //       <div className="pictureXbutton">
            //         <button>x</button>
            //       </div>
            //       <div className="fieldPictureArea">
            //         <img src="https://s.hs-data.com/bilder/spieler/gross/119750.jpg"></img>
            //       </div>
            //     </div>
            //     <div>
            //       <div className="pictureXbutton">
            //         <button>x</button>
            //       </div>
            //       <div className="fieldPictureArea">
            //         <img src="https://s.hs-data.com/bilder/spieler/gross/119750.jpg"></img>
            //       </div>
            //     </div>
            //     <div>
            //       <div className="pictureXbutton">
            //         <button>x</button>
            //       </div>
            //       <div className="fieldPictureArea">
            //         <img src="https://s.hs-data.com/bilder/spieler/gross/119750.jpg"></img>
            //       </div>
            //     </div>
            //   </div>
            
            // <div className="midfieldArea">
            //   <div>
            //     <div className="pictureXbutton">
            //       <button>x</button>
            //     </div>
            //     <div className="fieldPictureArea">
            //       <img src="https://s.hs-data.com/bilder/spieler/gross/119750.jpg"></img>
            //     </div>
            //   </div>
            //   <div>
            //     <div className="pictureXbutton">
            //       <button>x</button>
            //     </div>
            //     <div className="fieldPictureArea">
            //       <img src="https://s.hs-data.com/bilder/spieler/gross/119750.jpg"></img>
            //     </div>
            //   </div>
            //   <div>
            //     <div className="pictureXbutton">
            //       <button>x</button>
            //     </div>
            //     <div className="fieldPictureArea">
            //       <img src="https://s.hs-data.com/bilder/spieler/gross/119750.jpg"></img>
            //     </div>
            //   </div>
            // </div>

            // <div className="strikersArea">
            //   <div>
            //     <div className="pictureXbutton">
            //       <button>x</button>
            //     </div>
            //     <div className="fieldPictureArea">
            //       <img src="https://s.hs-data.com/bilder/spieler/gross/119750.jpg"></img>
            //     </div>
            //   </div>
            //   <div>
            //     <div className="pictureXbutton">
            //       <button>x</button>
            //     </div>
            //     <div className="fieldPictureArea">
            //       <img src="https://s.hs-data.com/bilder/spieler/gross/119750.jpg"></img>
            //     </div>
            //   </div>
            //   <div>
            //     <div className="pictureXbutton">
            //       <button>x</button>
            //     </div>
            //     <div className="fieldPictureArea">
            //       <img src="https://s.hs-data.com/bilder/spieler/gross/119750.jpg"></img>
            //     </div>
            //   </div>
            // </div> 

        })}

      </div>
    </div>
  );
}

export default Field;
