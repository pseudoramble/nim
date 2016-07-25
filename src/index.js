import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Nim from './Nim.jsx';

const store = createStore(function(state = { size: 7 }, action) {
  if (action.type === "REMOVE_STICKS") {
    const leftover = state.size - action.payload.amount;
    const computerMove = leftover - (leftover % 4);
    
    return {
      size: computerMove
    };
  }
  
  return state;
});

ReactDOM.render((
    <Provider store={store}>
      <Nim />
    </Provider>
), document.getElementById('app'));
