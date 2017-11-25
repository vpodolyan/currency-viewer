import React from 'react';
import {PropTypes} from 'prop-types';

export const AddRateButton = ({onClick}) => (
    <span
        className="cross"
        onClick={onClick}
    >
        +
    </span>
)

AddRateButton.PropTypes = {
    onClick: PropTypes.func
}
