import React, { Component } from "react";

import Patients from "../../components/patients/Patients";
import { getPatients } from "../../services/DataService";

export default class PatientContainer extends Component {
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
