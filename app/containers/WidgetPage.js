// @flow
import React, { Component } from "react";
import { ipcRenderer } from "electron";
import Widget from "../components/Widget";
import { closeWindow } from "../windows";

type Props = {};
type State = { running: boolean, duration: number };

export default class WidgetPage extends Component<Props, State> {
  state = { running: false, duration: 0 };

  componentDidMount() {
    ipcRenderer.on("start-stop", this.handleStartStop);
    this.getDuration();
  }

  componentWillUnmount() {
    ipcRenderer.removeListener("start-stop", this.handleStartStop);
  }

  getDuration = () => this.sync(ipcRenderer.sendSync("init", ""));

  handleStartStop = (event: any, arg: State) => this.sync(arg);

  sync = (state: State) => {
    this.setState(state);
  };

  handleClick = () => ipcRenderer.send("start-stop");

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
