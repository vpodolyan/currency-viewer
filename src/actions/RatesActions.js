import {CurrencyApi} from '../api/CurrencyApi';
import {GET_RATES, ADD_RATE, DELETE_RATE} from '../actions/types';
import {createActionThunk} from 'redux-thunk-actions';

import Storage from '../utils/Storage';
import {localStorageKey, initialState} from '../consts';
import {isDateLessThanToday, handleFixerApiResponse} from '../utils/index';

export class RatesActions {
    constructor (api) {
        this.api = new CurrencyApi();
    }

    getRates = createActionThunk(GET_RATES, async ({getState}) => {
        const localStorage = new Storage('localStorage');

        const storedState = localStorage.get(localStorageKey);

        if (!storedState || !storedState.date || isDateLessThanToday(storedState.date)) {
            const state = getState().currencies;
            
            if (!state.rates || state.rates.length === 0) {
                return initialState;
            }

            const response = await this.api.getLatest(getState().currencies);
            return handleFixerApiResponse(response);
        }

        return storedState;        
    })

    addRate = createActionThunk(ADD_RATE, (curencyName, {getState}) => {
        const state = getState();

        return this.api.getLatest([
            ...state.currencies,
            curencyName
        ]).then(response => {
            return {
                ...handleFixerApiResponse(response),
                currencyToAdd: curencyName
            }
        });
    })

    deleteRate = (currencyName) => ({
        type: DELETE_RATE,
        payload: {
            currencyToDelete: currencyName
        }
    })
}