import React, { createContext, useReducer } from 'react';
import AppReducer from './appReducer';


// Initial state
const initialState = {
  allPlayers: [
    // {image: "lewan.jpg", name: "Lewandawski"},
    {image: "https://png.pngitem.com/pimgs/s/651-6515481_alisson-png-2019-transparent-png.png", name: "Alisson Becker"},
    {image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD2z0uyT02HVlAWMWpvJW-YIk2yfh77VDyFg&usqp=CAU", name: "Manuel Neuer"},
    {image: "https://s.hs-data.com/bilder/spieler/gross/119750.jpg", name: "Robert Lewandowski"},
    {image: "https://www.pngitem.com/pimgs/m/543-5434304_cristianoronaldo-cr7-juve-juventus-ronaldo-cr7-with-jersey.png", name: "Cristiano Ronaldo"},
    {image: "data:image/jpeg;base64,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", name: "Lionel Messi"},
    {image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_Gl4NAxv5tzNZ2eV7p0TH05iFQzqgDOnG8A&usqp=CAU", name: "Karim Benzema"},
    {image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2lVWfvYN52Vgd5xhpj1oPiCeSnTGmKouZgg&usqp=CAU", name: "Neymar da Silva"},
    {image: "https://png.pngitem.com/pimgs/s/97-975287_kevin-de-bruyne-profile-hd-png-download.png", name: "Kevin De Bruyne"},
    {image: "https://i.pinimg.com/564x/97/c6/0f/97c60f191093ac3e484883d147850e8c.jpg", name: "Kylian Mbappe"},
    {image: "https://i.pinimg.com/474x/d4/2b/5f/d42b5ff73b004e64ebc6738e5045ebed.jpg", name: "Thomas Muller"},
    {image: "https://avatarfiles.alphacoders.com/240/240156.png", name: "Erling Haaland"},
    {image: "https://assets.laliga.com/squad/2019/t186/p17861/512x512/p17861_t186_2019_1_003_000.png", name: "Sergio Ramos"},
    {image: "https://www.thesportsdb.com/images/media/player/cutout/195tls1578151218.png", name: "Serge Gnabry"},
    {image: "https://manunitedcore.com/wp-content/uploads/2020/03/Bruno-Fernandes.png", name: "Bruno Fernandes"},
    {image: "https://avatarfiles.alphacoders.com/240/240155.png", name: "Jadon Sancho"},
    {image: "https://a.fssta.com/content/dam/application/soccer/players/69/25/692527.vresize.350.425.medium.1.png", name: "Paulo Dybala"},
    {image: "https://www.footballtodaylive.com/team-logo/Kai-Havertz.png", name: "Kai Havertz"},
    {image: "https://resources.premierleague.com/premierleague/photos/players/250x250/p110979.png", name: "Sadio Mane"},
    {image: "https://www.mancity.com/meta/media/hq4bjhgn/sterling_head-shoulders.png", name: "Raheem Sterling"},
    {image: "https://resources.premierleague.com/premierleague/photos/players/250x250/p56979.png", name: "Jordan Henderson"},
    // {image: "https://lh3.googleusercontent.com/proxy/pqFy3A8VwlY8HdoSZMjxWrTC5sAUTRPu6_yQpv6cobVorSkITWbs48n1z1MX4SrcZFVpzyxyZkZ4tTNj0erTBWsPEicOes61UblsfHBO2O_CmdMXnLPo11loE5_Z9CwtQKCGa6Sy8dofdJciiKluw5BXo0euobpYa-E", name: "Timo Werner"},
  ],
  fieldPlayers: [],
  subs: [],
}

// context
export const GlobalContext = createContext(initialState);

// provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch ] = useReducer(AppReducer, initialState );

  //actions
  function addSub (sub) {
    dispatch({
      type: 'ADD_SUB',
      payload: sub
    });
  }
  function deleteSub (i) {
    dispatch({
      type: 'DELETE_SUB',
      payload: i
    });
  }
  function addFieldPlayer (fieldPlayer) {
    dispatch({
      type: 'ADD_FIELDPLAYER',
      payload: fieldPlayer
    });
  }
  function deleteFieldPlayer (i) {
    dispatch({
      type: 'DELETE_FIELDPLAYER',
      payload: i
    });
  }

  function addToAllPlayers (allPlayers) {
    dispatch({
      type: 'ADD_TOALLPLAYERS',
      payload: allPlayers
    });
  }

  function deleteFromAllPlayers (i) {
    dispatch({
      type: 'DELETE_FROMALLPLAYERS',
      payload: i
    });
  }
  
  return  (
    <GlobalContext.Provider value={{ allPlayers: state.allPlayers, fieldPlayers: state.fieldPlayers ,subs: state.subs, addSub, addToAllPlayers, deleteSub, deleteFromAllPlayers, addFieldPlayer, deleteFieldPlayer}}>
      {children}
    </GlobalContext.Provider>
  )
}
