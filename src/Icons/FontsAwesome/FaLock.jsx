import React from 'react';
import PropTypes from 'prop-types';

const FaLock = ({ className }) => (
  <svg className={className} width="52" height="52" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
    <path d="M640 768h512v-192q0-106-75-181t-181-75-181 75-75 181v192zm832 96v576q0 40-28 68t-68 28h-960q-40
      0-68-28t-28-68v-576q0-40 28-68t68-28h32v-192q0-184 132-316t316-132 316 132 132 316v192h32q40 0 68 28t28 68z"
    />
  </svg>
);

FaLock.displayName = 'FaLock';
FaLock.propTypes = {
  className: PropTypes.string,
};

FaLock.defaultProps = {
  className: '',
};

export default FaLock;
