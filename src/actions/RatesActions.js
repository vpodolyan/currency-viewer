import {CurrencyApi} from '../api/CurrencyApi';
import {GET_RATES, ADD_RATE, DELETE_RATE} from '../actions/types';
import {createActionThunk} from 'redux-thunk-actions';

export class RatesActions {
    constructor (api) {
        this.api = new CurrencyApi();
    }

    getRates = createActionThunk(GET_RATES, ({getState}) => this.api.getLatest(getState().currencies))

    addRate = createActionThunk(ADD_RATE, (curencyName, {getState}) => {
        const state = getState();

        return this.api.getLatest([
            ...state.currencies,
            curencyName
        ]).then(response => {
            return {
                ...response,
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