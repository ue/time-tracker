/*eslint-disable*/
import React, { Component } from 'react';
import { connect } from 'react-redux';

import PlayButtonView from '../view/playButtonView';

class PlayButtonContainer extends Component {
  /* Props
   * ------------------------------------------------
   *   @prop { string }        title              - It just string for title name.
   *   @prop { boolean }      isTimerActive       - Timer active boleean data.
   *
   */

  constructor(props) {
    super(props);

    this.state = {};
  }

  /* Life Cycle Functions
   * ------------------------------------------------ */

  render() {
    const { isTimerActive } = this.props;

    return <PlayButtonView isTimerActive={isTimerActive} {...this.props} />;
  }

  /* Component Functions
   * ------------------------------------------------ */
}

function mapStateToProps(state) {
  return {
    isTimerActive: state.timer.isTimerActive
  };
}

export default connect(mapStateToProps)(PlayButtonContainer);
