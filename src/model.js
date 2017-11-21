import PropTypes from 'prop-types';

export const ratePropTypes = PropTypes.shape({
    currency: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    base: PropTypes.string.isRequired
});
