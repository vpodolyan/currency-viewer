import {connect} from 'react-redux';
import {RatesActions} from '../actions/RatesActions';
import {CurrencyApi} from '../api/CurrencyApi';

import {AddRateFormBody} from '../components/AddRateFormBody';

const mapDispatchToProps = (dispatch, ownProps) => {
    const actions = new RatesActions(new CurrencyApi());

    return {
        onRateAdd: (currencyName) => {
            dispatch(actions.addRate(currencyName))
            ownProps.onRateAdd && ownProps.onRateAdd();
        }
    }
}

export const AddRateForm = connect(null, mapDispatchToProps)(AddRateFormBody)
