/*eslint-disable*/
import React, { Component } from 'react';
import { WidgetPage } from '../';
import { connect } from 'react-redux';
import { ipcRenderer } from 'electron';
import { closeWindow } from '../../../windows';

import { bindActionCreators } from 'redux';
import * as TimerActions from '../../../actions/timer';

class WidgetContainer extends Component {
  /* Props
   * ------------------------------------------------
   *   @prop { string }        title       - It just string for title name.
   */

  constructor(props) {
    super(props);

    this.state = {
      isTimerActive: false,
      duration: 0
    };
  }

  /* Life Cycle Functions
   * ------------------------------------------------ */

  componentDidMount() {
    ipcRenderer.on('timer-status', this._handleTimerStatus);
    this._getDuration();
  }

  componentWillUnmount() {
    ipcRenderer.removeListener('timer-status', this._handleTimerStatus);
  }

  /* Component Functions
* ------------------------------------------------ */

  _getDuration = () => this.sync(ipcRenderer.sendSync('init', ''));

  _handleTimerStatus = (event: any, arg: State) => {
    const { isTimerActive } = this.state;
    this.sync(arg);

    if (isTimerActive !== arg.running) {
      this.setState({ isTimerActive: arg.running });
    }
  };

  sync = arg => {
    this.setState(arg);
  };

  _handleOnPlayClick = () => ipcRenderer.send('timer-status');
  _handleOnClearClick = () => closeWindow();

  render() {
    const { isTimerActive, startTime } = this.state;

    return (
      <WidgetPage
        handleOnPlayClick={() => this._handleOnPlayClick()}
        handleOnClearClick={() => this._handleOnClearClick()}
        startTime={startTime}
        isTimerActive={isTimerActive}
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

export default connect(mapStateToProps)(WidgetContainer);
