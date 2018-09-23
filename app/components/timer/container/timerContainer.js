/*eslint-disable*/
import React, { Component } from 'react';
import { DurationView } from '../';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as TimerActions from '../../../actions/timer';
import { TimerView } from '../';

// Utilities
import {
  getMoment,
  getSeperatedTime,
  getPassingTime
} from '../../../utilities/time';

class TimerContainer extends Component {
  /* Props
   * ------------------------------------------------
   *   @prop { boolean }       isTimerActive      - Is timer working or not.
   *   @prop { number }        passingTime        - Between start time and stop time milliseconds data.
   *   @prop { object }        stopTime           - moment.js object.
   *   @prop { object }        startTime           - moment.js object.
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

  render() {
    return <TimerView {...this.props} />;
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
)(TimerContainer);
