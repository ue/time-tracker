/*eslint-disable*/
import React, { Component } from 'react';
import { DurationView } from '../';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as TimerActions from '../../../actions/timer';

// Utilities
import {
  getMoment,
  getSeperatedTime,
  getPassingTime
} from '../../../utilities/time';

class DurationContainer extends Component {
  /* Props
   * ------------------------------------------------
   *   @prop { boolean }       isTimerActive      - Is timer working or not.
   *   @prop { number }        passingTime        - Between start time and stop time milliseconds data.
   *   @prop { object }        stopTime           - moment.js object.
   *   @prop { object }        stopTime           - moment.js object.
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
  _handleTimerOnStart = () => {
    const {
      isTimerActive,
      passingTime,
      setIsTimerActive,
      setPassingTime,
      setStartTime,
      setStopTime,
      stopTime,
      startTime
    } = this.props;

    const now = getMoment();

    setIsTimerActive(!isTimerActive ? true : !isTimerActive);

    if (!stopTime && startTime) {
      const _passingTime = getPassingTime(now, startTime) + passingTime;

      setStopTime(now);
      setPassingTime(_passingTime);
    } else {
      setStartTime(getMoment());
      stopTime && setStopTime(null);
    }
  };

  render() {
    const { isTimerActive } = this.props;

    return (
      <DurationView
        handleTimerOnStart={this._handleTimerOnStart}
        isTimerActive={isTimerActive}
        {...this.props}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    isTimerActive: state.timer.isTimerActive,
    passingTime: state.timer.passingTime,
    startTime: state.timer.startTime,
    stopTime: state.timer.stopTime
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(TimerActions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DurationContainer);
