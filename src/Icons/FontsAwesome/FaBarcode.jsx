import React from 'react';
import PropTypes from 'prop-types';

const FaBarcode = ({ className }) => (
  <svg className={className} width="52" height="52" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
    <path d="M63 1536h-63v-1408h63v1408zm63-1h-32v-1407h32v1407zm94 0h-31v-1407h31v1407zm157 0h-31v-1407h31v1407zm157
      0h-62v-1407h62v1407zm126 0h-31v-1407h31v1407zm63 0h-31v-1407h31v1407zm63 0h-31v-1407h31v1407zm157
      0h-63v-1407h63v1407zm157 0h-63v-1407h63v1407zm126 0h-63v-1407h63v1407zm126 0h-63v-1407h63v1407zm94
      0h-63v-1407h63v1407zm189 0h-94v-1407h94v1407zm63 0h-32v-1407h32v1407zm94 1h-63v-1408h63v1408z"
    />
  </svg>
);

FaBarcode.displayName = 'FaBarcode';
FaBarcode.propTypes = {
  className: PropTypes.string,
};

FaBarcode.defaultProps = {
  className: '',
};

export default FaBarcode;
