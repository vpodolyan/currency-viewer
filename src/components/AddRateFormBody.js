import React from 'react';
import {PropTypes} from 'prop-types';

import {currencies} from '../consts';

export class AddRateFormBody extends React.Component {
    static propTypes = {
        onRateAdd: PropTypes.func,
        onCloseClick: PropTypes.func
    }

    state = { 
        selectedCurrency: ''
    }

    onCurrencySelectChange = (event) => {
        const selectedCurrency = event.target.value;

        this.setState({
            selectedCurrency
        }, () => {
            if (selectedCurrency && selectedCurrency.length > 0) {
                this.props.onRateAdd(selectedCurrency)
            }
        })
    }

    render() {
        const currencySelectOptions = [<option key="none" value="">Select currency name</option>]
        
        currencySelectOptions
            .push(currencies.map(currency => <option key={currency} value={currency}>{currency}</option>));

        return (
            <div>
                <select
                    className="currency-select"
                    onChange={this.onCurrencySelectChange}
                    value={this.state.selectedCurrency}
                >
                    {currencySelectOptions}
                </select>
                <div
                    className="close"
                    onClick={this.props.onCloseClick}
                ></div>
            </div>
        )
    }
}
