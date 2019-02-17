import React, { Component } from "react";
import { getChangeReports, getPatients } from "../../services/DataService";

import Patient from "./Patient";
import { Query } from "react-apollo";
import { Spin } from "antd";
import gql from "graphql-tag";

export default class PatientContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { user: {}, loading: true };
    if (props.match) {
      const pID = props.match.params.patientId;
    }
  }
  render() {
    return (
      <Query
        variables={{ id: this.props.match.params.patientId }}
        query={gql`
          query GetPatient($id: String!) {
            patient(id: $id) {
              firstName
              lastName
              email
              phone
              address
              gender
              history {
                _id
                outgoingNurse {
                  lastName
                }
                incomingNurse {
                  lastName
                }
                dateTime {
                  t
                }
              }
            }
          }
        `}
      >
        {({ loading, error, data }) => {
          //   if (loading) return <Spin></Spin>;
          //   if (error) return <p>Error :(</p>;
          console.log(data);
          return (
            <Patient
              user={Object.keys(data).length != 0 && data.patient}
              shiftChanges={this.state.shiftChanges}
              {...this.props}
            />
          );
        }}
      </Query>
    );
  }
}
