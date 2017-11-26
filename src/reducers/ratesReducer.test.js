import {ratesReducer} from "./ratesReducer";
import {GET_RATES, SUCCEEDED, ADD_RATE, DELETE_RATE} from '../actions/types';
import { currencies } from "../consts";

describe('rateReducer tests', () => {
    let initialState = {};

    beforeEach(() => {
        return initialState = {
            date: '2017-11-23', 
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
            rates: [
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
        }

        const expectedState = {
            date: payload.date,
            rates: payload.rates
        }

        expect(ratesReducer(initialState, {type: `${GET_RATES}${SUCCEEDED}`, payload})).toEqual(expectedState);
    })

    it('refreshs the rates date on GET_RATES action', () => {
        const payload = {
            base: 'RUB',
            date: '2017-11-24',
            rates: [
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
        }

        const expectedState = {
            date: payload.date,
            rates: payload.rates
        }

        expect(ratesReducer(initialState, {type: `${GET_RATES}${SUCCEEDED}`, payload})).toEqual(expectedState);
    })

    it('adds new currency rate to state on ADD_RATE_SUCCCEDED action', () => {
        initialState.currencies = ['USD'];

        const newCurrency = 'CHF';
        const payload = {
            base: 'RUB',
            date: '2017-11-23',
            rates: [
                {
                    base: 'RUB',
                    currency: 'USD',
                    value: '58'
                },
                {
                    base: 'RUB',
                    currency: newCurrency,
                    value: '59.62'
                }
            ],
            currencyToAdd: newCurrency
        }

        const expectedState = {
            date: payload.date,
            rates: payload.rates,
            currencies: [ ...initialState.currencies, payload.currencyToAdd]
        }

        expect(ratesReducer(initialState, {type: `${ADD_RATE}${SUCCEEDED}`, payload})).toEqual(expectedState);
    })

    it('removes the currency rate from state on DELETE_RATE action', () => {
        initialState.currencies = ['USD'];

        const currencyToDelete = 'USD';
        const payload = {
            currencyToDelete
        }

        const expectedState = {
            date: initialState.date,
            rates: [],
            currencies: []
        }

        expect(ratesReducer(initialState, {type: DELETE_RATE, payload})).toEqual(expectedState);
    })
})