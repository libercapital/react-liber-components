import React from 'react';
import PropTypes from 'prop-types';

const FaCalendarTimesO = ({ className }) => (
  <svg className={className} width="52" height="52" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
    <path d="M1111 1385l-46 46q-9 9-22 9t-23-9l-188-189-188 189q-10 9-23 
      9t-22-9l-46-46q-9-9-9-22t9-23l189-188-189-188q-9-10-9-23t9-22l46-46q9-9 22-9t23 9l188 188 188-188q10-9 23-9t22
      9l46 46q9 9 9 22t-9 23l-188 188 188 188q9 10 9 23t-9 22zm-983
      279h1408v-1024h-1408v1024zm384-1216v-288q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v288q0 14 9 23t23 9h64q14 0
      23-9t9-23zm768 0v-288q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v288q0 14 9 23t23 9h64q14 0 23-9t9-23zm384-64v1280q0
      52-38 90t-90 38h-1408q-52 0-90-38t-38-90v-1280q0-52 38-90t90-38h128v-96q0-66 47-113t113-47h64q66 0 113 47t47
      113v96h384v-96q0-66 47-113t113-47h64q66 0 113 47t47 113v96h128q52 0 90 38t38 90z"
    />
  </svg>
);

FaCalendarTimesO.displayName = 'FaCalendarTimesO';
FaCalendarTimesO.propTypes = {
  className: PropTypes.string,
};

FaCalendarTimesO.defaultProps = {
  className: '',
};

export default FaCalendarTimesO;
