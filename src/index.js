import React from 'react';
import { render } from 'react-dom';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider } from 'react-apollo';
import { ThemeProvider } from './shared/ThemeContext';

import AppLayout from './components/AppLayout/AppLayout';
import './assets/style/base.scss';

const link = new HttpLink({
  uri: 'https://graphqlzero.almansi.me/api',
});

const cache = new InMemoryCache();
const client = new ApolloClient({
  link,
  cache,
});

// const httpLink = createHttpLink({
//   uri: 'https://graphqlzero.almansi.me/api',
// });

// const errorLink = onError(({ graphQLErrors }) => {
//   if (graphQLErrors)
//     graphQLErrors.map(({ message }) => {
//       if (message.includes('jwt expired')) {
//         localStorage.removeItem('token');
//         // eslint-disable-next-line no-console
//         console.log('token expired');
//         // logout functionality and redirect to login page
//       }
//       return null;
//     });
// });

// const authLink = setContext((_, { headers }) => {
//   const token = localStorage.getItem('token');

//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : '',
//     },
//   };
// });

// const link = from([errorLink, authLink, httpLink]);

render(
  <ApolloProvider client={client}>
    <ThemeProvider>
      <AppLayout />
    </ThemeProvider>
  </ApolloProvider>,
  document.querySelector('#app'),
);

if (module.hot) {
  module.hot.accept();
}
