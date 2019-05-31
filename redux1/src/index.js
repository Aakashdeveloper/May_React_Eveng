import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from  'react-redux';
import store from './store';
import MoviesList from './container/movies_list';

ReactDOM.render(
    <Provider store={store}>
        <MoviesList />
    </Provider>, document.getElementById('root'));
