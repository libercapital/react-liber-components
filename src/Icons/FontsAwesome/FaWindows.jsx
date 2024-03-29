import React from 'react';
import PropTypes from 'prop-types';

const FaWindows = ({ className }) => (
  <svg className={className} width="52" height="52" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
    <path d="M746 1006v651l-682-94v-557h682zm0-743v659h-682v-565zm982
      743v786l-907-125v-661h907zm0-878v794h-907v-669z" />
  </svg>
);

FaWindows.displayName = 'FaWindows';
FaWindows.propTypes = {
  className: PropTypes.string,
};

FaWindows.defaultProps = {
  className: '',
};

export default FaWindows;
