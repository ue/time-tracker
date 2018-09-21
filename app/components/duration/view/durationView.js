/*eslint-disable*/
import React, { Component } from 'react';
import DividerView from './dividerView';
import DigitsView from './digitsView';
import { PlayButton } from '../../playButton';

// Utilities
import { getSeperatedTime } from '../../../utilities/time';

export default class DurationView extends Component {
  /* Props
   * ------------------------------------------------
   *   @prop { funtion }        handleTimerOnStart       - For handle when timer start.
   *   @prop { boolean }        isTimerActive            - Timer active information.
   *
   */

  constructor(props) {
    super(props);

    this.state = {};
  }

  /* Life Cycle Functions
   * ------------------------------------------------ */

  /* Component Functions
   * ------------------------------------------------ */

  _handlePlayButtonClicked = () => {
    const { handleTimerOnStart } = this.props;

    handleTimerOnStart();
  };

  render() {
    const { isTimerActive, startTime } = this.props;
    const { hours, seconds, minutes } = getSeperatedTime(startTime);

    return (
      <div className="duration-wrapper">
        <DigitsView value={hours} isTimerActive={isTimerActive} />
        <DividerView isTimerActive={isTimerActive} />
        <DigitsView value={minutes} isTimerActive={isTimerActive} />
        <DividerView isTimerActive={isTimerActive} />
        <DigitsView value={seconds} isTimerActive={isTimerActive} />
        <PlayButton handleOnClick={() => this._handlePlayButtonClicked()} />
      </div>
    );
  }
}
