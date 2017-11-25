import React from 'react';
import PropTypes from 'prop-types';
import {ratePropTypes} from '../model';

export const Rate = ({rate}) => (
    <div className="rate">
        {`1 ${rate.currency} = ${rate.value} ${rate.base}`}
    </div>
)

Rate.PropTypes = {
    rate: ratePropTypes
}