/*eslint-disable*/
import React, { Component } from 'react';

//  Images
import Icon from '../../../assets/images/icon.png';

export default class HeaderView extends Component {
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
    const { title } = this.props;

    return (
      <div className={this._getClassName()}>
        <img src={Icon} />
        <p className="title">{title}</p>
      </div>
    );
  }

  /* Component Functions
   * ------------------------------------------------ */

  _getClassName = () => {
    const { isTimerActive } = this.props;

    let className = 'header';

    if (isTimerActive) {
      className += ' is-active-header-color';
    } else {
      className += ' default-header-color';
    }

    return className;
  };
}
