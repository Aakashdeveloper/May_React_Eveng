import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from  'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './App';
import reducer from './reducer';

const createStoreWithMiddleware = applyMiddleware()(createStore)

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducer)}>
        <App />
    </Provider>, document.getElementById('root'));
