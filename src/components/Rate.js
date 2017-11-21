import React from 'react';
import PropTypes from 'prop-types';
import {ratePropTypes} from '../model';

export const Rate = ({rate}) => (
    `${rate.currency} - ${rate.value} ${rate.base}`
)

Rate.PropTypes = {
    rate: ratePropTypes
}