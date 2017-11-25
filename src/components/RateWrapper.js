import React from 'react';
import Col from 'react-bootstrap/lib/Col';

export const RateWrapper = ({children}) => (
    <Col xs={4} sm={3} md={2} className="rate-wrapper">
        {children}
    </Col>
)
