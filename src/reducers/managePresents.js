export function managePresents(state, action){
  switch(action.type){
    case "INCREASE":
      const updatedPresents = state.numberOfPresents + 1
      return {numberOfPresents: updatedPresents}
    default:
      return state;
  }
}
