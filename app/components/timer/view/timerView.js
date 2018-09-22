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
      passingTime: props.passingTime || 0,
      time: null,
      format: ''
    };

    this.timer = null;
  }

  /* Life Cycle Functions
   * ------------------------------------------------ */

  componentDidMount() {
    const { isTimerActive } = this.props;
    isTimerActive && this._incrementTimer();
  }

  componentDidUpdate(prevProps) {
    const { isTimerActive } = this.props;

    if (prevProps.isTimerActive !== isTimerActive && isTimerActive) {
      this._incrementTimer();
    } else {
      clearTimeout(this.timer);
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  /* Component Functions
  * ------------------------------------------------ */
  _incrementTimer() {
    this.timer = setTimeout(() => {
      const difference = moment().diff(this.state.startTime);
      const format =
        difference >= 1000 * 60 * 60 ? 'HH' : difference >= 60000 ? 'mm' : 'ss';
      const time = moment.utc(difference).format(format);

      this.setState({
        time,
        format: this._setFormat(format)
      });

      this._incrementTimer();
    }, 1000);
  }

  _setFormat = format => {
    if (format === 'HH') {
      return 'h';
    } else if (format === 'mm') {
      return 'm';
    }
    return 's';
  };

  _getRenderItem = () => {
    const { time, format } = this.state;

    let renderItem = '00s';

    if (time) {
      renderItem = time + format;
    }

    return renderItem;
  };

  render() {
    return <span>{this._getRenderItem()}</span>;
  }
}
