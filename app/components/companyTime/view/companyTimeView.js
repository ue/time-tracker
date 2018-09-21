/*eslint-disable*/
import React, { Component } from 'react';

// Utilities
import { getFormatedLocalTime } from '../../../utilities/time';

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

  /* Component Functions
 * ------------------------------------------------ */

  // The company time should came from data as much as I know. there for I set it randomly
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

  render() {
    const { description } = this.props;
    const { time } = this.state;

    return <span>{getFormatedLocalTime(time)} GMT</span>;
  }
}
