export function extractFixerIoRates(fixerIoResponse) {
    if (!fixerIoResponse) return [];

    const {rates} = fixerIoResponse;
    return Object.keys(rates).map(rateCurrencyName => ({
            base: fixerIoResponse.base,
            currency: rateCurrencyName,
            value: (1/rates[rateCurrencyName]).toFixed(2)
    })
    , []);
}

export function isDateLessThanToday(dateString) {
    const date = new Date(dateString);
    const today = new Date();

    return (date.getFullYear() < today.getFullYear()
        || date.getMonth() < today.getMonth()
        || date.getDate() < today.getDate());
}

export function handleFixerApiResponse(response) {
    if (!response) {
        throw Error('Response is undefined')
    }

    response.date = new Date().toISOString();
    response.rates = extractFixerIoRates(response);
    
    return response;
}