import {ratesReducer} from "./index";
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
        const payload = [
            {
                base: 'RUB',
                currency: 'USD',
                value: 59
            },
            {
                base: 'RUB',
                currency: 'EUR',
                value: 70
            }
        ]

        const expectedState = {
            rates: payload
        }

        expect(ratesReducer(initialState, {type: `${GET_RATES}${SUCCEEDED}`, payload})).toEqual(expectedState);
    })
})