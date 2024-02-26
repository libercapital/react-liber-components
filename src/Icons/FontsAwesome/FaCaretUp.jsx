  import React from 'react';
import PropTypes from 'prop-types';

const FaCaretUp = ({ className }) => (
  <svg className={className} width="52" height="52" viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M288.662 352H31.338c-17.818 0-26.741-21.543-14.142-34.142l128.662-128.662c7.81-7.81 20.474-7.81 28.284 0l128.662 128.662c12.6 12.599 3.676 34.142-14.142 34.142z" class=""
    />
  </svg>
);

FaCaretUp.displayName = 'FaCaretUp';
FaCaretUp.propTypes = {
  className: PropTypes.string,
};

FaCaretUp.defaultProps = {
  className: '',
};

export default FaCaretUp;
