import "./App.css";

import React, { Component } from "react";

// import logo from "./logo.svg";
import Particles from "react-particles-js";

class App extends Component {
  render() {
    return (
      <div className="splash container">
        <Particles className="particles">
          <h1>Hi</h1>
        </Particles>
        <div className="centered">
          <h1>ShiftChange</h1>
          <p>
            A mobile, machine learning based solution to one of the largest
            healthcare industry issues.
          </p>
          <a href="#">Background</a>
        </div>
      </div>
    );
  }
}

export default App;
