import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Nim from './Nim.jsx';
import gameplay from './reducers.js';

const store = createStore(gameplay);

ReactDOM.render((
    <Provider store={store}>
      <Nim />
    </Provider>
), document.getElementById('app'));
