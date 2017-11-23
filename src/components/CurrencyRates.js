import React from 'react';
import PropTypes from 'prop-types';
import Col from 'react-bootstrap/lib/Col';
import shortid from 'shortid';

import {Rate} from './Rate';
import {ratePropTypes} from '../model';

export class CurrencyRates extends React.Component {
    componentWillMount () {
        this.props.getRates()
    }

    render () {
        return this.props.rates.map(rate => (
            <Col sm={4}>
                <Rate
                    key={shortid.generate()}
                    rate={rate}
                />
            </Col>
        ))
    }
}

CurrencyRates.PropTypes = {
    rates: PropTypes.arrayOf(ratePropTypes),
    getRates: PropTypes.func.isRequired
}