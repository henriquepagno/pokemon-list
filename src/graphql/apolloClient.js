import ApolloClient from 'apollo-boost';
import { InMemoryCache } from '@apollo/client/core';

const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
  cache,
  uri:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:5000/'
      : process.env.REACT_APP_API_URL,
});

export default apolloClient;

export { cache };
