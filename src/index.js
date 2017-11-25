import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk';

import {ratesReducer} from './reducers/ratesReducer';
import {Layout} from './components/Layout';

import './styles/app.css';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    ratesReducer,
    composeEnhancers(
        applyMiddleware(thunk)
));

ReactDOM.render(
    <Provider store={store}>
        <Layout />
    </Provider>,
    document.getElementById('root'));
