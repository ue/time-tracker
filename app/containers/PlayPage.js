// @flow
import React, { Component } from 'react';
import { ipcRenderer } from 'electron';
import Play from '../components/Play';

type Props = {};
type State = { running: boolean, duration: number };

export default class PlayPage extends Component<Props, State> {
  state = { running: false, duration: 0 };

  componentDidMount() {
    ipcRenderer.on('start-stop', this.handleStartStop);
    this.getDuration();
  }

  componentWillUnmount() {
    ipcRenderer.removeListener('start-stop', this.handleStartStop);
    // this.stopTick();
  }

  tickInterval = undefined;

  getDuration = () => this.setState(ipcRenderer.sendSync('init', ''));

  handleStartStop = (event: any, arg: State) => {
    this.setState({ running: arg.running, duration: arg.duration });
    // arg.running ? this.startTick() : this.stopTick();
  };

  handleClick = () => ipcRenderer.send('start-stop');

  // stopTick = () => {
  //   if (this.tickInterval) clearInterval(this.tickInterval);
  // };

  // startTick = () => {
  //   this.stopTick();
  //   this.tickInterval = setInterval(
  //     () => this.setState({ duration: this.state.duration + 1000 }),
  //     1000
  //   );
  // };

  render() {
    return (
      <Play
        onClick={this.handleClick}
        duration={this.state.duration}
        running={this.state.running}
      />
    );
  }
}
