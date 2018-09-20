/*eslint-disable*/
import React, { Component } from 'react';
import { WidgetView } from '../';

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
    return <WidgetView {...this.props} />;
  }

  /* Component Functions
   * ------------------------------------------------ */
}
