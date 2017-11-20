import React from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';

import {CurrencyContainer} from '../containers/CurrencyContainer';

const gridStyles = {marginTop: '4rem'};

export const Layout = () => {
    return (
        <Grid style={gridStyles}>
            <Row>
                <CurrencyContainer />
            </Row>
        </Grid>
    );
} 