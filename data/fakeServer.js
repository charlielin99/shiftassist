import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import { graphql } from 'graphql';

// Fill this in with the schema string
// const schemaString = `...`;

import schemaText from "./schema.graphql"

// Make a GraphQL schema with no resolvers
const schema = makeExecutableSchema({ typeDefs: schemaText });

// Add mocks, modifies schema in place
addMockFunctionsToSchema({ schema });

const query = `
query getAllPatients {
  patients { id, name }
}
`;

graphql(schema, query).then((result) => console.log('Got result', result));