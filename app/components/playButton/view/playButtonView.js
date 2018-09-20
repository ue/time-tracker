/*eslint-disable*/
import React, { Component, Fragment } from 'react';
// Internal Components

// Assets
import PlayIcon from '../../../assets/images/play.svg';
import StopIcon from '../../../assets/images/stop.svg';

export default class PlayButtonView extends Component {
  /* Props
   * ------------------------------------------------
   *   @prop { startTime }        obj          - Coming from moment current time.
   *   @prop { passingTime }      number       - Passing time according to timer.
   *
   */

  constructor(props) {
    super(props);

    this.state = {};
  }

  /* Life Cycle Functions
   * ------------------------------------------------ */

  render() {
    const { startTime, companyTime } = this.props;

    return (
      <Fragment>
        <a
          className={this._getPlayButtonClassName()}
          // style={{
          //   backgroundColor: running ? '#60bf77' : '#6a849f'
          // }}
          onClick={() => this._handlePlayButtonOnClick()}
        >
          {this._getPlayButtonIcon()}
        </a>
      </Fragment>
    );
  }

  /* Component Functions
   * ------------------------------------------------ */

  _handlePlayButtonOnClick = () => {
    const { handleOnClick } = this.props;

    handleOnClick && handleOnClick();
  };

  _getPlayButtonIcon = () => {
    const { isTimerActive } = this.props;
    let IconSvg = PlayIcon;

    isTimerActive ? (IconSvg = StopIcon) : null;

    return <IconSvg className="play-button-icon" />;
  };

  _getPlayButtonClassName = () => {
    const { isTimerActive } = this.props;
    let className = 'play-button';

    isTimerActive ? (className += ' active-play-button') : null;

    return className;
  };
}