import {restUrl} from './config';

export class CurrencyApi {
    async getLatest (currencies) {
        let url = `${restUrl}/latest?base=RUB`;
        if (currencies && currencies.length > 0) {
            url += `&symbols=${currencies.join()}`;
        }
        const response = await fetch(url);
        return response.json();
    }
}