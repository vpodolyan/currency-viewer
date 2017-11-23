import {CurrencyApi} from '../api/CurrencyApi';
import {GET_RATES} from '../actions/types';
import {createActionThunk} from 'redux-thunk-actions';

export class RatesActions {
    constructor (api) {
        this.api = new CurrencyApi();
    }

    getRates = createActionThunk(GET_RATES, () => this.api.getLatest())
}