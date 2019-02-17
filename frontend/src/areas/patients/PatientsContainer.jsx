import React, { Component } from "react";

import Patients from "./Patients";
import { Query } from "react-apollo";
import { Spin } from "antd";
import gql from "graphql-tag";

// import { getPatients } from "../../services/DataService";

// export default class PatientsContainer extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { users: [], loading: true };
//     getPatients().then(data => {
//       this.setState({ users: data, loading: false });
//     });
//   }
//   render() {
//     return <Patients users={this.state.users} loading={this.state.loading} />;
//   }
// }

export default class PatientsContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Query
        query={gql`
          query patients {
            patients(limit: 100) {
              _id
              firstName
              lastName
              gender
            }
          }
        `}
      >
        {({ loading, error, data }) => {
          //   if (loading) return <Spin></Spin>;
          //   if (error) return <p>Error :(</p>;
          console.log(data);
          return <Patients patients={data.patients} loading={loading} />;
        }}
      </Query>
    );
  }
}
