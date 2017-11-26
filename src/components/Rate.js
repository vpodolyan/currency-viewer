import React from 'react';
import {PropTypes} from 'prop-types';
import {ratePropTypes} from '../model';

export const Rate = ({rate, onCloseClick}) => {
    const handleCloseClick = () => onCloseClick(rate.currency);

    return (
        <div className="rate card">
            <div className="body">
                <div
                    className="close"
                    onClick={handleCloseClick}
                ></div>
                {`1 ${rate.currency} = ${rate.value} ${rate.base}`}
            </div>
        </div>
    )
}

Rate.PropTypes = {
    rate: ratePropTypes,
    onCloseClick: PropTypes.func
}