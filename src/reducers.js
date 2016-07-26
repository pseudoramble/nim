const initialState = {
  size: 12,
  moves: []
};

export default (state = initialState, action)  => {
  if (action.type === "REMOVE_STICKS") {
    const leftover = state.size - action.payload.amount;
    const computerMove = leftover - (leftover % 4);
    
    return {
      size: computerMove,
      moves: [...state.moves, { player: "user", move: action.payload.amount }, { player: "comp", move: leftover % 4 }]
    };
  }
  
  return state;
}
