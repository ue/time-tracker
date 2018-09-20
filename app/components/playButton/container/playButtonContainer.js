/*eslint-disable*/
import React, { Component } from 'react';

import PlayButtonView from '../view/playButtonView';

export default class PlayButtonContainer extends Component {
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
    return <PlayButtonView isTimerActive={false} {...this.props} />;
  }

  /* Component Functions
   * ------------------------------------------------ */
}
