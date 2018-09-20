/* eslint-disable */
import React, { Component } from 'react';
import { pad, dissectDuration } from '../../../utilities/time';
import PlayIcon from '../../../assets/images/play.svg';
import StopIcon from '../../../assets/images/stop.svg';
import DragIcon from '../../../assets/images/dragndrop.svg';
import ClearIcon from '../../../assets/images/clear.svg';

type Props = {
  onClick: () => void,
  onClear: () => void,
  running: boolean,
  duration: number
};
export default class WidgetView extends Component<Props> {
  render() {
    const { minutes, hours } = dissectDuration(this.props.duration);
    const Icon = this.props.running ? StopIcon : PlayIcon;
    return (
      <div className={styles.container}>
        <DragIcon className={styles.dragIcon} />
        <a className={styles.button} onClick={this.props.onClick} alt="">
          <Icon className={styles.buttonIcon} />
        </a>
        <div
          className={styles.on}
          style={{
            backgroundColor: this.props.running ? '#60be72' : '#10223a'
          }}
        />
        <div className={styles.duration}>
          <p> {`${pad(hours)}:${pad(minutes)}`}</p>
        </div>
        <a className={styles.clear} onClick={this.props.onClear}>
          <ClearIcon className={styles.clearIcon} />
        </a>
      </div>
    );
  }
}
