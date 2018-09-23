import React from 'react';

const DividerView = ({ isTimerActive }) => (
  <div className="divider">
    <p className={isTimerActive ? 'is-divider-active' : ''}>:</p>
  </div>
);

export default DividerView;
