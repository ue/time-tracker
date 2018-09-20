/*eslint-disable*/
import React, { Component } from 'react';
import { WidgetPage } from '../';

export default class WidgetContainer extends Component {
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
    return <WidgetPage {...this.props} />;
  }

  /* Component Functions
   * ------------------------------------------------ */
}
