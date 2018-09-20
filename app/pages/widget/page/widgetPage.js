import React, { Component } from 'react';
/*eslint-disable*/
import { ipcRenderer } from 'electron';
import { Widget } from '../../../components/widget';
import { closeWindow } from '../../../windows';

export default class WidgetPage extends Component {
  /* Props
   * ------------------------------------------------
   *   @prop { string }        Name       - Description // If you geting props press fill this quick doc.
   */
  constructor(props) {
    super(props);

    this.state = { running: false, duration: 0 };
  }

  componentDidMount() {
    ipcRenderer.on('start-stop', this._handleStartStop);
    this._getDuration();
  }

  componentWillUnmount() {
    ipcRenderer.removeListener('start-stop', this._handleStartStop);
  }

  _getDuration = () => this.sync(ipcRenderer.sendSync('init', ''));

  _handleStartStop = (event: any, arg: State) => this.sync(arg);

  sync = (state: State) => {
    this.setState(state);
  };

  handleClick = () => ipcRenderer.send('start-stop');

  render() {
    return (
      <Widget
        onClick={this.handleClick}
        onClear={closeWindow}
        duration={this.state.duration}
        running={this.state.running}
      />
    );
  }
}
