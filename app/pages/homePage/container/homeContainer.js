/*eslint-disable*/
import React, { Component } from 'react';
import { HomeView } from '../';

export default class HomeContainer extends Component {
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
    return <HomeView {...this.props} />;
  }

  /* Component Functions
   * ------------------------------------------------ */
}
