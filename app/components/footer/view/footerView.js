/*eslint-disable*/
import React, { Component } from 'react';

// Internal Components
import { CompanyTime } from '../../companyTime';
import { Timer } from '../../timer';

export default class FooterView extends Component {
  /* Props
   * ------------------------------------------------
   *   @prop { startTime }        obj          - Coming from moment current time.
   *   @prop { passingTime }      number       - Passing time according to timer.
   *
   */

  constructor(props) {
    super(props);

    this.state = {};
  }

  /* Life Cycle Functions
   * ------------------------------------------------ */

  render() {
    const { startTime, companyTime, isTimerActive } = this.props;

    return (
      <div className="footer">
        <p className="passing-time">
          Worked Today:{' '}
          <Timer isTimerActive={isTimerActive} startTime={startTime} />
        </p>
        <p className="company-time">
          Company Time:{' '}
          <CompanyTime
            isTimerActive={isTimerActive}
            companyTime={companyTime}
            startTime={startTime}
          />
        </p>
      </div>
    );
  }

  /* Component Functions
   * ------------------------------------------------ */
}
