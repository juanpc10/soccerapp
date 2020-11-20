export default (state, action) => {
  console.log(state);
  console.log(action);
  switch(action.type) {

    case 'ADD_SUB':
      return {
        ...state,
        subs: [action.payload, ...state.subs] 
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

