//  REACT
/*eslint-disable*/
import React, { Component } from 'react';

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
      time: null
    };

    this.timer = null;
  }

  /* Life Cycle Functions
   * ------------------------------------------------ */

  render() {
    const difference = moment().diff(this.state.startTime);
    const format = difference >= 1000 * 60 * 60 ? 'H:mm:ss' : 'mm:ss';
    const time = moment.utc(difference).format(format);

    return <span>{time}</span>;
  }
}
