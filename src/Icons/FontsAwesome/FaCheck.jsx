import React from 'react';
import PropTypes from 'prop-types';

const FaCheck = ({ className }) => (
  <svg className={className} width="52" height="52" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
    <path d="M1671 566q0 40-28 68l-724 724-136 136q-28 28-68 28t-68-28l-136-136-362-362q-28-28-28-68t28-68l136-136q28-28
    68-28t68 28l294 295 656-657q28-28 68-28t68 28l136 136q28 28 28 68z"
    />
  </svg>
);

FaCheck.displayName = 'FaCheck';
FaCheck.propTypes = {
  className: PropTypes.string,
};

FaCheck.defaultProps = {
  className: '',
};

export default FaCheck;
