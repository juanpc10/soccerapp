import React, { createContext, useReducer } from 'react';
import AppReducer from './appReducer';


// Initial state
const initialState = {
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
  // function deleteSingleEvent (singleEvent) {
  //   dispatch({
  //     type: 'delete_singleEvent',
  //     payload: singleEvent
  //   });
  // }
  // function editSingleEvent (singleEvent, index) {
  //   dispatch({
  //     type: 'edit_singleEvent',
  //     payload: singleEvent,
  //     editIndex: index
  //   });
  // }
  
  return  (
    // <GlobalContext.Provider value={{ items: state.items, addSingleEvent, deleteSingleEvent, editSingleEvent}}>
    <GlobalContext.Provider value={{ subs: state.subs, addSub}}>
      {children}
    </GlobalContext.Provider>
  )
}
