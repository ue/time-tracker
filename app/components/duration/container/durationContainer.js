/*eslint-disable*/
import React, { Component } from 'react';
import { DurationView } from '../';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as TimerActions from '../../../actions/timer';

// Utilities
import { getMoment, getSeperatedTime } from '../../../utilities/time';

class DurationContainer extends Component {
  /* Props
   * ------------------------------------------------
   *   @prop { string }        isTimerActive       - It just string for title name.
   */

  constructor(props) {
    super(props);

    this.state = {};
  }

  /* Life Cycle Functions
   * ------------------------------------------------ */

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

  /* Component Functions
   * ------------------------------------------------ */
  _handleTimerOnStart = () => {
    const {
      isTimerActive,
      setIsTimerActive,
      setStartTime,
      startTime
    } = this.props;

    setIsTimerActive(!isTimerActive ? true : !isTimerActive);

    // If there is no start time data if so user first clicked the play button.
    // if (!startTime) {
    // }
    setStartTime(getMoment());
  };
}

function mapStateToProps(state) {
  return {
    isTimerActive: state.timer.isTimerActive,
    startTime: state.timer.startTime
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(TimerActions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DurationContainer);
