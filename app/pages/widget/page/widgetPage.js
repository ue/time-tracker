import React, { Component } from 'react';
/*eslint-disable*/
import { Widget } from '../../../components/widget';

export default class WidgetPage extends Component {
  /* Props
   * ------------------------------------------------
   *   @prop { string }        Name       - Description // If you geting props press fill this quick doc.
   */

  render() {
    return <Widget {...this.props} />;
  }
}
