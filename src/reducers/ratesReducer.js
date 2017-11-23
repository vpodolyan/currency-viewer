import {GET_RATES, SUCCEEDED} from '../actions/types';
import {extractFixerIoRates} from '../utils';

const initialState = {
    rates: [{
        base: 'RUB',
        currency: 'USD',
        value: 59
    },
    {
        base: 'RUB',
        currency: 'EUR',
        value: 70
    },
    {
        base: 'RUB',
        currency: 'EUR',
        value: 70
    },
    {
        base: 'RUB',
        currency: 'EUR',
        value: 70
    }]
}

export const ratesReducer = (state = initialState, action) => {

    if (action.type === `${GET_RATES}${SUCCEEDED}`) {
        const {payload = {}} = action;
        return {
            ...state,
            rates: extractFixerIoRates(payload)
        }
    }

    return state; 
}