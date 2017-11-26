import {extractFixerIoRates, isDateLessThanToday} from './index';

describe('extractFixerIoRates tests', () => {
    it('transform the rates object to required array', () => {
        const response = {
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

        expect(extractFixerIoRates(response)).toEqual(expectedRates);
    })

    it('returns empty array if the response object is undefined', () => {
        expect(extractFixerIoRates()).toEqual([]);
    })
})

describe('isDateLessThanToday tests', () => {
    it('returns true if the date passed by is less than today', () => {
        expect(isDateLessThanToday('2017-11-01')).toBe(true);
    })

    it('returns false if the date passed by is today', () => {
        expect(isDateLessThanToday(new Date().toISOString())).toBe(false);
    })
})