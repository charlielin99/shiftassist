import "./404.scss";

import React, { Component } from "react";

import ButtonLink from "../../components/ButtonLink";
import Particles from "react-particles-js";

class NotFoundPage extends Component {
  render() {
    return (
      <div className="splash container">
        <div className="centered">
          <h1>404</h1>
          <p>Page Not Found</p>
          {/* <Link to="/about">Background</Link> */}
          <br />
          <ButtonLink url="/" size="large">
            Go Home
          </ButtonLink>
        </div>
        <Particles className="particles" />
      </div>
    );
  }
}

export default NotFoundPage;
