import React from 'react';
import { Router } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';

import Header from './components/Header';
import Routes from './routes';

import history from './services/history';
import apolloClient from './graphql/apolloClient';

import GlobalStyle from './styles/global';

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <Router history={history}>
        <Header />
        <Routes />
        <GlobalStyle />
      </Router>
    </ApolloProvider>
  );
}

export default App;
