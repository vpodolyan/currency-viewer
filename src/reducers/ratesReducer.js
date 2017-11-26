import {GET_RATES, SUCCEEDED, ADD_RATE, DELETE_RATE} from '../actions/types';
import {initialState} from '../consts';

export const ratesReducer = (state = initialState, action) => {

    if (action.type === `${GET_RATES}${SUCCEEDED}`) {
        const {payload = {}} = action;
        return {
            ...state,
            rates: payload.rates,
            date: payload.date
        }
    }

    if (action.type === `${ADD_RATE}${SUCCEEDED}`) {
        const {payload = {}} = action;
        return {
            ...state,
            rates: payload.rates,
            currencies: [...state.currencies, payload.currencyToAdd]
        }
    }

    if (action.type === DELETE_RATE) {
        const {payload = {}} = action;
        return {
            ...state,
            rates: state.rates.filter(rate => rate.currency !== payload.currencyToDelete),
            currencies: state.currencies.filter(currency => currency !== payload.currencyToDelete)
        }
    }

    return state;
}