import React from 'react';

const DividerView = ({ isTimerActive }) => (
  <div className="divider">
    <p className={isTimerActive && 'isDividerActive'}>:</p>
  </div>
);

export default DividerView;
