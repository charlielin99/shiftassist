import React, { Component } from "react";

import Shifts from "./Shifts";
import { getNurses } from "../../services/DataService";

export default class ShiftsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { users: [], loading: true };
    getNurses().then(data => {
      console.log(data);

      this.setState({ nurse: data[0], loading: false });
    });
  }
  render() {
    return <Shifts nurse={this.state.nurse} loading={this.state.loading} />;
  }
}
