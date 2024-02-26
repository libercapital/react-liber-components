import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Cls1 = styled.circle`
  fill: #fff;
`;

const Cls2 = styled.path`
  fill: #4993cf;
  fill-opacity: 0.2;
`;

const Cls3 = styled.path`
  fill:#11cc6e;
`;

const Cls4 = styled.path`
  fill: #4993cf;
`;

const Cls5 = styled.path`
  fill: #4993cf;
  opacity: 0.4;
`;

const Cls6 = styled.path`
  fill: #4993cf;
  fill-opacity: 0.4;
`;

const MagnifyChartIcons = ({ className }) => (
  <svg className={className} width="52" height="52" viewBox="0 0 564 564" xmlns="http://www.w3.org/2000/svg">
    <Cls1 cx="282.65" cy="281.52" r="281.11"/>
    <Cls2 d="M282,0C126.26,0,0,126.25,0,282S126.26,564,282,564,564,437.74,564,282,437.75,0,282,0ZM233.69,369.77A122.45,122.45,0,1,1,356.14,247.32,122.45,122.45,0,0,1,233.69,369.77Z" />
    <Cls3 d="M367.36,145.9c1,1.3,2.06,2.61,3.15,4l5.55,6.22c3.77-4.28,7.91-8.24,11.71-12.09a9,9,0,0,1,1.3.28c16.28,7.42,31.43,1.54,38.48-14.76a5,5,0,0,1,3.78-2.2c11.33-.17,22.66-.1,34-.1h4.62V113.57h-4.5c-11.33,0-22.66,0-34,0-2.09,0-3.29-.39-4.17-2.61-6-15-21.64-21.76-35.93-15.76s-20.21,21.7-14,36.76a4,4,0,0,1-.26,3.4c-3.21,3.7-6.67,7.19-9.94,10.65l3.4,3.81C369.42,148.51,368.34,147.2,367.36,145.9Zm34.44-39.24a14,14,0,0,1,13.77,13.75A13.62,13.62,0,0,1,402,133.85a13.35,13.35,0,0,1-13.65-13.61A13.65,13.65,0,0,1,401.8,106.66Z" />
    <Cls4 d="M460.16,424.24q-40.37-40.51-80.92-80.85c-2.25-2.23-2.3-3.75-.73-6.35a169.79,169.79,0,0,0,9-16.46q27.52-59.4,8.91-122.24a171,171,0,0,0-18-39.95c-.44-.73-10.41-15-10.58-15.23-.87-1-1.72-2-2.57-3.06C338.67,108,304.9,88,263.83,80.44c-7.3-1.34-14.71-2.11-22.07-3.14h-19.2c-7,1-14,1.73-20.86,3.12Q123.45,96.17,83.9,165.58a162.27,162.27,0,0,0-20.63,69.49,19,19,0,0,1-.71,3v20.8c.27,1.42.6,2.83.81,4.26,1,6.72,1.59,13.51,3,20.14a166.56,166.56,0,0,0,39.11,77.56,170.6,170.6,0,0,0,159.71,54.65,164.24,164.24,0,0,0,54.94-20.93c5.75-3.47,5.8-3.4,10.65,1.46q38.46,38.46,76.94,76.91c2.17,2.16,4.44,4.23,6.8,6.18,18.36,15.13,48.08,6.46,55.47-16.14C474.87,448,471.06,435.17,460.16,424.24Zm-224.1-19.49c-90.47,1.38-158.83-70.31-160-154.11C74.78,160.72,146,91.92,230.28,90.73c89.77-1.27,159.64,70.24,160,157.14C389.49,335.54,320.37,403.46,236.06,404.75Zm103.53-20.18,30.14-30.11L386,370.63l-30.2,30.1ZM453.66,465.1a21.77,21.77,0,0,1-28.07,5.22,21.33,21.33,0,0,1-4.46-3.32c-18.27-18.26-36.49-36.57-54.31-54.44l31.12-31.07c17.7,17.65,36.14,35.74,54.2,54.21C460.57,444.31,460.8,456.34,453.66,465.1Z" />
    <Cls5 d="M364,409.66l34.76-33.38s57.28,44.38,61.45,60.32,9.1,38.31-6.07,38.31-29.21,17.07-45.9-10.62-47.8-48.56-47.8-48.56Z" />
    <Cls6 d="M233.15,88A158.9,158.9,0,1,0,392,246.9,158.9,158.9,0,0,0,233.15,88Zm1.09,284.12a121.7,121.7,0,1,1,121.7-121.71A121.71,121.71,0,0,1,234.24,372.12Z" />
    <Cls3 d="M129.77,234.36a3.63,3.63,0,0,1,2.65,1.65c9.19,18,21.09,22.67,39.76,15.15,9.81,9.79,19.73,19.63,29.5,29.63.64.66.45,2.68,0,3.79-5.41,12.9-1,27.4,10.48,34.3,12.2,7.31,27,4.76,35.8-6.56,6.35-8.21,7.63-17.45,3.49-27.09-1-2.43-1.07-3.86.93-5.83q20.09-19.77,39.91-39.84c1.61-1.62,2.78-2,5.05-1a27,27,0,0,0,35.8-35.67c-1-2.23-.81-3.49.9-5.12,4.12-3.92,3.33-3.33,7.4-7.44-2.12-4.35-3.11-8.56-7.13-12-3.42,4-.12-.18,0,0-5.18,5.13-5.69,5.68-11.06,10.79a3.44,3.44,0,0,1-3.08.16c-16.56-8.14-37.55,2.58-38.78,22.7-.31,5.1,3.36,15.8,3.89,16-2.55,2.32-5.19,4.54-7.64,7q-17.45,17.33-34.76,34.79c-1.9,1.92-3.3,2.24-5.81,1.06-7.15-3.35-14.41-3-21.67,0-1.18.5-3.35.62-4.08-.09-9.93-9.65-19.68-19.49-29.6-29.39,8.63-16.06,1-32.81-12.54-38.8-12-5.31-30.52-1.88-37.41,17.88-8.1,0-8.15,0-16.33,0-.2,4.61-3,9.12-2.39,13.73C121.37,234.22,121.68,234.24,129.77,234.36Zm179-34a13.35,13.35,0,0,1,13.15,13.7,13.63,13.63,0,0,1-13.51,13.48,13.94,13.94,0,0,1-13.69-13.84A13.64,13.64,0,0,1,308.76,200.35Zm-82.09,81.79a13.59,13.59,0,1,1-.35,27.18,13.59,13.59,0,0,1,.35-27.18ZM158.3,214a13.66,13.66,0,0,1,13.62,13.38,13.93,13.93,0,0,1-13.69,13.82,13.63,13.63,0,0,1-13.5-13.9A13.38,13.38,0,0,1,158.3,214Z" />
    <Cls4 d="M233.73,117.49c-70.52-.47-130.33,55.31-130.91,130-.54,70.48,55.58,130.42,129.89,131C302.76,379,363,323.31,364,248.35,363.63,177.69,308.22,118,233.73,117.49ZM186.25,356.3c-53.12-23.17-75.75-76.54-70.09-120.8h0a70.78,70.78,0,0,1,2.13-12.6c7.21-38.89,39.43-78,86.69-89.54,53.58-13.13,101.31,12.53,124.37,46.44a65.4,65.4,0,0,1,6.82,11.38l0,0c20,32.52,23.68,86.79-9.68,129.45C292.09,364.61,234.7,377.43,186.25,356.3Z" />
  </svg>
);

MagnifyChartIcons.displayName = 'MagnifyChartIcons';
MagnifyChartIcons.propTypes = {
  className: PropTypes.string,
};

MagnifyChartIcons.defaultProps = {
  className: '',
};

export default MagnifyChartIcons;
