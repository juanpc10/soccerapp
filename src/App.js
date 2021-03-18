import React from 'react';
import './App.css';
import AllPlayers from './components/allPlayers/AllPlayers';
import InitialPlayers from './components/initialPlayers/InitialPlayers';
import SubPlayers from './components/subPlayers/SubPlayers';



import { GlobalProvider } from './context/globalState';



function App() {
  return (
    <GlobalProvider>
      <div className="app-area">
        <h2>React Team</h2>
        <AllPlayers />
        <InitialPlayers  />
        <SubPlayers />
      </div>
    </GlobalProvider>
  );
}

export default App;



// https://www.goal.com/en/lists/ballon-dor-2020-power-rankings/whcizarhekx113s80lap7bhcr#1129yb08fyb9l1agxq5hjtzk2h