import React from 'react';

const DigitView = ({ isTimerActive }) => (
  <div key="12" className={isTimerActive ? 'digit isDigitActive' : 'digit'}>
    <span>0</span>
  </div>
);

export default DigitView;
