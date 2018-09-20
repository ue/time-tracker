/*eslint-disable*/
import React, { Component } from 'react';
import moment from 'moment';

export default class CompanyTimeView extends Component {
  /* Props
   * ------------------------------------------------
   *   @prop { xxx }        xxxx       - xxxx.
   */

  constructor(props) {
    super(props);
    this.state = {
      time:
        props.companyTime || this.randomDate(new Date(2012, 0, 1), new Date())
    };
  }

  /* Life Cycle Functions
   * ------------------------------------------------ */
  componentDidMount() {
    this.intervalID = setInterval(() => this._trigger(), 60000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  render() {
    const { description } = this.props;
    return <span>{this._getFormatedTime()} GMT</span>;
  }

  /* Component Functions
   * ------------------------------------------------ */
  _getFormatedTime = () => {
    const { time } = this.state;

    return moment(time)
      .local()
      .format('h:mm A zzZ');
  };

  randomDate(start, end) {
    return new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );
  }

  _trigger = () => {
    this.setState({
      time: this.state.time
    });
  };
}
