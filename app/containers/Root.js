// @flow
import React, { Component } from "react";
import { HashRouter as Router } from "react-router-dom";
import Routes from "../routes";

type Props = {};

export default class Root extends Component<Props> {
  render() {
    return (
      <Router>
        <Routes />
      </Router>
    );
  }
}
