import {restUrl} from './config';

export class CurrencyApi {
    async getLatest () {
        const response = await fetch(`${restUrl}/latest?base=RUB`);
        return response.json();
    }
}