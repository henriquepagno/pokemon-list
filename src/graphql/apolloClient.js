import ApolloClient from 'apollo-boost';
import { InMemoryCache } from '@apollo/client/core';

const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
  cache,
  uri: 'http://localhost:5000/',
});

export default apolloClient;

export { cache };
