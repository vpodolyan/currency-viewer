import {ratesReducer} from "./ratesReducer";
import {GET_RATES, SUCCEEDED} from '../actions/types';

describe('rateReducer tests', () => {
    let initialState = {
        rates: [{
            base: 'RUB',
            currency: 'USD',
            value: 59
        }]
    }

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
})