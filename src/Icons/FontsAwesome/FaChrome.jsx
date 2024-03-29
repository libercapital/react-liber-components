import React from 'react';
import PropTypes from 'prop-types';

const FaChrome = ({ className }) => (
  <svg className={className} width="52" height="52" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
    <path d="M893 0q240-2 451 120 232 134 352 372l-742-39q-160-9-294 74.5t-185 229.5l-276-424q128-159
      311-245.5t383-87.5zm-747 405l337 663q72 143 211 217t293 45l-230 451q-212-33-385-157.5t-272.5-316-99.5-411.5q0-267
      146-491zm1586 169q58 150 59.5 310.5t-48.5 306-153 272-246 209.5q-230 133-498 119l405-623q88-131
      82.5-290.5t-106.5-277.5zm-836 20q125 0 213.5 88.5t88.5 213.5-88.5 213.5-213.5 88.5-213.5-88.5-88.5-213.5
      88.5-213.5 213.5-88.5z"
    />
  </svg>
);

FaChrome.displayName = 'FaChrome';
FaChrome.propTypes = {
  className: PropTypes.string,
};

FaChrome.defaultProps = {
  className: '',
};

export default FaChrome;
