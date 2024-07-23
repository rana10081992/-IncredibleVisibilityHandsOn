import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ApolloProvider } from '@apollo/client';
import client from './ApolloClient';

const rootElement = document.getElementById('root');

if (rootElement) {
  // Ensure that rootElement is not null
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <ApolloProvider client={client}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ApolloProvider>
  );
} else {
  console.error("Failed to find the root element");
}
