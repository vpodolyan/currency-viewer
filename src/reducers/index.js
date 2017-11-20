import {GET_RATES, SUCCEEDED} from '../actions/types';

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
        return {
            ...state,
            rates: action.payload
        }
    }

    return state; 
}