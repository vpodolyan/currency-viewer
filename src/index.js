import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk';

import {ratesReducer} from './reducers/ratesReducer';
import {Layout} from './components/Layout';
import Storage from './utils/Storage';
import {localStorageKey, initialState} from './consts';

import './styles/app.css';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const storage = new Storage('localStorage');

const store = createStore(
    ratesReducer,
    storage.get(localStorageKey) || initialState,
    composeEnhancers(
        applyMiddleware(thunk)
));

store.subscribe(() => {
    storage.save(localStorageKey, store.getState());
});

ReactDOM.render(
    <Provider store={store}>
        <Layout />
    </Provider>,
    document.getElementById('root'));
