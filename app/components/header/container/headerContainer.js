/*eslint-disable*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HeaderView } from '../';

class HeaderContainer extends Component {
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
    const { isTimerActive } = this.props;
    return <HeaderView isTimerActive={isTimerActive} {...this.props} />;
  }

  /* Component Functions
   * ------------------------------------------------ */
}

function mapStateToProps(state) {
  return {
    isTimerActive: state.timer.isTimerActive
  };
}

export default connect(mapStateToProps)(HeaderContainer);
