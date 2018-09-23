import React, { Component, Fragment } from 'react';

import { DurationContainer } from '../../../components/duration';

export default class HomeView extends Component {
  /* Props
   * ------------------------------------------------
   *   @prop { string }        Name       - Description // If you geting props press fill this quick doc.
   */

  render() {
    return (
      <Fragment>
        <DurationContainer />
      </Fragment>
    );
  }
}
