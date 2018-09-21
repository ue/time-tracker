import React, { Fragment } from 'react';
import { Digit } from '../../digit';

const DigitsView = ({ value, isTimerActive }) =>
  value
    .toString()
    .split('')
    .map((digit, i) => (
      <Fragment key={i}>
        <Digit isTimerActive={isTimerActive} value={digit} />
      </Fragment>
    ));

export default DigitsView;
