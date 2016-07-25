const initialState = { size: 7 };

export default (state = initialState, action)  => {
  if (action.type === "REMOVE_STICKS") {
    const leftover = state.size - action.payload.amount;
    const computerMove = leftover - (leftover % 4);
    
    return {
      size: computerMove
    };
  }
  
  return state;
}
