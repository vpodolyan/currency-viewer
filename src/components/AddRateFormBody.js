import React from 'react';
import {PropTypes} from 'prop-types';

import {currencies} from '../consts';

export class AddRateFormBody extends React.Component {
    static propTypes = {
        onRateAdd: PropTypes.func
    }

    state = { 
        selectedCurrency: ''
    }

    onCurrencySelectChange = (event) => {
        this.setState({
            selectedCurrency: event.target.value
        })
    }

    onRateAddClick = () => {
        const {selectedCurrency} = this.state;

        if (selectedCurrency && selectedCurrency.length > 0) {
            this.props.onRateAdd(selectedCurrency)
        }
    }

    render() {
        const currencySelectOptions = [<option key="none" value="">Select currency name</option>]
        
        currencySelectOptions
            .push(currencies.map(currency => <option key={currency} value={currency}>{currency}</option>));

        return (
            <div>
                <select
                    onChange={this.onCurrencySelectChange}
                    value={this.state.selectedCurrency}
                >
                    {currencySelectOptions}
                </select>
                <div>
                    <button onClick={this.onRateAddClick}>
                        +
            </button>
                </div>
            </div>
        )
    }
}
