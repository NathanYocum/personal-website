import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';

import typeDefs from '../schema/schema'
import resolvers from '../resolvers/resolvers'

import db from '../models/index'

// Initialize the app
const app = express();

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

// The GraphQL endpoint
app.use('/graphql', bodyParser.json(), graphqlExpress({ 
  schema,
  context: {
    db
  } 
}));

// GraphiQL, a visual editor for queries
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

// Start the server
db.sequelize.sync({}).then(() => {
  app.listen(3000);
});