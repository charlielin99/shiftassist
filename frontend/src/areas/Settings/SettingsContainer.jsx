import React, { Component } from "react";

import { Query } from "react-apollo";
import Settings from "./Settings";
import { Spin } from "antd";
import { getNurses } from "../../services/DataService";
import gql from "graphql-tag";

export default class SettingsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { user: {} };
    getNurses().then(data => {
      this.setState({ user: data[0] });
    });
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
        <Settings user={this.state.user} />
      </Query>
    );
  }
}
