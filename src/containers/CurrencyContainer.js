import {connect} from "react-redux";
import {CurrencyRates} from '../components/CurrencyRates';

const mapStateToProps = (state) => ({
    rates: state.rates
}) 

export const CurrencyContainer = connect(mapStateToProps)(CurrencyRates);