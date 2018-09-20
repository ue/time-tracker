/*eslint-disable*/
import React, { Component, Fragment } from 'react';
import { HeaderContainer } from './components/header';
import { FooterContainer } from './components/footer';
import { DurationContainer } from './components/duration';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Fragment>{this.props.children}</Fragment>;
  }
}
