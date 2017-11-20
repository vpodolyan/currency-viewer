import {CurrencyApi} from '../api/CurrencyApi';
import {GET_RATES} from '../actions/types';

export class RatesActions {
    constructor () {
        this.api = new CurrencyApi();
    }

    getRates = createActionThunk(GET_RATES, () => this.api.getRates())
}