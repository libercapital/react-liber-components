import React from 'react';
import PropTypes from 'prop-types';

const FaFileText = ({ className }) => (
  <svg className={className} width="52" height="52" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
    <path d="M1596 476q14 14 28 36h-472v-472q22 14 36 28zm-476 164h544v1056q0 40-28 68t-68 28h-1344q-40
      0-68-28t-28-68v-1600q0-40 28-68t68-28h800v544q0 40 28 68t68 28zm160 736v-64q0-14-9-23t-23-9h-704q-14 0-23 9t-9
      23v64q0 14 9 23t23 9h704q14 0 23-9t9-23zm0-256v-64q0-14-9-23t-23-9h-704q-14 0-23 9t-9 23v64q0 14 9 23t23 9h704q14
      0 23-9t9-23zm0-256v-64q0-14-9-23t-23-9h-704q-14 0-23 9t-9 23v64q0 14 9 23t23 9h704q14 0 23-9t9-23z"
    />
  </svg>
);

FaFileText.displayName = 'FaFileText';
FaFileText.propTypes = {
  className: PropTypes.string,
};

FaFileText.defaultProps = {
  className: '',
};

export default FaFileText;
