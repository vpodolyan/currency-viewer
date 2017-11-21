import React from 'react';
import PropTypes from 'prop-types';
import Col from 'react-bootstrap/lib/Col';
import shortid from 'shortid';

import {Rate} from './Rate';
import {ratePropTypes} from '../model';

export const CurrencyRates = ({rates}) =>
    rates.map(rate => (
        <Col sm={4}>
            <Rate
                key={shortid.generate()}
                rate={rate}
            />
        </Col>
    ))

CurrencyRates.PropTypes = {
    rates: PropTypes.arrayOf(ratePropTypes)
}