import {connect} from "react-redux";
import {Currencies} from '../components/Currencies';

const mapStateToProps = (state) => ({
    rates: state.rates
}) 

export const CurrencyContainer = connect(mapStateToProps)(Currencies);