import React, { Component } from "react";

import WrappedNormalLoginForm from "./Login";

export default class LoginContainer extends Component {
  render() {
    return (
      <div className="container full">
        <WrappedNormalLoginForm className="" />
      </div>
    );
  }
}
