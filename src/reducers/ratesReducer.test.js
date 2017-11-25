import {ratesReducer} from "./ratesReducer";
import {GET_RATES, SUCCEEDED, ADD_RATE} from '../actions/types';
import { currencies } from "../consts";

describe('rateReducer tests', () => {
    let initialState = {};

    beforeEach(() => {
        return initialState = {
            rates: [{
                base: 'RUB',
                currency: 'USD',
                value: 59
            }]
        }
    })

    it('returns initial state if the action not found', () => {
        
        expect(ratesReducer(initialState, {type: 'TEST_ACTION'})).toBe(initialState);
    })

    it('returns rates list on GET_RATES_SUCCCEDED action', () => {
        const payload = {
            base: 'RUB',
            date: '2017-11-23',
            rates: {
                USD: 0.017113,
                EUR: 0.014444
            }
        }

        const expectedRates = [
            {
                base: 'RUB',
                currency: 'USD',
                value: '58.44'
            },
            {
                base: 'RUB',
                currency: 'EUR',
                value: '69.23'
            }
        ]

        const expectedState = {
            rates: expectedRates
        }

        expect(ratesReducer(initialState, {type: `${GET_RATES}${SUCCEEDED}`, payload})).toEqual(expectedState);
    })

    it('add new currency to state on ADD_RATE_SUCCCEDED', () => {
        initialState.currencies = ['USD'];

        const newCurrency = 'CHF';
        const payload = {
            base: 'RUB',
            date: '2017-11-23',
            rates: {
                USD: 0.017113,
                CHF: 0.016773
            },
            currencyToAdd: newCurrency
        }

        const expectedState = {
            rates: [
                {
                    base: 'RUB',
                    currency: 'USD',
                    value: (1 / payload.rates.USD).toFixed(2)
                },
                {
                    base: 'RUB',
                    currency: newCurrency,
                    value: '59.62'
                }
            ],
            currencies: [ ...initialState.currencies, payload.currencyToAdd]
        }

        expect(ratesReducer(initialState, {type: `${ADD_RATE}${SUCCEEDED}`, payload})).toEqual(expectedState);
    })
})