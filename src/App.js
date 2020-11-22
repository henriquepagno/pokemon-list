import React, { useEffect } from 'react';
import { Router } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import { persistCache } from 'apollo-cache-persist';

import Header from './components/Header';
import Routes from './routes';

import history from './services/history';
import apolloClient, { cache } from './graphql/apolloClient';

import { StyledContainer } from './styles/StyledToastContainer';

import GlobalStyle from './styles/global';

function App() {
  useEffect(() => {
    async function getPersistance() {
      await persistCache({
        cache,
        storage: window.localStorage,
      });
    }

    getPersistance();
  });

  return (
    <ApolloProvider client={apolloClient}>
      <Router history={history}>
        <Header />
        <Routes />
        <GlobalStyle />
        <StyledContainer autoClose={3000} />
      </Router>
    </ApolloProvider>
  );
}

export default App;
