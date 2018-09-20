/*eslint-disable*/
import React, { Component } from 'react';
import DividerView from './dividerView';
import DigitView from './digitView';
import { PlayButton } from '../../playButton';
export default class DurationView extends Component {
  /* Props
   * ------------------------------------------------
   *   @prop { boolean }        isTimerActive       - If user press the play button and timer keep going.
   */

  constructor(props) {
    super(props);

    this.state = {};
  }

  /* Life Cycle Functions
   * ------------------------------------------------ */

  render() {
    // const { isTimerActive } = this.props;
    const isTimerActive = true;

    return (
      <div className="duration-wrapper">
        <DigitView isTimerActive={isTimerActive} />
        <DigitView isTimerActive={isTimerActive} />
        <DividerView isTimerActive={isTimerActive} />
        <DigitView isTimerActive={isTimerActive} />
        <DigitView isTimerActive={isTimerActive} />
        <DividerView isTimerActive={isTimerActive} />
        <DigitView isTimerActive={isTimerActive} />
        <DigitView isTimerActive={isTimerActive} />
        <PlayButton />
      </div>
    );
  }

  /* Component Functions
   * ------------------------------------------------ */
}
