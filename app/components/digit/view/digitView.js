import React from 'react';

const DigitView = ({ isTimerActive, value }) => (
  <div key="12" className={isTimerActive ? 'digit isDigitActive' : 'digit'}>
    <span>{value}</span>
  </div>
);

export default DigitView;
