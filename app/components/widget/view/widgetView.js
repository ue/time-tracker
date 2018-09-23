/* eslint-disable */
import React, { Component } from 'react';

import { WidgetTimer } from '../../widgetTimer';
// Icons
import PlayIcon from '../../../assets/images/play.svg';
import StopIcon from '../../../assets/images/stop.svg';
import DragIcon from '../../../assets/images/dragndrop.svg';
import ClearIcon from '../../../assets/images/clear.svg';

export default class WidgetView extends Component<Props> {
  render() {
    const {
      isTimerActive,
      handleOnPlayClick,
      handleOnClearClick,
      startTime
    } = this.props;
    const Icon = isTimerActive ? StopIcon : PlayIcon;
    return (
      <div className="widget-wrapper">
        <DragIcon className="drag-icon" />
        <a className="button" onClick={() => handleOnPlayClick()} alt="">
          <Icon className="button-icon" />
        </a>
        <div className={isTimerActive ? 'status stoped' : 'status'} />
        <div className="widget-duration">
          <p>
            {isTimerActive ? (
              <WidgetTimer
                startTime={startTime}
                isTimerActive={isTimerActive}
              />
            ) : (
              '00:00'
            )}
          </p>
        </div>
        <a className="clear" onClick={() => handleOnClearClick()}>
          <ClearIcon className="clear-icon" />
        </a>
      </div>
    );
  }
}
