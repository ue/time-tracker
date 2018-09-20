/*eslint-disable*/
import React, { Component } from 'react';
import DividerView from './dividerView';
import DigitView from './digitView';
import { PlayButton } from '../../playButton';
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
    const { isTimerActive } = this.props;

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
        <PlayButton handleOnClick={() => this._handlePlayButtonClicked()} />
      </div>
    );
  }
}
