/*eslint-disable*/
import React, { Component } from 'react';
import moment from 'moment';
import { FooterView } from '../';

export default class FooterContainer extends Component {
  /* Props
   * ------------------------------------------------
   *   @prop { string }        title       - It just string for title name.
   */

  constructor(props) {
    super(props);

    this.state = {};
  }

  /* Life Cycle Functions
   * ------------------------------------------------ */

  componentWillMount() {}

  componentWillReceiveProps(nextProps) {}

  render() {
    const { passingTime, companyTime } = this.state;

    return <FooterView companyTime={companyTime} passingTime={passingTime} />;
  }

  /* Component Functions
   * ------------------------------------------------ */
}
