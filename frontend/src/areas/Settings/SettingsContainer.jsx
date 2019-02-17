import React, { Component } from "react";

import Settings from "./Settings";
import { getNurses } from "../../services/DataService";

export default class SettingsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { user: {} };
    getNurses().then(data => {
      this.setState({ user: data[0] });
    });
  }
  render() {
    return <Settings user={this.state.user} />;
  }
}
