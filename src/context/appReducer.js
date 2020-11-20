export default (state, action) => {
  console.log(state);
  console.log(action);
  switch(action.type) {

    case 'ADD_SUB':
      return {
        ...state,
        subs: [action.payload, ...state.subs] 
      }
    case 'DELETE_SUB':
      return {
        ...state,
        subs: [...state.subs.slice(0, action.payload), ...state.subs.slice(action.payload + 1, state.length)]
      }

    case 'ADD_FIELDPLAYER':
      return {
        ...state,
        fieldPlayers: [action.payload, ...state.fieldPlayers] 
      }
    case 'DELETE_FIELDPLAYER':
      return {
        ...state,
        fieldPlayers: [...state.fieldPlayers.slice(0, action.payload), ...state.fieldPlayers.slice(action.payload + 1, state.length)]
      }

    case 'ADD_TOALLPLAYERS':
      return {
        ...state,
        allPlayers: [action.payload, ...state.allPlayers] 
      }
    case 'DELETE_FROMALLPLAYERS':
      return {
        ...state,
        allPlayers: [...state.allPlayers.slice(0, action.payload), ...state.allPlayers.slice(action.payload + 1, state.length)]
      }

    default:
      return state;
  }
}

