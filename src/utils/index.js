export function extractFixerIoRates (fixerIoResponse) {
    if (!fixerIoResponse) return [];

    const {rates} = fixerIoResponse;
    return Object.keys(rates).map(rateCurrencyName => ({
            base: fixerIoResponse.base,
            currency: rateCurrencyName,
            value: (1/rates[rateCurrencyName]).toFixed(2)
    })
    , []);
}