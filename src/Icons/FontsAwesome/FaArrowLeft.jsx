import React from 'react';
import PropTypes from 'prop-types';

const FaArrowLeft = ({ className }) => (
  <svg className={className} width="52" height="52" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
    <path d="M1664 896v128q0 53-32.5 90.5t-84.5 37.5h-704l293 294q38 36 38 90t-38 90l-75 76q-37 37-90 37-52
      0-91-37l-651-652q-37-37-37-90 0-52 37-91l651-650q38-38 91-38 52 0 90 38l75 74q38 38 38 91t-38 91l-293 293h704q52
      0 84.5 37.5t32.5 90.5z"
    />
  </svg>
);

FaArrowLeft.displayName = 'FaArrowLeft';
FaArrowLeft.propTypes = {
  className: PropTypes.string,
};

FaArrowLeft.defaultProps = {
  className: '',
};

export default FaArrowLeft;
