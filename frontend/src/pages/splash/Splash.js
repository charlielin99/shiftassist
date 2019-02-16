import "./Splash.scss";

import React, { Component } from "react";

import ButtonLink from "../../components/ButtonLink";
import { Link } from "react-router-dom";
import Particles from "react-particles-js";

class SplashPage extends Component {
  render() {
    return (
      <div className="splash container">
        <div className="centered">
          <h1>ShiftChange</h1>
          <p>
            A mobile, machine learning based solution to one of the largest
            healthcare industry issues.
          </p>
          <Link to="/about">Background</Link>
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
