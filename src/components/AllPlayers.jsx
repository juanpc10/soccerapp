import React from 'react';
import './AllPlayers.css'



function AllPlayers() {
  return (
    <div className="allPlayers">
      <h4>Players</h4>
      <div className="allPlayersArea">
        <div className="individualPlayerArea">
          <p>player 1</p>
          <div>
            <button>Field</button>
            <button>Sub</button>
          </div>
        </div>
        <div>
          <p>player 2</p>
        </div>
        <div>
          <p>player 3</p>
        </div>
        <div>
          <p>player 4</p>
        </div>
        <div>
          <p>player 5</p>
        </div>
      </div>
    </div>
  );
}

export default AllPlayers;
