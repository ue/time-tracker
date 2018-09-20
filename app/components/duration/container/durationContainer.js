/*eslint-disable*/
import React, { Component } from 'react';
import { DurationView } from '../';

export default class DurationContainer extends Component {
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

  render() {
    return <DurationView {...this.props} />;
  }

  /* Component Functions
   * ------------------------------------------------ */
}
