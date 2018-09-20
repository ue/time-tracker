import React, { Component } from 'react';
/*eslint-disable*/
//  LIBS
import moment from 'moment';

export default class TimerView extends Component {
  /* Props
   * ------------------------------------------------
   *   @prop { string }        className       - Optional. Additional classes to be added to the parent element.
   *   @prop { string }        startTime       - Optional. ISO 8601 formated date passed from the parent as the start time.
   */

  constructor(props) {
    super(props);

    this.state = {
      startTime: props.startTime ? moment(props.startTime) : moment(),
      time: null,
      format: ''
    };

    this.timer = null;
  }

  /* Life Cycle Functions
   * ------------------------------------------------ */

  componentDidMount() {
    this._incrementTimer();
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  render() {
    const { time, format } = this.state;

    return (
      <span>
        {this.state.time}
        {format}
      </span>
    );
  }

  /* Component Functions
   * ------------------------------------------------ */
  _incrementTimer() {
    this.timer = setTimeout(() => {
      const difference = moment().diff(this.state.startTime);
      const format = difference >= 1000 * 60 * 60 ? 'H:mm:ss' : 'mm';
      const time = moment.utc(difference).format(format);

      this.setState({
        time,
        format: this._setFormat(format)
      });

      this._incrementTimer();
    }, 1000);
  }

  _setFormat = format => {
    if (format === 'HH:mm:ss') {
      return 'H';
    }
    return 'm';
  };
}
