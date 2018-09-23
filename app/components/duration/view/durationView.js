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
   *   @prop { object }      startTime                   - moment js object.
   *
   */

  constructor(props) {
    super(props);

    this.state = {
      hours: '00',
      seconds: '00',
      minutes: '00'
    };

    this.timer = null;
  }

  /* Life Cycle Functions
   * ------------------------------------------------ */
  componentDidMount() {
    const { isTimerActive } = this.props;

    isTimerActive && this._incrementTimer();
  }

  componentDidUpdate(prevProps) {
    const { isTimerActive } = this.props;

    if (prevProps.isTimerActive !== isTimerActive && isTimerActive) {
      this._incrementTimer();
    } else {
      clearTimeout(this.timer);
    }
  }
  /* Component Functions
   * ------------------------------------------------ */

  _incrementTimer() {
    const { startTime } = this.props;

    this.timer = setTimeout(() => {
      const { hours, seconds, minutes } = getSeperatedTime(startTime);

      this.setState(
        {
          hours,
          seconds,
          minutes
        },
        () => {
          this._incrementTimer();
        }
      );
    }, 1000);
  }

  _handlePlayButtonClicked = () => {
    const { handleTimerOnStart } = this.props;
    handleTimerOnStart();
  };

  render() {
    const { isTimerActive, startTime } = this.props;
    const { hours, seconds, minutes } = this.state;

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
