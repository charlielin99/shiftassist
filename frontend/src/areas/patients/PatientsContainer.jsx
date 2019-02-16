import React, { Component } from "react";

import Patients from "./Patients";
import { getPatients } from "../../services/DataService";

export default class PatientsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { users: [], loading: true };
    getPatients().then(data => {
      this.setState({ users: data, loading: false });
    });
  }
  render() {
    return <Patients users={this.state.users} loading={this.state.loading} />;
  }
}
