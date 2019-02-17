import "./Splash.scss";
import logo from "./logo.png";

import React, { Component } from "react";

import ButtonLink from "../../components/ButtonLink";
import { Link } from "react-router-dom";
import Particles from "react-particles-js";
import { ReactComponent as Logo } from "./logo.svg";

class SplashPage extends Component {
  render() {
    return (
      <div className="splash container">
        <div className="centered">
          <h1>ShiftAssist</h1>
          <Logo style={{ height: "15rem", width: "15rem" }} />
          <p>
            A mobile, machine learning based solution to one of the largest
            healthcare industry issues.
          </p>
          <br />
          <ButtonLink url="/patients" size="large">
            Go
          </ButtonLink>
        </div>
        <Particles className="particles" />
      </div>
    );
  }
}

export default SplashPage;
