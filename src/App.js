import React from 'react';
import './App.css';
import AllPlayers from './components/AllPlayers';
import InitialPlayers from './components/InitialPlayers';
import SubPlayers from './components/SubPlayers';


// import InputsForm from './components/InputsForm';
// import TransactionsList from './components/TransactionsList';

// import { GlobalProvider } from './context/globalState';



function App() {
  return (
    <div className="app-area">
      <div className="appCenterArea">
          <h2>React Team</h2>
          <AllPlayers />
          <InitialPlayers />
          <SubPlayers />
      </div>
    </div>
  );
}

export default App;
