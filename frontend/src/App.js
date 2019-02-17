import "./App.css";

import React, { Component } from "react";

import { ApolloProvider } from "react-apollo";
import AppRouter from "./router";
import { client } from "./services/GQLDataService";

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <AppRouter />;
      </ApolloProvider>
    );
  }
}

export default App;
