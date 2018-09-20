/*eslint-disable*/
import React, { Component } from 'react';
import { DurationView } from '../';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { IS_TIMER_ACTIVE } from '../../../constants/timer';
import * as TimerActions from '../../../actions/timer';

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
    const { isTimerActive, setIsTimerActive } = this.props;
    console.log(this.props.isTimerActive);

    setIsTimerActive(!isTimerActive ? true : !isTimerActive);
  };
}

function mapStateToProps(state) {
  return {
    isTimerActive: state.timer.isTimerActive
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(TimerActions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DurationContainer);
