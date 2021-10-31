import { GraphQLClient } from 'graphql-request';
import { env } from '../env/env';

const endpoint = env.graphql_endpoint;

const client = new GraphQLClient(endpoint, {
  headers: {
    authorization: `Bearer ${env.graphql_token}`
  }
});

export default client;
