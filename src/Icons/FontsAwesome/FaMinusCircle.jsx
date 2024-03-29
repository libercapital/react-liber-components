import React from 'react';
import PropTypes from 'prop-types';

const FaMinusCircle = ({ className }) => (
  <svg className={className} width="52" height="52" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
    <path d="M1344 960v-128q0-26-19-45t-45-19h-768q-26 0-45 19t-19 45v128q0 26 19 45t45 19h768q26 0 45-19t19-45zm320-64q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"/>
  </svg>
);

FaMinusCircle.displayName = 'FaMinusCircle';
FaMinusCircle.propTypes = {
  className: PropTypes.string,
};

FaMinusCircle.defaultProps = {
  className: '',
};

export default FaMinusCircle;
