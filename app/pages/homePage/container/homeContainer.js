/*eslint-disable*/
import React, { Component, Fragment } from 'react';
import { HomeView } from '../';
import { Header } from '../../../components/header';
import { Footer } from '../../../components/footer';

export default class HomeContainer extends Component {
  /* Props
   * ------------------------------------------------
   *   @prop { type }        value       - description.
   */

  constructor(props) {
    super(props);

    this.state = {};
  }

  /* Life Cycle Functions
   * ------------------------------------------------ */

  render() {
    // Note: Header and footer should not be here them using with routing side.
    return (
      <Fragment>
        <Header title="Time Doctor" />
        <HomeView {...this.props} />
        <Footer />
      </Fragment>
    );
  }

  /* Component Functions
   * ------------------------------------------------ */
}
