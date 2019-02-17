import ApolloClient from "apollo-boost";
import gql from "graphql-tag";

export const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

export const query = (q, v) => {
  return client
    .query({
      query: gql`
        ${q}
      `,
      variables: v
    })
    .catch(error => console.error(error));
  // .then(data => console.log(data))
};

export const getNurses = id => {
  return getUrl("/nurses/", id);
};

export const getPatients = id => {
  return getUrl("/patients/", id);
};

export const getChangeReports = id => {
  return getUrl("/change-reports/", id);
};

function getUrl(url, id) {
  return;
  //   const u = url + (id ? id : "");
  //   return get(u, defaultOptions)
  //     .then(res => {
  //       return res.data;
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
}
