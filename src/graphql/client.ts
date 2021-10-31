import { GraphQLClient } from 'graphql-request';
import { env } from '../env/env';

const endpoint: string = env.graphql_endpoint || '';
const graphAuth: string = env.graphql_token || '';

const client = new GraphQLClient(endpoint, {
  headers: {
    authorization: `Bearer ${graphAuth}`
  }
});

export default client;
