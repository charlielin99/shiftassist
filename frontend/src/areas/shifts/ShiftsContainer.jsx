import React, { Component } from "react";
import { getShifts, query } from "../../services/GQLDataService";

import Shifts from "./Shifts";

export default class ShiftsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { users: [], loading: true };
    query(
      `
    query nurse($id: String! = "5c69784c0b3e17bb8a8f3273") {
        nurse(id: $id) {
            firstName
            lastName
            shifts {
                startTime
                endTime
            }
        }
    }`,
      { $id: "5c69784c0b3e17bb8a8f3273" }
    ).then(data => {
      console.log(data);

      this.setState({
        shifts: data && data.data.nurse && data.data.nurse.shifts,
        loading: false
      });
    });
  }
  render() {
    return (
      <Shifts
        shifts={this.state && this.state.shifts}
        loading={this.state.loading}
      />
    );
  }
}
