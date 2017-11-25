import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

import {RateWrapper} from "./RateWrapper";
import {Rate} from './Rate';
import {NewRate} from './NewRate';
import {ratePropTypes} from '../model';

export class CurrencyRates extends React.Component {
    componentWillMount () {
        this.props.getRates()
    }

    render () {
        return (
            <div>
                {
                    this.props.rates.map(rate => (
                        <RateWrapper key={shortid.generate()}>
                            <Rate
                                rate={rate}
                                onCloseClick={this.props.deleteRate}
                            />
                        </RateWrapper>
                    ))
                }
                <RateWrapper key={shortid.generate()}> 
                    <NewRate />
                </RateWrapper>
            </div>
        )
    }
}

CurrencyRates.PropTypes = {
    rates: PropTypes.arrayOf(ratePropTypes),
    getRates: PropTypes.func.isRequired,
    deleteRate: PropTypes.func.isRequired
}