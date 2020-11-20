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

    // case 'delete_singleEvent':
    // return {
    //   ...state,
    //   items: [...state.items.slice(0, action.payload), ...state.items.slice(action.payload + 1, state.length)]
    // }
    // case 'edit_singleEvent':
    // return {
    //   ...state,
    //   items: [...state.items.slice(0, action.editIndex), action.payload, ...state.items.slice(action.editIndex + 1, state.length)]
    // }

    default:
      return state;
  }
}

