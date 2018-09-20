/*eslint-disable*/
import React, { Component } from 'react';
import { HeaderView } from '../';

export default class HeaderContainer extends Component {
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
    return <HeaderView {...this.props} />;
  }

  /* Component Functions
   * ------------------------------------------------ */
}
