import React from 'react';
import PropTypes from 'prop-types';

const FaWindowMinimize = ({ className }) => (
  <svg className={className} width="52" height="52" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
    <path d="M1792 1312v192q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-192q0-66 47-113t113-47h1472q66 0 113 47t47 113z"/>
  </svg>
);

FaWindowMinimize.displayName = 'FaWindowMinimize';
FaWindowMinimize.propTypes = {
  className: PropTypes.string,
};

FaWindowMinimize.defaultProps = {
  className: '',
};

export default FaWindowMinimize;
