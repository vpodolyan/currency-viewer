import {GET_RATES, SUCCEEDED, ADD_RATE} from '../actions/types';
import {extractFixerIoRates} from '../utils';

// rates: [{
//     base: 'RUB',
//     currency: 'USD',
//     value: 59
// },
// {
//     base: 'RUB',
//     currency: 'EUR',
//     value: 70
// },
// {
//     base: 'RUB',
//     currency: 'EUR',
//     value: 70
// },
// {
//     base: 'RUB',
//     currency: 'EUR',
//     value: 70
// }],

const initialState = {
    rates: [],
    currencies: ['USD', 'EUR']
}

export const ratesReducer = (state = initialState, action) => {

    if (action.type === `${GET_RATES}${SUCCEEDED}`) {
        const {payload = {}} = action;
        return {
            ...state,
            rates: extractFixerIoRates(payload)
        }
    }

    if (action.type === `${ADD_RATE}${SUCCEEDED}`) {
        const {payload = {}} = action;
        return {
            ...state,
            rates: extractFixerIoRates(payload),
            currencies: [...state.currencies, payload.currencyToAdd]
        }
    }

    return state; 
}