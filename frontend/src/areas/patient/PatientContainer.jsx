import React, { Component } from "react";
import { getChangeReports, getPatients } from "../../services/DataService";

import Patient from "./Patient";

export default class PatientContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { user: {}, loading: true };
    if (props.match) {
      getPatients(props.match.params.patientId).then(data => {
        this.setState({ user: data, loading: false });

        let p = [];
        for (const event of data.history) {
          p.push(getChangeReports(event));
        }
        Promise.all(p).then(data => {
          this.setState({ shiftChanges: data });
        });
      });
    }
  }
  render() {
    return (
      <Patient
        user={this.state.user}
        shiftChanges={this.state.shiftChanges}
        {...this.props}
      />
    );
  }
}
