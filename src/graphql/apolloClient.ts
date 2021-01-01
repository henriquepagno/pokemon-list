import ApolloClient from 'apollo-boost';
import { InMemoryCache } from '@apollo/client';

const cache = new InMemoryCache() as any;

const apolloClient = new ApolloClient({
  cache,
  uri:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:5000/'
      : process.env.REACT_APP_API_URL,
});

export default apolloClient;

export { cache };
