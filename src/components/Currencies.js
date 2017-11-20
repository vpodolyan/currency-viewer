import React from 'react';
import Col from 'react-bootstrap/lib/Col';

export const Currencies = ({rates}) => {
    return rates.map(rate => (
        <Col sm={4}>
            {`${rate.currency} - ${rate.value} ${rate.base}`}
        </Col>
    ))
}