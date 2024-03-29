import React from 'react';
import PropTypes from 'prop-types';

const FaCreditCard = ({ className }) => (
  <svg className={className} width="52" height="52" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
    <path d="M1824 128q66 0 113 47t47 113v1216q0 66-47 113t-113 47h-1600q-66 0-113-47t-47-113v-1216q0-66
      47-113t113-47h1600zm-1600 128q-13 0-22.5 9.5t-9.5 22.5v224h1664v-224q0-13-9.5-22.5t-22.5-9.5h-1600zm1600 1280q13 0
      22.5-9.5t9.5-22.5v-608h-1664v608q0 13 9.5 22.5t22.5 9.5h1600zm-1504-128v-128h256v128h-256zm384
      0v-128h384v128h-384z"
    />
  </svg>
);

FaCreditCard.displayName = 'FaCreditCard';
FaCreditCard.propTypes = {
  className: PropTypes.string,
};

FaCreditCard.defaultProps = {
  className: '',
};

export default FaCreditCard;
