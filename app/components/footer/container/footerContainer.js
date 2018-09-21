/*eslint-disable*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FooterView } from '../';

class FooterContainer extends Component {
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
    const { passingTime, companyTime } = this.props;

    return (
      <FooterView
        companyTime={companyTime}
        passingTime={passingTime}
        {...this.props}
      />
    );
  }

  /* Component Functions
   * ------------------------------------------------ */
}

function mapStateToProps(state) {
  return {
    isTimerActive: state.timer.isTimerActive,
    startTime: state.timer.startTime
  };
}

export default connect(mapStateToProps)(FooterContainer);
