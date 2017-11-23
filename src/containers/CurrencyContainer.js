import {connect} from "react-redux";
import {CurrencyRates} from '../components/CurrencyRates';
import {RatesActions} from '../actions/RatesActions';
import {CurrencyApi} from '../api/CurrencyApi';

const mapStateToProps = (state) => ({
    rates: state.rates
}) 

const mapDispatchToProps = (dispatch) => {
    const actions = new RatesActions(new CurrencyApi())

    return {
        getRates: () => dispatch(actions.getRates())
    }
}

export const CurrencyContainer = connect(mapStateToProps, mapDispatchToProps)(CurrencyRates);